import React, {useState} from "react";
import {Logos} from "../../assets";
import WelcomeComp from "../../components/WelcomeComp/WelcomeComp";
import CheckboxComp from "../../components/CheckboxComp/CheckboxComp";
import {Link} from "react-router-dom";
import ButtonComp from "../../components/ButtonComp/ButtonComp";

const data = {
    title: "Create an account",
    caption:
        "Let,s get started with your 30 day free trial.",
};
const CreateAccount2 = () => {
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] =
        useState({
            password: false,
            confirmPassword: false,
        });
    return (
        <div className="flex w-full h-[100vh]">
            <div className="xxxs:hidden laptop:flex  bg-[#94A2F2] h-[1080px] w-[50%] flex-col justify-center">
                <div className="w-[80%]  mx-auto">
                    <img src={Logos.Login} alt/>
                </div>
                <div>
                    <h1 className="text-[#FFFFFF] text-center sm:text-[20px] md:text-[25px] laptop:text-[30px] lg:text-[40px] xxl:text-[50px] laptop:leading-[62px] font-medium ">
                        Welcome Back To<br></br> Candor
                    </h1>
                </div>
            </div>
            <div className="w-full laptop:w-[50%] h-[1080px] flex justify-center items-center">
                <div
                    className="h-[95%] flex flex-col gap-10  w-[90%] shadow-lg rounded-lg xxs:px-[80px] px-[20px] py-[20px] xxs:py-[50px]">
                    <WelcomeComp
                        title={data.title}
                        caption={data.caption}
                    />
                    <form className="flex flex-col justify-between h-[100%]">
                        <div className="flex flex-col gap-3">
                            <div className="flex lg:gap-10 ">
                                <div className="flex flex-col relative w-[50%]">
                                    <label className="font-normal text-[20px] text-[#262626]">
                                        First Name
                                    </label>
                                    <input
                                        type="email"
                                        className="border-[#EBEBEB] shadow-sm rounded-[8px] h-[50px] mt-4 pl-14"
                                        placeholder="First Name"
                                    />
                                    <img
                                        src={Logos.Person}
                                        height={24}
                                        width={24}
                                        className="absolute bottom-3 left-3"
                                    />
                                </div>
                                <div className="flex flex-col w-[50%] relative">
                                    <label className="font-normal text-[20px] text-[#262626]">
                                        Last Name
                                    </label>
                                    <input
                                        type="email"
                                        className="border-[#EBEBEB] shadow-sm rounded-[8px] h-[50px] mt-4 pl-14"
                                        placeholder="Jones"
                                    />
                                    <img
                                        src={Logos.Person}
                                        height={24}
                                        width={24}
                                        className="absolute bottom-3 left-3"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <label className="font-normal text-[20px] text-[#262626]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="border-[#EBEBEB] shadow-sm rounded-[8px] h-[50px] mt-4 pl-14"
                                    placeholder="ryanjones@example.com"
                                />
                                <img
                                    src={Logos.EmailIcon}
                                    height={24}
                                    width={24}
                                    className="absolute bottom-3 left-3"
                                />
                            </div>
                            <div className="flex flex-col relative ">
                                <label className="font-normal text-[20px] text-[#262626]">
                                    Password
                                </label>
                                <input
                                    type={
                                        !showPassword.password
                                            ? "password"
                                            : "text"
                                    }
                                    className="border-[#EBEBEB] shadow-sm rounded-[8px] h-[50px] mt-4 pl-14"
                                    placeholder="********"
                                />
                                <img
                                    src={Logos.PasswordIcon}
                                    height={24}
                                    width={24}
                                    className="absolute bottom-3 left-3"
                                />
                                <img
                                    src={Logos.Eye}
                                    height={24}
                                    width={24}
                                    className="absolute bottom-3 right-3"
                                    onClick={() => {
                                        setShowPassword((prev) => ({
                                            ...prev,
                                            password: !prev.password,
                                        }));
                                    }}
                                />
                            </div>
                            <div className="flex flex-col relative ">
                                <label className="font-normal text-[20px] text-[#262626]">
                                    Confirm Password
                                </label>
                                <input
                                    type={
                                        !showPassword.confirmPassword
                                            ? "password"
                                            : "text"
                                    }
                                    className="border-[#EBEBEB] shadow-sm rounded-[8px] h-[50px] mt-4 pl-14"
                                    placeholder="********"
                                />
                                <img
                                    src={Logos.PasswordIcon}
                                    height={24}
                                    width={24}
                                    className="absolute bottom-3 left-3"
                                />
                                <img
                                    src={Logos.Eye}
                                    height={24}
                                    width={24}
                                    className="absolute bottom-3 right-3"
                                    onClick={() => {
                                        setShowPassword((prev) => ({
                                            ...prev,
                                            confirmPassword:
                                                !prev.confirmPassword,
                                        }));
                                    }}
                                />
                            </div>
                            <div className="flex items-center flex-wrap h-[40px]">
                                <div className="flex gap-4 font-normal text-[20px] text-[#262626] items-center">
                                    <CheckboxComp/>
                                    <h1 className="font-normal text-[16px]">
                                        By Creating an account, you
                                        agree to our
                                        <Link
                                            to="#"
                                            className="text-[#3A37A6] underline font-normal text-[16px]"
                                        >
                                            Terms Of<br></br> Service
                                            And Privacy Policy
                                        </Link>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col gap-[30px] justify-center items-center">
                                <div>
                                    <ButtonComp
                                        className="bg-gradient-to-b w-[640px] xxxs:w-[300px] xxs:w-[350px] xs:w-[450px] md:w-[550px] laptop:w-[350px] lg:w-[450px] xxl:w-[570px] from-[#AEBFF2] to-[#94A2F2] xxxl:w-[640px] lg:h-[60px] text-white py-[15px] px-[30px] rounded-[5px] text-[24px]"
                                        name="Create An Account"
                                    />
                                </div>
                                <div className="relative">
                                    <ButtonComp
                                        className="shadow-sm w-[640px] xxxs:w-[300px] xxs:w-[350px] xs:w-[450px] md:w-[550px] laptop:w-[350px] lg:w-[450px] xxl:w-[570px]  xxxl:w-[640px] lg:h-[60px] py-[15px] px-[30px] rounded-[5px]  text-[24px]"
                                        name="Sign in with Google"
                                    />
                                    <img
                                        src={Logos.GoogleIcon}
                                        className="absolute bottom-5 lg:bottom-4  left-[3%] xs:left-[5%] md:left-[8%] lg:left-[15%]  xxl:left-[25%]"
                                    />
                                </div>
                            </div>
                            <div className="my-5 xxl:ml-11 ">
                                <h1 className="font-light text-[#262626] text-[15] lg:text-[20px]">
                                    Alredy have an account ?
                                    <Link
                                        to="/login"
                                        className="text-[#3A37A6]"
                                    >
                                        log in
                                    </Link>
                                </h1>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount2;
