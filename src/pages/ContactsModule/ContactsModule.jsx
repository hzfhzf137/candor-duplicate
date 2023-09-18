import {Logos} from "../../assets";
import React, {useEffect, useRef, useState} from "react";
import ToolTip from "../../components/ToolTip/ToolTip";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import {useNavigate} from "react-router";
import Button from "../../components/Buttons/Buttons";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {Calendar} from "primereact/calendar";
import "./ContactsModule.css";
import {addNewContact} from "../../hooks/useConversation";
import {useMutation} from "react-query";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Toast} from "primereact/toast";
import {useStore} from "../../store/auth";
import {useGlobalInfo} from "../../contexts/GlobalContext";
import GlobalLoaderCopy from "../../components/GloabalLoaderCopy/GloabalLoaderCopy";
import ContactRow from "./ContactRow";
import {exportData, filterContact} from "../../hooks/useContact";
import {saveAs} from 'file-saver';

const schema = yup
    .object({
        firstName: yup.string().required("Field Required"),
        lastName: yup.string().required("Field Required"),
        email: yup
            .string()
            .email()
            .matches(
                /^[\w\.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,4}$/,
                "Please enter a valid Email"
            ),
    })
    .required();
const ContactsModule = () => {
    const [toggleState2, setToggleState2] = useState(
        [
            {
                col: "Name",
                state: true
            },
            {
                col: "Email",
                state: true
            },
            {
                col: "Number",
                state: true
            },
            {
                col: "Street Address",
                state: true
            },

            {
                col: "Organization",
                state: true
            },
            {
                col: "Occupation",
                state: true
            },
            {
                col: "Employer",
                state: true
            },
            {
                search: ''
            }

        ]);


    const filter = useMutation(filterContact);

    // callig filter api
    useEffect(() => {
        //  setLoading(true);
        localStorage.setItem('module', 'Data and records');
        const data2 = [];
        filter.mutate(data2, {
            onSuccess: (data) => {

                setToggleState(data?.data);

                const updatedToggleState = [...toggleState2];
                if (data.data) {
                    updatedToggleState[0].state =
                        (data?.data[0].firstName != null && data?.data[0].firstName != undefined) ? true : false;
                    updatedToggleState[1].state =
                        (data?.data[0].email != null && data?.data[0].email != undefined) ? true : false;
                    updatedToggleState[2].state =
                        (data?.data[0].phone != null && data?.data[0].phone != undefined) ? true : false;
                    updatedToggleState[3].state =
                        (data?.data[0].address != null && data?.data[0].address != undefined) ? true : false;
                    updatedToggleState[4].state =
                        (data?.data[0].organization != null && data?.data[0].organization != undefined) ? true : false;
                    updatedToggleState[5].state =
                        (data?.data[0].occupation != null && data?.data[0].occupation != undefined) ? true : false;
                    updatedToggleState[6].state =
                        (data?.data[0].employer != null && data?.data[0].employer != undefined) ? true : false;
                }
            }
        })
        setLoading(false);

    }, [])

    const [searchQuery, setSearchQuery] = useState("");

    const exportdata = useMutation(exportData);
    const downloadCsv = (buffer) => {
        if (!buffer) {
            return; // No data to download
        }

        // Create a Blob from the Buffer data
        const blob = new Blob([buffer], {type: 'text/csv;charset=utf-8'});

        // Save the Blob as a CSV file with the desired file name
        saveAs(blob, 'my_data.csv');
    };
    const [isOpen, setIsOpen] = useState(false);
    const toast = useRef(null);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [dropdown, setdropdown] = useState("All Contacts");
    const [opendropdown, setopendropdown] = useState(false);
    const navigate = useNavigate();
    const [dates, setDates] = useState(new Date());
    const CreateContact = useMutation(addNewContact);
    const isLoading = useStore((state) => state.isLoading);
    const {loading, setLoading} = useGlobalInfo();
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSearchHandller(param) {
        const updatedToggleState = [...toggleState2];
        updatedToggleState[7].search = param;
        filter.mutate(toggleState2, {
            onSuccess: (data) => {

                setToggleState(data?.data);
                const updatedToggleState = [...toggleState2];
                updatedToggleState[0].state =
                    (data?.data[0].firstName != null && data?.data[0].firstName != undefined) ? true : false;
                updatedToggleState[1].state =
                    (data?.data[0].email != null && data?.data[0].email != undefined) ? true : false;
                updatedToggleState[2].state =
                    (data?.data[0].phone != null && data?.data[0].phone != undefined) ? true : false;
                updatedToggleState[3].state =
                    (data?.data[0].address != null && data?.data[0].address != undefined) ? true : false;
                updatedToggleState[4].state =
                    (data?.data[0].organization != null && data?.data[0].organization != undefined) ? true : false;
                updatedToggleState[5].state =
                    (data?.data[0].occupation != null && data?.data[0].occupation != undefined) ? true : false;
                updatedToggleState[6].state =
                    (data?.data[0].employer != null && data?.data[0].employer != undefined) ? true : false;
                setLoading(false);
            }
        })
        setSearchQuery(param);
    }

    function onsuccess(param) {
        toast.current.show({
            severity: "success",
            summary: "Success",
            detail: param,
        });
    }

    function onError(param) {
        toast.current.show({
            severity: "error",
            summary: "Error",
            detail: param,
        });
    }

    const clickHandler = () => {
        navigate("/contact2");
    };
    const togglePopup = () => {
        setLoading(true);
        filter.mutate(toggleState2, {
            onSuccess: (data) => {

                setToggleState(data?.data);

                const updatedToggleState = [...toggleState2];
                if (data.data) {
                    updatedToggleState[0].state =
                        (data?.data[0].firstName != null && data?.data[0].firstName != undefined) ? true : false;
                    updatedToggleState[1].state =
                        (data?.data[0].email != null && data?.data[0].email != undefined) ? true : false;
                    updatedToggleState[2].state =
                        (data?.data[0].phone != null && data?.data[0].phone != undefined) ? true : false;
                    updatedToggleState[3].state =
                        (data?.data[0].address != null && data?.data[0].address != undefined) ? true : false;
                    updatedToggleState[4].state =
                        (data?.data[0].organization != null && data?.data[0].organization != undefined) ? true : false;
                    updatedToggleState[5].state =
                        (data?.data[0].occupation != null && data?.data[0].occupation != undefined) ? true : false;
                    updatedToggleState[6].state =
                        (data?.data[0].employer != null && data?.data[0].employer != undefined) ? true : false;
                }
            }
        })
        setIsOpen(!isOpen);
        setLoading(false);
    };
    const togglePopup2 = () => {
        setIsOpen2(!isOpen2);
    };
    const togglePopup3 = () => {
        setIsOpen3(!isOpen3);
    };

    function openDropdownHanddler() {
        setopendropdown(!opendropdown);
    }

    function dropdownHanddler(a) {
        setdropdown(a);

        setopendropdown(false);
    }

    const onSubmit = (data) => {
        setLoading(true);
        CreateContact.mutate(data, {
            onSuccess: (data) => {
                filter.mutate(toggleState2, {
                    onSuccess: (data) => {

                        setToggleState(data?.data);
                        const updatedToggleState = [...toggleState2];
                        updatedToggleState[0].state =
                            (data?.data[0].firstName != null && data?.data[0].firstName != undefined) ? true : false;
                        updatedToggleState[1].state =
                            (data?.data[0].email != null && data?.data[0].email != undefined) ? true : false;
                        updatedToggleState[2].state =
                            (data?.data[0].phone != null && data?.data[0].phone != undefined) ? true : false;
                        updatedToggleState[3].state =
                            (data?.data[0].address != null && data?.data[0].address != undefined) ? true : false;
                        updatedToggleState[4].state =
                            (data?.data[0].organization != null && data?.data[0].organization != undefined) ? true :
                                false;
                        updatedToggleState[5].state =
                            (data?.data[0].occupation != null && data?.data[0].occupation != undefined) ? true : false;
                        updatedToggleState[6].state =
                            (data?.data[0].employer != null && data?.data[0].employer != undefined) ? true : false;
                        isLoading(false);
                        reset();
                    }
                })
                if (data.error == false) {
                    togglePopup3();
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
            },
            onError: (data) => {
                // togglePopup1();
                // error(data.message);
            },
        });
        isLoading(false);
    };
    const [toggleState, setToggleState] = useState([])
    const contacts = searchQuery ? toggleState : toggleState;


    const mapFunction = (item, index) => {
        if (index == 7) {
            return;
        } else
            return (
                <div
                    className="flex  lg:px-6 px-4  xxxs:px-4   items-center gap-2 justify-between"
                    style={{marginTop: "8px"}}
                >
                    <div className="flex gap-1 items-center ">
                        <h1 className=" xxxs:mt-1 inner-size self-center">
                            {item.col}
                        </h1>
                        <div className="mt-2">
                            <ToolTip/>
                        </div>
                    </div>

                    <ToggleButton
                        isActive={item.state}
                        width="[40px]"
                        height="[22px]"
                        setToggleState={setToggleState2}
                        toggleState={toggleState2}
                        index={index}
                    />
                </div>
            );
    };

    function apply() {
        toggleState2.map(mapFunction);
        setLoading(true);
        filter.mutate(toggleState2, {
            onSuccess: (data) => {
                setToggleState(data?.data);
                const updatedToggleState = [...toggleState2];
                updatedToggleState[0].state =
                    (data?.data[0].firstName != null && data?.data[0].firstName != undefined) ? true : false;
                updatedToggleState[1].state =
                    (data?.data[0].email != null && data?.data[0].email != undefined) ? true : false;
                updatedToggleState[2].state =
                    (data?.data[0].phone != null && data?.data[0].phone != undefined) ? true : false;
                updatedToggleState[3].state =
                    (data?.data[0].address != null && data?.data[0].address != undefined) ? true : false;
                updatedToggleState[4].state =
                    (data?.data[0].organization != null && data?.data[0].organization != undefined) ? true : false;
                updatedToggleState[5].state =
                    (data?.data[0].occupation != null && data?.data[0].occupation != undefined) ? true : false;
                updatedToggleState[6].state =
                    (data?.data[0].employer != null && data?.data[0].employer != undefined) ? true : false;
                setLoading(false);
            }

        })
        isLoading(false);
    }

    function Export() {
        setLoading(true);
        exportdata.mutateAsync(toggleState2, {
            onSuccess: (data) => {
                setopendropdown(false);

                downloadCsv(data)
                setLoading(false);
                togglePopup2();
            }
        })
    }

    return (
        <>
            {loading ? (
                <GlobalLoaderCopy/>
            ) : (
                <div className="">
                    <Toast ref={toast} position="top-right"></Toast>

                    <div className="">
                        <div className="flex justify-between my-3 items-center w-full flex-wrap gap-4">
                            <div className="flex relative justify-between  items-center ">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onChange={(e) => {
                                        onSearchHandller(e.target.value);
                                    }}
                                    className="search-box-placeholder relative lg:text-[18px] pl-[38px] xxxl:pl-[45px] outline-none xxxl:w-[600px] xxxl:h-[50px]  rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] max-w-[500px] xs:w-full xxs:w-[300px] placeholder:text-[14px] "
                                />
                                <img
                                    src={Logos.Search}
                                    className="absolute top-[33.0%] left-[0%] lg:w-[18px] xxxs:w-[15px] ml-[16px]"
                                />
                            </div>
                            <div className=" flex gap-2">
                                <Button
                                    img={Logos.Gride2}
                                    class="w-[50px] xxxxl:w-[60px] cursor-pointer"
                                    iconWidth="w-[40px] xxxxl:w-[40px]"
                                    onClick={togglePopup}
                                ></Button>
                                <Button
                                    img={Logos.DownloadWhite}
                                    class="w-[50px] xxxxl:w-[60px] cursor-pointer"
                                    onClick={togglePopup2}
                                    iconWidth="w-[40px] xxxxl:w-[40px]"
                                ></Button>
                                <Button
                                    img={Logos.profileAddWhite}
                                    class="w-[50px] xxxxl:w-[60px] cursor-pointer"
                                    iconWidth="w-[40px] xxxxl:w-[40px]"
                                    onClick={togglePopup3}
                                ></Button>
                            </div>
                        </div>
                        <div className={`flex flex-col gap-6  ${toggleState.length == 0 ? 'overflow-hidden' :
                            'overflow-auto'} relative custom-contact-table-height`}>
                            <div
                                class={`relative overflow-x-auto h-full ${
                                    (filter.isLoading || !contacts || toggleState.length == 0)
                                        ? "overflow-hidden"
                                        : "overflow-auto "
                                }`}
                            >
                                <div
                                    className={`w-[25px]  bg-[#E7EEF9] rounded-md hidden  p-1 fixed  bottom-1 h-fit ${
                                        contacts != "" ? "flex" : "hidden"
                                    }  flex-col justify-between custom-height-alphabets `}
                                >
                                    <p className=" text-center text-[#3A37A6] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        A
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        B
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        C
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        D
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        E
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        F
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        G
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        H
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        I
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        J
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        K
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        L
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        M
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        N
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        O
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        P
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        Q
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        R
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        S
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        T
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        U
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        V
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        W
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        X
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        Y
                                    </p>
                                    <p className=" text-center text-[#AEBFF2] xxxs:text-[10px] lg:text-[11px] xxxl:text-[16px] font-[500]">
                                        Z
                                    </p>
                                </div>
                                <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400 ">
                                    <thead
                                        class="subtitle-size text-[#3A37A6] xxxl:h-[60px]  font-[500] uppercase bg-[#E7EEF9]  shadow-md  rounded-md  sticky top-0"
                                        style={{
                                            zIndex: isOpen || isOpen2 || isOpen3 ? "" : "1",
                                        }}
                                    >
                                    {(!toggleState || toggleState == null || toggleState == [] || toggleState.length ==
                                        0) ?
                                        (<tr>

                                            <th scope="col" class={`px-9 py-3     min-w-[200px]`}>
                                                Name
                                            </th>
                                            <th scope="col" class={` px-8 py-3     min-w-[200px]`}>
                                                Email
                                            </th>
                                            <th scope="col" class={` px-8 py-3    min-w-[200px]`}>
                                                Street Address
                                            </th>
                                            <th scope="col" class={` px-8 py-3    min-w-[200px]`}>
                                                Phone
                                            </th>
                                            <th scope="col" class={` px-8 py-3 min-w-[200px]`}>
                                                Organization
                                            </th>
                                            <th scope="col" class={` px-8 py-3  min-w-[200px]`}>
                                                Occupation
                                            </th>
                                            <th scope="col" class={` px-8 py-3     min-w-[200px]`}>
                                                Employer
                                            </th>
                                            <th scope="col" class="px-6  py-3 min-w-[100px]"></th>
                                        </tr>) : (<tr>

                                            <th scope="col"
                                                class={` px-8 text-start  py-3  ${(toggleState[0]?.firstName != null &&
                                                    toggleState[0]?.firstName != undefined) ? '' :
                                                    'hidden'}   min-w-[200px]`}>
                                                Name
                                            </th>
                                            <th scope="col"
                                                class={`   px-6 text-start  py-3  ${toggleState[0]?.email != null &&
                                                toggleState[0]?.email != undefined ? '' : 'hidden'}   min-w-[200px]`}>
                                                Email
                                            </th>
                                            <th scope="col"
                                                class={`  px-6 text-start  py-3   ${(toggleState[0]?.address != null &&
                                                    toggleState[0]?.address != undefined) ? '' :
                                                    'hidden'}   min-w-[200px]`}>
                                                Street Address
                                            </th>
                                            <th scope="col"
                                                class={`  px-6 text-start  py-3   ${(toggleState[0]?.phone != null &&
                                                    toggleState[0]?.phone != undefined) ? '' :
                                                    'hidden'}   min-w-[200px]`}>
                                                Phone
                                            </th>
                                            <th scope="col"
                                                class={`  px-6 text-start  py-3    ${(toggleState[0]?.organization !=
                                                    null && toggleState[0]?.organization != undefined) ? '' :
                                                    'hidden'}   min-w-[200px]`}>
                                                Organization
                                            </th>
                                            <th scope="col"
                                                class={`  px-6 text-start  py-3   ${(toggleState[0]?.occupation !=
                                                    null && toggleState[0]?.occupation != undefined) ? '' :
                                                    'hidden'}   min-w-[200px]`}>
                                                Occupation
                                            </th>
                                            <th scope="col"
                                                class={`  px-6 text-start  py-3    ${(toggleState[0]?.employer !=
                                                    null && toggleState[0]?.employer != undefined) ? '' :
                                                    'hidden'}   min-w-[200px]`}>
                                                Employer
                                            </th>
                                            <th scope="col" class="px-6 py-3 min-w-[100px]"></th>
                                        </tr>)}
                                    </thead>
                                    <tbody className="h-full">
                                    {filter.isLoading ? (
                                        <p className="flex w-full h-full absolute justify-center items-center ">

                                            <div className=" flex flex-col justify-center items-center h-full">
                                                <div
                                                    className="w-full flex items-center flex-col   px-3 my-auto justify-center mx-auto">
                                                    <img
                                                        src={Logos.AnimatedLoader}
                                                        alt="Loader"
                                                        className="lg:w-[120px]  xxxxl:w-[10%] xxxs:w-[90px]"
                                                    />
                                                    <p className="font-[500] my-1 xxxxl:text-[22px]">
                                                        searching contact
                                                    </p>
                                                </div>
                                            </div>
                                        </p>
                                    ) : (contacts != "" && contacts) ? (
                                        contacts.map((item) => {
                                            return (
                                                <ContactRow item={item} setLoading={setLoading} onError={onError}
                                                            onsuccess={onsuccess} setToggleState={setToggleState}
                                                            clickHandler={clickHandler} toggleState={toggleState}/>
                                            );
                                        })
                                    ) : (
                                        <div
                                            className="flex w-full h-full absolute overflow-hidden justify-center items-center">
                                            no contact found
                                        </div>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {isOpen && (
                        <div
                            className="popup-box fixed backdrop-opacity-20 z-50  bg-black/30 left-0 top-0 w-full h-[100vh] flex justify-center items-center "
                            onClick={togglePopup}
                        >
                            <div
                                className="box  relative  rounded-md  lg:w-[450px] xxxs:w-[350px] bg-white   mx-auto flex flex-col  "
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <div className="flex justify-between p-5 xxxl:pt-8 pt-6 h-[20px] items-center">
                                    <div className="title-size">Contact Filter</div>
                                    <button className="btn-close " onClick={togglePopup}>
                                        <img
                                            src={Logos.ClosePopup}
                                            alt="Close Button"
                                            className="lg:w-[20px] xxxs:w-[15px]"
                                        />
                                    </button>
                                </div>
                                <hr className=" border-1 border-[#CEDEF2] "/>

                                <div
                                    style={{
                                        marginTop: "10px",
                                    }}
                                >
                                    {toggleState2.map(mapFunction)}
                                </div>
                                <button
                                    className="text-[14px] leading-[30px] xxxl:text-[20px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[100px] self-center "
                                    onClick={() => {
                                        togglePopup();
                                        apply();
                                    }}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    )}

                    {isOpen2 && (
                        <div
                            className="popup-box fixed backdrop-opacity-20 z-10 bg-black/30 left-0 top-0 w-full h-[100vh] flex justify-center items-center p-2 "
                            onClick={() => {
                                togglePopup2();
                                setopendropdown(false);
                            }}
                        >
                            <div
                                className="box  relative rounded-md  lg:w-[480px] xxxs:w-[350px] bg-white lg:min-h-[360px] mx-auto flex flex-col  "
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <div className="flex justify-between px-5 xxxl:pt-8 py-2 pt-6 h-[20px] items-center">
                                    <div className="title-size">Export data</div>
                                    <button
                                        className="btn-close "
                                        onClick={() => {
                                            togglePopup2();
                                            setopendropdown(false);
                                        }}
                                    >
                                        <img
                                            src={Logos.ClosePopup}
                                            alt="Close Button"
                                            className="lg:w-[20px] xxxs:w-[15px]"
                                        />
                                    </button>
                                </div>
                                <hr className=" border-1 border-[#CEDEF2] mt-5"/>

                                <div>
                                    <div
                                        className="flex mt-4 text-[12px] xxxl:text-[15px] lg:px-6 px-4  xxxs:px-4   gap-4  "
                                        style={{
                                            flexDirection: dropdown == "Donations" ? "row" : "column",
                                        }}
                                    >
                                        <div className="flex items-center  gap-2 w-[250px]  py-2 ">
                                            <h1 className=" subtitle-size">Export Type</h1>
                                            <div className="">
                                                <ToolTip/>
                                            </div>
                                        </div>

                                        <div className="flex flex-col relative">
                                            <div
                                                className=" flex items-center gap-3  justify-between cursor-pointer max-w-[400px] w-full bg-[#F5F5F5] p-3 rounded-[5px]  "
                                                onClick={openDropdownHanddler}
                                            >
                                                {" "}
                                                <button className="min-w-[120px] max-sm:min-w-[60px]  ">
                                                    {dropdown}
                                                </button>
                                                {" "}
                                                <div
                                                    className="border-l-[1px] border-b-[1px] h-3 border-black border-solid w-3  "
                                                    style={{
                                                        transform: opendropdown
                                                            ? "rotate(135deg)"
                                                            : "rotate(-45deg)",
                                                        borderBottomLeftRadius: "3px",
                                                    }}
                                                ></div>
                                            </div>
                                            {opendropdown && (
                                                <div
                                                    className="flex flex-col top-[100%] w-full absolute z-[1] text-[12px] xxxl:text-[15px]">
                                                    <label
                                                        htmlFor="contact"
                                                        className=" cursor-pointer max-w-[400px] w-full bg-[#ffffff] p-3 drop-shadow-lg "
                                                    >
                                                        All contacts
                                                    </label>{" "}
                                                    <input
                                                        type="radio"
                                                        id="contact"
                                                        name="dropdown"
                                                        value="All contacts"
                                                        className="none"
                                                        style={{display: "none"}}
                                                        onChange={() => {
                                                            dropdownHanddler("All contacts");
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {dropdown == "Donations" && (
                                        <div
                                            className="flex justify-between lg:px-6 px-4  xxxs:px-4   gap-4  "
                                            style={{
                                                marginTop: "8px",
                                                flexDirection:
                                                    dropdown == "Donations" ? "row" : "column",
                                            }}
                                        >
                                            <div className="flex gap-1 w-[300px] ">
                                                <h1 className="lg:mt-2 xxxs:mt-1 xxxl:text-[17px] lg:text-[15px] xxxs:text-[13px] self-center ">
                                                    Date range
                                                </h1>
                                                <div className="mt-5">
                                                    <ToolTip/>
                                                </div>
                                            </div>
                                            {dropdown == "Donations" && (
                                                <div className="card flex justify-content-center">
                                                    <Calendar
                                                        value={dates}
                                                        onChange={(e) => {
                                                            setDates(e.value);
                                                        }}
                                                        readOnlyInput
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {dropdown == "Donations" && (
                                        <div
                                            className="flex z-20  lg:px-6 px-4  xxxs:px-4   gap-4  "
                                            style={{
                                                marginTop: "8px",
                                                flexDirection:
                                                    dropdown == "Donations" ? "row" : "column",
                                            }}
                                        >
                                            <div className="flex gap-1 w-[300px] ">
                                                <h1 className="lg:mt-2 xxxs:mt-1 xxxl:text-[17px] lg:text-[15px] xxxs:text-[13px] self-center  ">
                                                    Export Organization
                                                </h1>
                                                <div className="mt-5">
                                                    <ToolTip/>
                                                </div>
                                            </div>

                                            <button
                                                className="cursor-pointer text-[12px] xxxl:text-[15px] max-w-[160px] p-2 bg-[#F5F5F5] focus:bg-[#94A2F2] focus:text-white text-[#262626] rounded-[5px]">
                                                Transactions{" "}
                                            </button>
                                            <button
                                                className="cursor-pointer text-[12px] xxxl:text-[15px] max-w-[160px] p-2 font-[400] text-[#262626] bg-[#F5F5F5] focus:text-[#ffffff] border-[1px] border-solid focus:bg-[#94A2F2] rounded-[5px]">
                                                Cumulative{" "}
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-center my-3 mt-[90px] gap-3">
                                    <button
                                        className="text-[14px] xxxl:text-[20px] leading-[30px] font-[400] text-[#94A2F2] border-[1px] border-solid border-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] self-center "
                                        onClick={() => {
                                            togglePopup2();
                                            setopendropdown(false);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="text-[14px] xxxl:text-[20px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] self-center "
                                        onClick={async () => {
                                            Export()
                                        }
                                        }

                                    >
                                        Export
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {isOpen3 && (
                        <div
                            className="popup-box z-10 fixed backdrop-opacity-20  bg-black/30 left-0 top-0 w-full h-[100vh] flex justify-center items-center "
                            onClick={togglePopup3}
                        >
                            <div
                                className="box  relative rounded-md  lg:w-[500px] xxxs:w-[350px] bg-white lg:min-h-[260px]   mx-auto flex flex-col  "
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <div className="flex justify-between px-5 xxxl:pt-8 py-2 pt-6 h-[20px] items-center">
                                    <div className=" title-size">Add new contact</div>
                                    <button className="btn-close " onClick={togglePopup3}>
                                        <img
                                            src={Logos.ClosePopup}
                                            alt="Close Button"
                                            className="lg:w-[20px] xxxs:w-[15px]"
                                        />
                                    </button>
                                </div>
                                <hr className=" border-1 border-[#CEDEF2] mt-5"/>

                                <form action="" onSubmit={handleSubmit(onSubmit)}>
                                    <div
                                        style={{
                                            marginTop: "10px",
                                        }}
                                    >
                                        <div
                                            className="flex px-4 gap-4  "
                                            style={{marginTop: "8px"}}
                                        >
                                            <div className="flex gap-2 flex-col">
                                                <label className="text-[#262626] inner-size font-[500]">
                                                    First Name*
                                                </label>
                                                <div className="w-full flex justify-between items-center ">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your Name"
                                                        {...register("firstName")}
                                                        className="placeholder-input-modal relative lg:text-[16px] outline-none bg-[#F5F5F5] placeholder:text-[#A0A0A0] placeholder:text-[12px] placeholder:font-[200]   rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full"
                                                        style={{paddingLeft: "28px"}}
                                                    />
                                                    <img
                                                        src={Logos.Person}
                                                        className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
                                                    />
                                                </div>
                                                {errors.firstName?.message && (
                                                    <p className="text-red-600  mt-[1px] text-[12px]">
                                                        {errors.firstName?.message}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex gap-2 flex-col">
                                                <label
                                                    className="placeholder-input-modal text-[#262626] inner-size font-[500]">
                                                    Last Name*
                                                </label>
                                                <div className="w-full flex justify-between items-center ">
                                                    <input
                                                        type="text"
                                                        {...register("lastName")}
                                                        placeholder="Enter your Name"
                                                        className="placeholder-input-modal relative lg:text-[16px] outline-none   rounded-md border-2 bg-[#F5F5F5] border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full placeholder:text-[12px]"
                                                        style={{paddingLeft: "28px"}}
                                                    />
                                                    <img
                                                        src={Logos.Person}
                                                        className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
                                                    />
                                                </div>
                                                {errors.lastName?.message && (
                                                    <p className="text-red-600  mt-[1px]  text-[12px]">
                                                        {errors.lastName?.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 flex-col m-4">
                                            <label
                                                className="placeholder-input-modal text-[#262626] inner-size font-[500]">
                                                Email*
                                            </label>
                                            <div className="w-full flex justify-between  items-center ">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your email address"
                                                    {...register("email", {
                                                        required: true,
                                                    })}
                                                    className="placeholder-input-modal relative lg:text-[16px] outline-none bg-[#F5F5F5] placeholder:text-[12px] placeholder:font-[200]   rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full"
                                                    style={{paddingLeft: "35px"}}
                                                />
                                                <img
                                                    src={Logos.EmailIcon}
                                                    className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
                                                />
                                            </div>
                                        </div>
                                        {errors.email?.message && (
                                            <p className="text-red-600  mt-[-10px] ml-5 text-[12px]">
                                                {errors.email?.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex justify-center my-4 gap-3">
                                        <button
                                            type="button"
                                            className="text-[14px] xxxl:text-[20px] leading-[30px] font-[400] text-[#94A2F2] border-[1px] border-solid border-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] xxxl:w-[150px] self-center "
                                            onClick={togglePopup3}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="text-[14px] xxxl:text-[20px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] xxxl:w-[150px] self-center "
                                            // onClick={}
                                            type="submit"
                                        >
                                            Add Contact
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default ContactsModule;
