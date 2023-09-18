import React, {useEffect, useRef, useState} from "react";
import {Logos} from "../../assets";
import WelcomeComp from "../../components/WelcomeComp/WelcomeComp";
import AuthComp from "../../components/AuthComp/AuthComp";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useMutation} from "react-query";
import {createNewPassword} from "../../hooks/useAuth";
import {Toast} from 'primereact/toast';
import {useNavigate} from "react-router-dom";

const schema = yup
    .object({
        password: yup
            .string()
            .required("Please Enter your password")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        confirmPassword: yup
            .string()
            .required("Confirm password is required")
            .oneOf(
                [yup.ref("password")],
                "Passwords do not match"
            ),
    })
    .required();
const data = {
    title: "Create New Password",
    caption:
        "While creating new password, you can‘t use one of your old password",
};
const CreateNewPassword = () => {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });
    const toast = useRef(null);
    const navigate = useNavigate();
    const resetPassword = useMutation(createNewPassword);
    const show = (param) => {
        toast.current.show({severity: 'error', summary: 'error', detail: param});
    };
    const onSubmit = (data) => {
        resetPassword.mutate(data);
    }
    const [showPassword, setShowPassword] =
        useState({
            password: false,
            confirmPassword: false,
        });
    useEffect(() => {

        if (resetPassword?.data?.error == true) {
            show(resetPassword?.data?.message);
        } else if (resetPassword?.data?.error == false) {
            show(resetPassword?.data?.message);
            navigate('/login')
        }
    }, [resetPassword.isSuccess]);
    return (
        <div className="flex w-full h-[100vh]">
            <Toast ref={toast}/>
            <AuthComp url={Logos.Login} startText="Welcome Back To" endText="Candor"/>
            <div className="w-full laptop:w-[50%]  flex justify-center items-center">
                <div
                    className="h-[95%] flex flex-col gap-4  w-[90%] shadow-sm rounded-lg xxs:px-[80px] xxs:pr-[90px] px-[20px] py-[20px] xxs:py-[50px]">
                    <WelcomeComp
                        title={data.title}
                        caption={data.caption}
                    />
                    <form className="flex flex-col justify-between h-[100%]" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col relative ">
                                <label className="font-normal subtitle-size text-[#262626] mb-1">
                                    New Password
                                </label>
                                <input
                                    type={
                                        !showPassword.password
                                            ? "password"
                                            : "text"
                                    }
                                    {...register("password")}
                                    className="border-[#EBEBEB] placeholder-input-modal border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-3 pl-14"
                                    placeholder="Type Your Password"
                                />
                                <img
                                    src={Logos.PasswordIcon}
                                    height={24}
                                    width={24}
                                    className="absolute bottom-2 left-3"
                                />
                                <img
                                    src={Logos.Eye}
                                    height={24}
                                    width={24}
                                    className="absolute bottom-2 right-3"
                                    onClick={() => {
                                        setShowPassword((prev) => ({
                                            ...prev,
                                            password: !prev.password
                                        }));
                                    }}
                                />
                            </div>
                            {errors.password?.message && (
                                <p className="text-red-600 text-[12px] mt-1 ml-2">
                                    {errors.password?.message}
                                </p>
                            )}
                            <div className="flex flex-col relative ">
                                <label className="font-normal subtitle-size text-[#262626] mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type={
                                        !showPassword.confirmPassword
                                            ? "password"
                                            : "text"
                                    }
                                    {...register(
                                        "confirmPassword"
                                    )}
                                    className="border-[#EBEBEB] placeholder-input-modal border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-3 pl-14"
                                    placeholder="Type Your Confirm Password"
                                />
                                <img
                                    src={Logos.PasswordIcon}
                                    height={24}
                                    width={24}
                                    className="absolute bottom-2 left-3"
                                />
                                <img
                                    src={Logos.Eye}
                                    height={24}
                                    width={24}
                                    className="absolute bottom-2 right-3"
                                    onClick={() => {
                                        setShowPassword((prev) => ({
                                            ...prev,
                                            confirmPassword: !prev.confirmPassword
                                        }));
                                    }}
                                />
                            </div>
                            {errors.confirmPassword?.message && (
                                <p className="text-red-600 text-[12px] mt-1 ml-2">
                                    {errors.confirmPassword?.message}
                                </p>
                            )}
                        </div>
                        <div className="">
                            {/* <AuthButtonComp toSecond="/verify-code" to="/login" firstButtonLabel="Save" secondButtonLabel="Cancel"/> */}
                            <button
                                type="submit"
                                className="bg-gradient-to-b flex justify-center items-center w-full h-[40px] from-[#AEBFF2] to-[#94A2F2]  xxl:h-[60px] text-white py-[15px] px-[30px] rounded-[5px] xxl:text-[24px]"

                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateNewPassword;
