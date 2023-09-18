import React, {useEffect, useRef, useState} from "react";
import {Logos} from "../../assets";
import WelcomeComp from "../../components/WelcomeComp/WelcomeComp";
import AuthComp from "../../components/AuthComp/AuthComp";
import {Link, useNavigate} from "react-router-dom";
import {OtpVerifyLogin} from "../../hooks/useAuth";
import {useMutation} from "react-query";
import {Toast} from 'primereact/toast';
import {useStore} from "../../store/auth";
import GlobalLoader from "../GlobalLoader/GlobalLoader";

const data = {
    title: "Verify Your Code",
    caption: "Please enter your Code here",
};
const LoginVerification = () => {
    const loadingState = useStore((state) => state.loading);
    const isLoading = useStore((state) => state.isLoading);
    const navigate = useNavigate();
    const toast = useRef(null);
    const [otp, setOTP] = useState(['', '', '', '']);
    const inputRefs = useRef([]);
    const verify = useMutation(OtpVerifyLogin)
    const handleInputChange = (e, index) => {
        const updatedOTP = [...otp];
        updatedOTP[index] = e.target.value;
        setOTP(updatedOTP);

        if (e.target.value !== '' && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleInputKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };
    const concatenatedOTP = otp.join('');

    const onSubmit = async () => {
        isLoading(!loadingState)
        verify.mutate(concatenatedOTP);
    };
    const show = (param) => {
        toast.current.show({severity: 'error', summary: 'error', detail: param});
    };
    useEffect(() => {
        if (verify?.data?.data == false) {
            isLoading(!loadingState)
            show('Invalid OTP');
        } else if (verify?.data?.data == true) {

            isLoading(!loadingState)
            navigate('/create-new-password')
        }
    }, [verify.isSuccess]);

    const loginEmail = JSON.parse(localStorage.getItem('loginEmail'));

    return (
        <div className="flex w-full h-[100vh]">
            <Toast ref={toast}/>
            {loadingState ? <GlobalLoader/> : <>
                <AuthComp
                    url={Logos.Login}
                    startText="Welcome Back To"
                    endText="Candor"
                />
                <div className="w-full laptop:w-[50%]  flex justify-center items-center">
                    <div
                        className="h-[90%] flex flex-col gap-4  w-[90%] shadow-sm rounded-lg xxs:px-[80px] px-[20px] py-[20px] xxs:py-[50px]">
                        <WelcomeComp title={data.title} caption={data.caption}/>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmit();
                            }}
                            className="flex flex-col justify-between h-[100%]"
                        >
                            <div>
                                <p className="text-[#A0A0A0] xxl:text-[22px]">
                                    Please enter the 4 digit code send to your email
                                </p>
                                <p className="text-[#3A37A6] xxl:text-[22px]">
                                    {loginEmail}
                                </p>
                                <div className="flex gap-5 pt-6">

                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            className="border-[2px]space inputItem0 border-solid w-[50px]  h-[50px] bg-[#E7EEF9]  text-[22px] xxl:text-[30px]  text-center text-[#AEBFF2] focus:outline-[#AEBFF2] rounded-full "
                                            onChange={(e) => handleInputChange(e, index)}
                                            onKeyDown={(e) => handleInputKeyDown(e, index)}
                                            ref={(ref) => (inputRefs.current[index] = ref)}
                                        />
                                    ))}

                                </div>
                            </div>
                            <div className=" flex flex-col gap-3">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-b flex justify-center items-center w-full h-[40px] from-[#AEBFF2] to-[#94A2F2]  xxl:h-[60px] text-white py-[15px] px-[30px] rounded-[5px] xxl:text-[24px]"

                                >
                                    Verify
                                </button>
                                <Link to="/forgot-password"
                                >
                                    <button

                                        className=" border-[#94A2F2] text-[#94A2F2] shadow-sm  flex justify-center items-center w-full h-[40px]  xxl:h-[60px]  border-2 py-[15px] px-[30px] rounded-[5px] xxl:text-[24px]"

                                    >
                                        Cancel
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default LoginVerification;
