import React from "react";
// import { useState } from "react";
import {Logos} from "../../assets";
import * as yup from "yup";
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup
    .object({
        searchText: yup.string().required("Field Required"),

    })
    .required();
const CreateNewFolder = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {

        props.handleCloseM(data?.searchText);
    }

    return (
        <div
            className="popup-box fixed backdrop-opacity-20 bg-black/30 left-0 flex justify-center items-center top-0 w-full h-full z-[15]"
            onClick={props.handleCloseM}
        >
            <div
                className="box relative rounded-md lg:w-[480px] xxxs:w-[350px] bg-white lg:min-h-[200px] mx-auto "
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-between items-center px-6 lg:pt-6 xxxs:pt-5 h-10">
                    <div className="lg:text-[20px] xxxs:text-[15px] xxxl:text-[22px] text-black">

                        {props.title} {props.Folder}
                    </div>
                    <button className="btn-close" onClick={props.handleCloseM}>
                        <img
                            src={Logos.CloseIcon}
                            alt="Close Button"
                            className="lg:w-[20px] xxxs:w-[15px]"
                        />
                    </button>
                </div>
                <hr className=" border-1 border-[#E7EEF9] mt-5"/>
                <div className="w-full flex flex-col justify-center items-center px-6">
                    <h1 className="text-[#A0A0A0] lg:text[16px] xxxs:text-[14px] pt-3">
                        {props.paragraph}
                    </h1>
                </div>
                <form className="w-full flex flex-col justify-center items-center gap-5 p-5"
                      onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-start w-full gap-2">
                        <input
                            type={props?.type ? props?.type : 'text'}
                            size="medium"
                            placeholder={props.placeholder}
                            className="bg-[#F5F5F5] h-[35px] p-2 custom-play w-full "
                            {...register("searchText")}

                        />
                        {errors.searchText?.message && (
                            <p className="text-red-600  mt-[1px] text-[12px]">
                                {errors.searchText?.message}
                            </p>
                        )}
                    </div>

                    <div className="flex gap-4 items-center ">
                        <button
                            type="button"
                            onClick={() => {
                                props.handleCloseM();
                                reset()
                            }}
                            className="text-[#94A2F2] h-10 flex items-center xxxl:text-[20px] border-[#AEBFF2] border-[1px] py-2 px-8 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="Submit"
                            className="text-white bg-[#AEBFF2] cursor-pointer py-2 px-8 xxxl:text-[20px] rounded-md flex items-center h-10 shadow-md"


                        >
                            {props.btnname}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNewFolder;
