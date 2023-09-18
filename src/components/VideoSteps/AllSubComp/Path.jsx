import React, {
    useEffect,
    useState,
} from "react";
import ToolTip from "../../ToolTip/ToolTip";
import {Logos} from "../../../assets";
import ToggleButton from "../../ToggleButton/ToggleButton";
import LibraryAddPath from "../../LibraryAddPath/LibraryAddPath";
import {useGlobalInfo} from "../../../contexts/GlobalContext";
import {
    deleteSinglePath,
    getAllPath,
} from "../../../hooks/useVideo";
import {useMutation} from "react-query";

const Path = ({pathData, interactionId}) => {
    const [isOpen2, setIsOpen2] = useState(false);
    const [path, setPath] = useState([pathData]);
    const togglePopup2 = () => {
        setIsOpen2(!isOpen2);
        handleFetchPath();
    };

    const {mutate: fetchPath} =
        useMutation(getAllPath);
    const {mutate: deletePath} = useMutation(
        deleteSinglePath
    );
    const {setLoading, setInteractionId,pathDataList, setPathDataList} = useGlobalInfo();

    function handleFetchPath() {
        if (interactionId) {
            fetchPath(interactionId, {
                onSuccess: (data) => {
                    setPath(data?.data);
                    setPathDataList(data?.data);
                    setLoading(false);
                    setInteractionId(data?.data);
                },
                onError: () => {
                    setLoading(false);
                },
            });
        }
    }

    useEffect(() => {
        handleFetchPath();
    }, [pathData]);
    const deleteHandler = (id) => {
        const payload = {
            id: id,
            interactionId: interactionId,
        };
        deletePath(payload);
        handleFetchPath();
    };
    // const handleClick = () => {
    //   setDisplayText(!displayText);
    // };
    const {subfolderId} = useGlobalInfo();
    return (
        <div className="flex flex-col px-2 py-3 gap-3">
            <div className="flex justify-between gap-2">
                <h1 className="font-medium subtitle-size text-[#262626]">
                    Paths
                </h1>
                <div
                    onClick={togglePopup2}
                    className="flex cursor-pointer text-[#3A37A6] items-centerjustify-center gap-2 rounded-sm xxxs:text-[12px] lg:text-[13px]"
                >
                    <img
                        src={Logos.AddSquareIcon}
                        alt="Add Square Icon"
                        className="subicon-size  "
                    />
                    <p className="subtitle-size">
                        Add Path
                    </p>
                </div>
            </div>
            {pathDataList?.map((item) => {
                return (
                    <div className="flex justify-center gap-2 items-center">
                        <div className="flex">
                            <div className="w-[15px] h-[45px] bg-[#AEBFF2] shadow-md rounded-l-md"></div>
                            <h1 className="flex w-56  justify-between gap-1  xxxxl:text-[16px]  xxxs:text-[12px] items-center h-[45px] shadow-md rounded-r-md pl-2">
                               <div className="w-32 overflow-hidden overflow-ellipsis">
                                 {item?.pathText}
                               </div>
                               
                                <img
                                    src={Logos.PathImg1}
                                    alt="Path Img1"
                                    className="w-[55px]"
                                />
                            </h1>
                        </div>
                        <div
                            className="h-5 w-5 rounded-full bg-[#F24B59] px-1 flex justify-center items-center"
                            onClick={() => {
                                deleteHandler(item._id);
                            }}
                        >
                            <img
                                src={Logos.MinusIcon}
                                alt="Minus Icon"
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                );
            })}
            {isOpen2 && (
                <LibraryAddPath
                    interactionId={interactionId}
                    subfolderId={subfolderId}
                    handleClose2={togglePopup2}
                    type="Path"
                />
            )}
        </div>
    );
};

export default Path;
