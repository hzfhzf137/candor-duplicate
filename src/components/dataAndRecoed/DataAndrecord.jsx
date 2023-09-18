import {Logos} from "../../assets";
import React, {useState} from "react";

const ContactsModule = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [checkedThree, setCheckedThree] = useState(true);
    const [dropdown, setdropdown] = useState("All Contacts");
    const [opendropdown, setopendropdown] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
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

    const data2 = [
        {
            img: Logos.Person1,
            name: "Aaron Wilson",
            email: `aaron@example.com`,
            number: "555-555-5555",
            address: "55 South street.Suite 201",
            city: "Greensboro",
            state: `North  Carolinn`,
            code: "27455",
            intractions: "Tax Reform",
        },
        {
            img: Logos.Person2,
            name: "Eric",
            email: "ericsmith@example.com",
            number: "555-555-5555",
            address: "55 South street.Suite 201",
            city: "Greensboro",
            state: `North  Carolinn`,
            code: "27455",
            intractions: "Tax Reform",
        },
        {
            img: Logos.Person3,
            name: "Zain Dokidis",
            email: `zain@example.com`,
            number: "555-555-5555",
            address: "55 South street.Suite 201",
            city: "Greensboro",
            state: `North  Carolinn`,
            code: "27455",
            intractions: "Tax Reform",
        },
        {
            img: Logos.Person4,
            name: "Skylar Donin",
            email: `skylar@example.com`,
            number: "555-555-5555",
            address: "55 South street.Suite 201",
            city: "Greensboro",
            state: `North  Carolinn`,
            code: "27455",
            intractions: "Tax Reform",
        },
        {
            img: Logos.Person5,
            name: "Omar Press",
            email: `omar@example.com`,
            number: "555-555-5555",
            address: "55 South street.Suite 201",
            city: "Greensboro",
            state: `North  Carolinn`,
            code: "27455",
            intractions: "Tax Reform",
        },
        {
            img: Logos.Person6,
            name: "Marley Gouse",
            email: `marley@example.com`,
            number: "555-555-5555",
            address: "55 South street.Suite 201",
            city: "Greensboro",
            state: `North  Carolinn`,
            code: "27455",
            intractions: "Tax Reform",
        },
        {
            img: Logos.Person1,
            name: "Aaron Wilson",
            email: `aaron@example.com`,
            number: "555-555-5555",
            address: "55 South street.Suite 201",
            city: "Greensboro",
            state: `North  Carolinn`,
            code: "27455",
            intractions: "Tax Reform",
        },
        {
            img: Logos.Person1,
            name: "Aaron Wilson",
            email: `aaron@example.com`,
            number: "555-555-5555",
            address: "55 South street.Suite 201",
            city: "Greensboro",
            state: `North  Carolinn`,
            code: "27455",
            intractions: "Tax Reform",
        },
        {
            img: Logos.Person1,
            name: "Aaron Wilson",
            email: `aaron@example.com`,
            number: "555-555-5555",
            address: "55 South street.Suite 201",
            city: "Greensboro",
            state: `North  Carolinn`,
            code: "27455",
            intractions: "Tax Reform",
        },
        {
            img: Logos.Person1,
            name: "Aaron Wilson",
            email: `aaron@example.com`,
            number: "555-555-5555",
            address: "55 South street.Suite 201",
            city: "Greensboro",
            state: `North  Carolinn`,
            code: "27455",
            intractions: "Tax Reform",
        },
    ];
    const data = [
        {
            col: "Name",
        },
        {
            col: "Email",
        },
        {
            col: "Number",
        },
        {
            col: "Street Address",
        },
        {
            col: "City",
        },
        {
            col: "State",
        },
        {
            col: "Zip code",
        },
        {
            col: "Organization",
        },
        {
            col: "Occupation",
        },
        {
            col: "Employer",
        },
        {
            col: "Interactions",
        },
    ];
    return (
        <>
            <div className=" ">
                <div className="flex justify-between items-center w-full flex-wrap gap-4">
                    <div className="flex justify-between  items-center ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-box-placeholder relative lg:text-[18px] outline-none  rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] max-w-[500px] xs:w-full xxs:w-[300px] placeholder:text-[14px]"
                            style={{paddingLeft: "38px"}}
                        />
                        <img
                            src={Logos.Search}
                            className="absolute lg:w-[18px] xxxs:w-[15px] ml-[16px]"
                        />
                    </div>
                    <div className=" flex">
                        <img
                            src={Logos.Button}
                            alt=""
                            className="w-[70px]"
                            onClick={togglePopup2}
                        />
                        <img
                            src={Logos.Button2}
                            alt=""
                            className="w-[70px]"
                            onClick={togglePopup3}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-6 overflow-auto relative">
                    <table className=" h-[628px] w-full   gap-2  ">
                        <thead
                            className=" h-14  bg-[#E7EEF9]  shadow-md justify-evenly rounded-md flex items-center gap-2 px-1 sticky top-0 "
                            style={{zIndex: isOpen || isOpen2 || isOpen3 ? "" : "1"}}
                        >
                        <tr className="  rounded-lg h-14 pt-4 ">
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[200px] col-span-2"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[150px]"
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[150px]"
                            >
                                Number
                            </th>
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[150px] whitespace-nowrap"
                            >
                                Street Address
                            </th>
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[100px]"
                            >
                                City
                            </th>
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[100px]"
                            >
                                State
                            </th>
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[100px]"
                            >
                                Zip code
                            </th>
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[100px]"
                            >
                                Organization
                            </th>
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[100px]"
                            >
                                Occupation
                            </th>
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[100px]"
                            >
                                Employer
                            </th>
                            <th
                                scope="col"
                                className="text-[#3A37A6] text-[14px] font-[500]  min-w-[100px]"
                            >
                                Interactions
                            </th>
                        </tr>
                        <img
                            src={Logos.Grid}
                            alt=""
                            onClick={togglePopup}
                            className="cursor-pointer pl-2"
                        />
                        </thead>
                        <div className="flex  gap-6 h-[100vh] mt-3">
                            <div
                                className="w-[25px] bg-[#E7EEF9] rounded-md p-2  h-[100vh] flex flex-col justify-between ">
                                <p className=" text-center text-[#3A37A6] text-[12px] font-[500]">
                                    A
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    B
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    C
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    D
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    E
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    F
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    G
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    H
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    I
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    J
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    K
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    L
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    M
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    N
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    O
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    P
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    Q
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    R
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    S
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    T
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    U
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    V
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    W
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    X
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    Y
                                </p>
                                <p className=" text-center text-[#AEBFF2] text-[12px] font-[500]">
                                    Z
                                </p>
                            </div>
                            {" "}
                            <tbody className=" ">
                            {data2.map((item) => {
                                const [dots, setdots] = useState(false);
                                const dotsHandler = () => {
                                    setdots(!dots);
                                };
                                return (
                                    <>
                                        {" "}
                                        <tr className=" gap-5 rounded-md shadow-md h-[70px] justify-between p-2">
                                            <th
                                                scope="row"
                                                className="text-[#262626] min-w-[200px] text-[14px] font-[500] justify-start flex gap-3 px-1 items-center "
                                            >
                                                {" "}
                                                <img src={item.img} alt=""/>
                                                {item.name}
                                            </th>
                                            <td className="text-[#262626] min-w-[160px] text-[12px] font-[500] px-1    ">
                                                {item.email}
                                            </td>
                                            <td className="text-[#262626] min-w-[150px] text-[12px] font-[500] px-1   ">
                                                {item.number}
                                            </td>
                                            <td className="text-[#262626] min-w-[150px] text-[12px] font-[500] px-1    ">
                                                {item.address}
                                            </td>
                                            <td className="text-[#262626] min-w-[100px] text-[12px] font-[500] px-1   ">
                                                {item.city}
                                            </td>
                                            <td className="text-[#262626] min-w-[100px] text-[12px] font-[500] px-1   ">
                                                {item.state}
                                            </td>
                                            <td className="text-[#262626] min-w-[100px] text-[12px] font-[500] px-1   ">
                                                {item.code}
                                            </td>
                                            <td className="text-[#262626] min-w-[100px] text-[12px] font-[500] px-1  ">
                                                ---
                                            </td>
                                            <td className="text-[#262626] min-w-[100px] text-[12px] font-[500] px-1  ">
                                                ---
                                            </td>
                                            <td className="text-[#262626] min-w-[100px] text-[12px] font-[500] px-1  ">
                                                ---
                                            </td>
                                            <td className="text-[#262626] min-w-[100px] text-[12px] font-[500] px-1   ">
                                                {item.intractions}
                                            </td>
                                            <td className="flex  justify-center px-5 gap-4 relative min-w-[80px]  ">
                                                <img
                                                    src={Logos.REc}
                                                    alt=""
                                                    className="cursor-pointer"
                                                />
                                                <img
                                                    src={Logos.Dots}
                                                    alt=""
                                                    className="cursor-pointer "
                                                    onClick={dotsHandler}
                                                />

                                                {dots && (
                                                    <div
                                                        className="absolute w-[180px] rounded-[5px] bg-white px-1 top-[100%] right-[20%] z-[1] shadow-md">
                                                        {" "}
                                                        <div className="flex justify-between py-2">
                                                            <img
                                                                src={Logos.Eye}
                                                                alt=""
                                                                className="max-w-[20px]"
                                                            />{" "}
                                                            <h1 className="text-[#262626] text-[14px] font-[500]">
                                                                View contact details
                                                            </h1>
                                                        </div>
                                                        {" "}
                                                        <hr className="h-[2px] w-full bg-gray-300"/>
                                                        <div className="flex justify-between items-center py-2">
                                                            <img
                                                                src={Logos.Trash2}
                                                                alt=""
                                                                className="max-w-[20px]"
                                                            />{" "}
                                                            <h1 className="text-[#262626] text-[14px] font-[500]">
                                                                Delete Conversation
                                                            </h1>
                                                        </div>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                        {" "}
                                        <br/>
                                    </>
                                );
                            })}
                            </tbody>
                        </div>
                        {" "}
                    </table>
                </div>
                {" "}
            </div>

            {isOpen && (
                <div
                    className="popup-box fixed backdrop-opacity-20  bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
                    onClick={togglePopup}
                >
                    <div
                        className="box  relative rounded-md  lg:w-[400px] xxxs:w-[350px] bg-white lg:min-h-[460px]   mx-auto flex flex-col  "
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="flex justify-between p-5 lg:pt-8   xxxs:pt-5 h-[20px] items-center">
                            <div className="title-size">contact filter</div>
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
                            {data.map((item) => {
                                return (
                                    <div
                                        className="flex  lg:px-6 px-4  xxxs:px-4  items-center gap-2 justify-between"
                                        style={{marginTop: "8px"}}
                                    >
                                        <div className="flex gap-2">
                                            <h1 className="lg:mt-2 xxxs:mt-1  text-[10px] lg:text-[16px] xxxs:text-[14px] self-center">
                                                {item.col}
                                            </h1>
                                            <img src={Logos.Info} className="mt-3"/>
                                        </div>

                                        <div
                                            className="w-12 h-6 rounded-xl bg-[#F5F5F5] flex items-center p-1"
                                            style={{
                                                backgroundColor: checkedThree ? "#E7EEF9" : "#F5F5F5",
                                            }}
                                        >
                                            <div
                                                className="w-4 h-4 bg-[#A0A0A0] rounded-lg cursor-pointer duration-200 ease-linear "
                                                style={{
                                                    backgroundColor: checkedThree ? "#3A37A6" : "#A0A0A0",
                                                    marginLeft: checkedThree ? "22px" : "0px",
                                                }}
                                                onClick={() => {
                                                    setCheckedThree(!checkedThree);
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            className="text-[16px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[100px] self-center "
                            onClick={togglePopup}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}

            {isOpen2 && (
                <div
                    className="popup-box fixed backdrop-opacity-20  bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center p-2 "
                    onClick={() => {
                        togglePopup2();
                        setopendropdown(false);
                    }}
                >
                    <div
                        className="box  relative rounded-md  lg:w-[480px] xxxs:w-[400px] bg-white lg:min-h-[260px]   mx-auto flex flex-col  "
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="flex justify-between px-5 lg:pt-8 p-3  xxxs:pt-5 h-[20px] items-center">
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

                        <div
                            style={{
                                marginTop: "10px",
                            }}
                        >
                            <div
                                className="flex  lg:px-6 px-4  xxxs:px-4   gap-4  "
                                style={{
                                    marginTop: "8px",
                                    flexDirection: dropdown == "Donations" ? "row" : "column",
                                }}
                            >
                                <div className="flex gap-2 w-[300px] ">
                                    <h1 className="lg:mt-2 xxxs:mt-1  text-[10px] lg:text-[16px] xxxs:text-[14px] self-center ">
                                        Export Type
                                    </h1>
                                    <img src={Logos.Info} className="mt-3 max-w-[20px]"/>
                                </div>

                                <div className="flex flex-col">
                                    <div
                                        className="flex items-center gap-3 justify-between cursor-pointer max-w-[400px] w-full bg-[#F5F5F5] p-3 rounded-[5px]  drop-shadow-lg"
                                        onClick={openDropdownHanddler}
                                    >
                                        {" "}
                                        <button>{dropdown}</button>
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
                                        <div className="flex flex-col">
                                            {" "}
                                            <label
                                                htmlFor="contact"
                                                className="cursor-pointer max-w-[400px] w-full bg-[#ffffff] p-3 rounded-[5px] drop-shadow-lg "
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
                                            <label
                                                htmlFor="donations"
                                                className="cursor-pointer max-w-[400px] w-full bg-[#ffffff] p-3 rounded-[5px]  drop-shadow-lg"
                                            >
                                                Donations
                                            </label>{" "}
                                            <input
                                                type="radio"
                                                id="donations"
                                                value="Donations"
                                                name="dropdown"
                                                className="none"
                                                style={{display: "none"}}
                                                onChange={() => {
                                                    dropdownHanddler("Donations");
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            {dropdown == "Donations" && (
                                <div
                                    className="flex  lg:px-6 px-4  xxxs:px-4   gap-4  "
                                    style={{
                                        marginTop: "8px",
                                        flexDirection: dropdown == "Donations" ? "row" : "column",
                                    }}
                                >
                                    <div className="flex gap-2 w-[300px] ">
                                        <h1 className="lg:mt-2 xxxs:mt-1  text-[10px] lg:text-[16px] xxxs:text-[14px] self-center ">
                                            Date range
                                        </h1>
                                        <img src={Logos.Info} className="mt-3 max-w-[20px]"/>
                                    </div>

                                    <input
                                        value="May 20-Jun 2, 2022"
                                        className="cursor-pointer max-w-[160px] w-full bg-[#F5F5F5] p-3 text-[#262626] rounded-[5px]"
                                    />
                                </div>
                            )}
                            {dropdown == "Donations" && (
                                <div
                                    className="flex  lg:px-6 px-4  xxxs:px-4   gap-4  "
                                    style={{
                                        marginTop: "8px",
                                        flexDirection: dropdown == "Donations" ? "row" : "column",
                                    }}
                                >
                                    <div className="flex gap-2 w-[300px] ">
                                        <h1 className="lg:mt-2 xxxs:mt-1  text-[10px] lg:text-[16px] xxxs:text-[14px] self-center  ">
                                            Export Organization
                                        </h1>
                                        <img src={Logos.Info} className="mt-3 max-w-[20px]"/>
                                    </div>

                                    <button
                                        className="cursor-pointer max-w-[160px] p-2 bg-[#F5F5F5]  text-[#262626] rounded-[5px]">
                                        Transactions{" "}
                                    </button>
                                    <button
                                        className="cursor-pointer max-w-[160px] p-2 font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] rounded-[5px]">
                                        Cumulative{" "}
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center my-3 gap-3">
                            <button
                                className="text-[16px] leading-[30px] font-[400] text-[#94A2F2] border-[1px] border-solid border-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] self-center "
                                onClick={() => {
                                    togglePopup2();
                                    setopendropdown(false);
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-[16px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] self-center "
                                onClick={() => {
                                    togglePopup2();
                                    setopendropdown(false);
                                }}
                            >
                                Export
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isOpen3 && (
                <div
                    className="popup-box fixed backdrop-opacity-20  bg-black/30 left-0 top-0 w-full min-h-[100vh] flex justify-center items-center "
                    onClick={togglePopup3}
                >
                    <div
                        className="box  relative rounded-md  lg:w-[400px] xxxs:w-[350px] bg-white lg:min-h-[260px]   mx-auto flex flex-col  "
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="flex justify-between px-5 lg:pt-8 p-3  xxxs:pt-5 h-[20px] items-center">
                            <div className="title-size">Export data</div>
                            <button className="btn-close " onClick={togglePopup3}>
                                <img
                                    src={Logos.ClosePopup}
                                    alt="Close Button"
                                    className="lg:w-[20px] xxxs:w-[15px]"
                                />
                            </button>
                        </div>
                        <hr className=" border-1 border-[#CEDEF2] mt-5"/>

                        <div
                            style={{
                                marginTop: "10px",
                            }}
                        >
                            <div className="flex px-4 gap-4  " style={{marginTop: "8px"}}>
                                <div className="flex gap-2 flex-col">
                                    <label className="text-[#262626] text-[14px] font-[500]">
                                        First Name
                                    </label>
                                    <div className="w-full flex justify-between items-center ">
                                        <input
                                            type="text"
                                            placeholder="Enter your Name"
                                            className="relative lg:text-[16px] outline-none bg-[#F5F5F5] placeholder:text-[#A0A0A0] placeholder:text-[12px] placeholder:font-[200]   rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full"
                                            style={{paddingLeft: "28px"}}
                                        />
                                        <img
                                            src={Logos.Person}
                                            className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-2 flex-col">
                                    <label className="text-[#262626] text-[14px] font-[500]">
                                        Last Name
                                    </label>
                                    <div className="w-full flex justify-between items-center ">
                                        <input
                                            type="text"
                                            placeholder="Enter your Name"
                                            className="relative lg:text-[16px] outline-none   rounded-md border-2 bg-[#F5F5F5] border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full placeholder:text-[12px]"
                                            style={{paddingLeft: "28px"}}
                                        />
                                        <img
                                            src={Logos.Person}
                                            className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-col m-4">
                                <label className="text-[#262626] text-[14px] font-[500]">
                                    Email*
                                </label>
                                <div className="w-full flex justify-between  items-center ">
                                    <input
                                        type="text"
                                        placeholder="Enter your email address"
                                        className="relative lg:text-[16px] outline-none bg-[#F5F5F5] placeholder:text-[12px] placeholder:font-[200]   rounded-md border-2 border-[#EBEBEB] lg:h-[40px] h-[35px] xxxs:h-[35px] w-full"
                                        style={{paddingLeft: "35px"}}
                                    />
                                    <img
                                        src={Logos.EmailIcon}
                                        className="absolute lg:w-[20px] xxxs:w-[15px]  ml-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center my-3 gap-3">
                            <button
                                className="text-[16px] leading-[30px] font-[400] text-[#94A2F2] border-[1px] border-solid border-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] self-center "
                                onClick={togglePopup3}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-[16px] leading-[30px] font-[400] text-[#ffffff] border-[1px] border-solid bg-[#94A2F2] p-1 rounded-[5px] my-3 w-[120px] self-center "
                                onClick={togglePopup3}
                            >
                                Export
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactsModule;
