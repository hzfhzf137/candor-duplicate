import React, {useState} from 'react';
import MenuDropdown from '../../components/MenuDropdown/MenuDropdown';
import {Logos} from '../../assets';
import {useNavigate} from 'react-router-dom';
import {deleteChat, filterContact} from '../../hooks/useContact';
import {useMutation} from 'react-query';

const ContactRow = ({item, clickHandler, setToggleState, setLoading, onsuccess, onError}) => {
    const [dots, setdots] = useState(false);
    const filter = useMutation(filterContact);
    const navigate = useNavigate();
    const dotsHandler = () => {
        setdots(!dots);
    };

//   console.log('item',item)
    function replyHandler() {
        navigate("/reply");
    }

    const menuarray = [
        {
            label: "View contact details",
            icon: Logos.VideoEye,
            link: "/contact2",
        },
        {
            label: "Delete Contact",
            icon: Logos.trash2,
            link: "#",
        },
    ];
    const deleteMutation = useMutation(deleteChat);

    function DeleteChat() {
        setLoading(true);
        localStorage.removeItem("conversationId");
        const Id = item?.contactId;
        deleteMutation.mutate(Id, {
            onSuccess: (data) => {
                if (data.error == false) {

                    setLoading(false);

                    setTimeout(() => {
                        onsuccess(data.message);
                    }, 1000);
                } else if (data.error == true) {
                    setLoading(false);
                    setTimeout(() => {
                        onError(data.message);
                    }, 1000);
                }
                const data2 = '';
                filter.mutate(data2, {
                    onSuccess: (data) => {
                        setToggleState(data.data);
                        setLoading(false);
                    }
                })
            }
        });

        setLoading(false);
    }

    return (
        <>
            <tr key={item.contactId}
                class="bg-white border-b text-[#262626] "
                // onClick={() => {
                //   clickHandler();
                // }}
            >
                {item.firstName && (<th
                    scope="row"
                    class="px-6 py-4 inner-size font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <div className="flex items-center gap-2 pl-3">
                        <img src={Logos.Person4} alt=""/>
                        <h1 className="text-black">{item?.firstName} {item?.lastName}</h1>
                    </div>
                </th>)}
                {(item?.email != null && item.email != undefined) &&
                    (<td class="py-4 inner-size text-start px-6  whitespace-nowrap ">
                        {item?.email}
                    </td>)}
                {(item?.phone != null && item?.phone != undefined) &&
                    (<td class="px-6 py-4 inner-size text-start  whitespace-nowrap">
                        {item?.phone != '' ? item?.phone : <p className="flex justify-start px-6">----</p>}
                    </td>)}
                {(item?.address != null && item?.address != undefined) &&
                    (<td class="px-6 py-4 inner-size text-start whitespace-nowrap">
                        {item?.address != '' ? item?.address : <p className="flex justify-start px-6">----</p>}
                    </td>)}


                {(item?.organization != null && item?.organization != undefined) &&
                    (<td class="px-6 py-4 inner-size text-start whitespace-nowrap ">

                        {item?.organization != '' ? item?.organization :
                            <p className="flex justify-start px-6">----</p>}
                    </td>)}
                {(item?.occupation != null && item?.occupation != undefined) &&
                    (<td class="px-6 py-4 inner-size whitespace-nowrap text-start">
                        {item?.occupation != '' ? item?.occupation : <p className="flex px-6 justify-start ">----</p>}
                    </td>)}
                {(item?.employer != null && item?.employer != undefined) &&
                    (<td class="px-6 py-4 inner-size whitespace-nowrap text-start">
                        {item?.employer == true ? 'Yes' : <p className="flex px-6 justify-start">No</p>}
                    </td>)}

                <td class="px-6 py-4 inner-size whitespace-nowrap">
                    <div className=" flex">
                        <img
                            src={Logos.REc}
                            alt=""
                            className="cursor-pointer w-[30px]"
                            onClick={(e) => {
                                e.stopPropagation();
                                localStorage.setItem('receiverId', JSON.stringify(item));
                                localStorage.setItem('conversationId', 'null');
                                replyHandler();
                            }}
                        />
                        <img
                            src={Logos.Dots}
                            alt="elipsis"
                            className="cursor-pointer px-3"
                            onClick={(e) => {
                                e.stopPropagation();
                                dotsHandler();
                            }}
                        />
                        <div className="z-10">
                            <MenuDropdown
                                class="w-[190px] xxxl:w-[240px] top-[28px] right-[18px]"
                                menuarray={menuarray}
                                DeleteChat={DeleteChat}
                                isOpen={dots}
                                item={item}
                                setIsOpen={setdots}
                            />
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ContactRow;
