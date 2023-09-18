import React from "react";
import {Logos} from "../../assets";

function CreateMarket() {

    const data = [
        {
            id: 1,
            title: "Reply options prompt",
        },
        {
            id: 2,
            title: "Reply options prompt",
        },
        {
            id: 3,
            title: "Reply options prompt",
        },
        {
            id: 4,
            title: "Reply options prompt",
        },
        {
            id: 5,
            title: "Reply options prompt",
        },
    ];

    return (
        <div>
            <div className="py-3 px-4 flex justify-between">
                <p className="title-size">Market 1 (English)</p>
                <img src={Logos.Trash} alt="Trash" className="icon-size"/>
            </div>
            <hr/>
            <div className="lg:px-8 xxxs:px-2 py-4">
                <p className="subtitle-size">Responses</p>
                <div className="grid grid-cols-2 gap-3">
                    {data.map((data) => {
                        return (
                            <div className="flex flex-wrap  ">
                                <div
                                    className=" border w-full shadow-md rounded mt-4 min-h-[90px] xxxs:p-1 lg:p-3 px-3">
                                    <p className="inner-size py-1">
                                        {data.title}
                                    </p>
                                    <div
                                        className="flex lg:flex-nowrap xxxs:flex-wrap justify-between lg:gap-4 xxxs:gap-1">
                                        <input
                                            type=""
                                            placeholder="How would you like to respond?"
                                            className="bg-[#F5F5F5] placeholder-input-modal outline-none p-2 rounded w-full "
                                            name=""
                                            id=""
                                        />
                                        <div className="flex items-center">
                                            <img
                                                src={Logos.BrandingReset}
                                                alt="Reset"
                                                className="icon-size"
                                            />
                                            <p className="inner-size  px-2 mr-3">
                                                Reset
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-center py-4">
                <button
                    className="inner-size items-center bg-[#94A2F2] rounded shadow-md text-[white] py-3 px-2 lg:h-[50px] xxxs:h-[35px] lg:w-[150px]  xxxs:w-[100px]"
                >
                    Save changes
                </button>
            </div>
        </div>
    );
}

export default CreateMarket
