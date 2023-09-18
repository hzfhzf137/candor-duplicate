import React, {useEffect, useRef} from "react";
import {Logos} from "../../assets";
import WelcomeComp from "../../components/WelcomeComp/WelcomeComp";
import AuthComp from "../../components/AuthComp/AuthComp";
import AuthButtonComp from "../../components/AuthButtonComp/AuthButtonComp";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useMutation} from "react-query";
import {getOtp} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {useStore} from "../../store/auth";
import {Toast} from "primereact/toast";
import GlobalLoader from "../../components/GlobalLoader/GlobalLoader";

const data = {
    title: "Forget Password",
    caption: "Please enter your email address to receive a verification code",
};
const schema = yup
    .object({
        email: yup
            .string()
            .email()
            .matches(
                /^[\w\.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,4}$/,
                "Please enter a valid Email"
            ),

    })
    .required();
const ForgotPassword = () => {
    const toast = useRef(null);
    const loadingState = useStore((state) => state.loading);
    const isLoading = useStore((state) => state.isLoading);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });
    const setOtpEmail = useMutation(getOtp)
    const onSubmit = (data) => {
        isLoading(!loadingState)
        setOtpEmail.mutate(data)

    }
    const show = (param) => {
        toast.current.show({severity: 'error', summary: 'error', detail: param});
    };
    useEffect(() => {
        if (setOtpEmail.isSuccess) {

            if (setOtpEmail?.data?.data?.message === "Email sent Successfully") {
                isLoading(!loadingState)
                navigate("/Login-Verification")
            } else {
                isLoading(!loadingState)
                show(setOtpEmail?.data?.data?.message)
            }
        }
    }, [setOtpEmail.isSuccess])
    return (

        <div className="flex w-full h-[100vh]">
            <Toast ref={toast} color="red"/>
            {loadingState ? <GlobalLoader/> : <>
                <AuthComp
                    url={Logos.Login}
                    startText="Welcome Back To"
                    endText="Candor"
                />
                <div className="w-full laptop:w-[50%] flex justify-center items-center">
                    <div
                        className="h-[95%] flex flex-col gap-10  w-[90%] shadow-sm rounded-lg xxs:pl-[80px] xxs:pr-[100px] px-[20px] py-[20px] xxs:py-[50px]">
                        <WelcomeComp title={data.title} caption={data.caption}/>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between h-[100%]">
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col relative">
                                    <label className="font-normal text-[15px] text-[#262626]">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="border-[#EBEBEB] placeholder-input-modal border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-4 pl-14"
                                        placeholder="Enter Your Email"
                                        {...register("email")}
                                    />
                                    <img
                                        src={Logos.EmailIcon}
                                        height={24}
                                        width={24}
                                        className="absolute bottom-2 left-3"
                                    />
                                </div>
                                {errors.email?.message && (
                                    <p className="text-red-600 text-[12px] -mt-8 ml-2">
                                        {errors.email?.message}
                                    </p>
                                )}
                            </div>
                            <div className="">
                                <AuthButtonComp
                                    toSecond="/login"
                                    to="/verify-code"
                                    firstButtonLabel="Send"
                                    secondButtonLabel="Cancel"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default ForgotPassword;
