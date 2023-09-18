import React, {useEffect, useRef, useState} from "react";
import {Logos} from "../../assets";
import WelcomeComp from "../../components/WelcomeComp/WelcomeComp";
import {Link, useNavigate} from "react-router-dom";
import ButtonComp from "../../components/ButtonComp/ButtonComp";
import AuthButtonComp from "../../components/AuthButtonComp/AuthButtonComp";
import AuthComp from "../../components/AuthComp/AuthComp";
import useFetch from "../../hooks/useFetch";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUp} from "../../hooks/useAuth";
import * as yup from "yup";
import {Checkbox} from "antd";
import {useMutation} from "react-query";
import {Toast} from "primereact/toast";
import GlobalLoader from "../../components/GlobalLoader/GlobalLoader";
import {useStore} from "../../store/auth";
import {base_url_candor} from "../../utils/constants.jsx";

const schema = yup
    .object({
        firstName: yup.string().required("Field Required"),
        lastName: yup.string().required("Field Required"),
        checkbox: yup
            .boolean()
            .test(
                "is-checked",
                "Checkbox must be checked",
                (value) => value === true
            ),
        email: yup
            .string()
            .email()
            .matches(
                /^[\w\.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,4}$/,
                "Please enter a valid Email"
            ),
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
            .oneOf([yup.ref("password")], "Passwords do not match"),
    })
    .required();
const data = {
    title: "Create an account",
    caption: "Let's get started with your 30 day free trial.",
};
const CreateAnAccount = () => {
    const loadingState = useStore((state) => state.loading);
    const isLoading = useStore((state) => state.isLoading);
    const toast = useRef(null);
    const show = (param) => {
        toast.current.show({
            severity: "error",
            summary: "Error",
            detail: param,
        });
    };

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });
    const signUpMutation = useMutation(signUp);
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        // console.log(data);
        isLoading(!loadingState);
        signUpMutation.mutate(data);
    };

    const {handleGoogle, loading, error} = useFetch(
        `${base_url_candor}/user/signup-with-google`
    );
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });
    const googleDiv = useRef(null);

    const onClickHandler = () => {
        localStorage.setItem("token", JSON.stringify("TOKEN"));
    };

    const createFakeGoogleWrapper = () => {
        const googleLoginWrapper = document.createElement("div");
        // Or you can simple hide it in CSS rule for custom-google-button
        googleLoginWrapper.style.display = "none";
        googleLoginWrapper.classList.add("custom-google-button");

        // Add the wrapper to body
        document.body.appendChild(googleLoginWrapper);

        // Use GSI javascript api to render the button inside our wrapper
        // You can ignore the properties because this button will not appear
        window.google.accounts.id.renderButton(googleLoginWrapper, {
            type: "icon",
            width: "200",
        });

        const googleLoginWrapperButton =
            googleLoginWrapper.querySelector("div[role=button]");

        return {
            click: () => {
                googleLoginWrapperButton.click();
            },
        };
    };
    useEffect(() => {
        const error = signUpMutation?.data?.error;
        const msg = signUpMutation?.data?.message;
        const message = signUpMutation?.data?.message;
        if (error === true) {
            isLoading(!loadingState);
            show(msg);
        } else if (error === false) {
            isLoading(!loadingState)
            navigate("/verify-code");
            show(msg);
        }
    }, [signUpMutation.isSuccess]);
    // useEffect(() => {
    //   if (window.google) {
    //     google.accounts.id.initialize({
    //       client_id:
    //         "455337887631-42jlhv1s4nh3jrac0r4s43kd7dghgusf.apps.googleusercontent.com",
    //       callback: handleGoogle,
    //     });
    //     const googleButtonWrapper = createFakeGoogleWrapper();
    //     googleDiv.value = googleButtonWrapper;
    //   }
    // }, []);
    return (
        <div className="flex w-full h-[100vh]">
            <Toast ref={toast}/>
            {loadingState ? (
                <GlobalLoader data={"Sending OTP"}/>
            ) : (
                <>
                    <AuthComp
                        url={Logos.SignUp}
                        startText="Start Your Journey"
                        endText="With Candor"
                    />
                    <div
                        className="w-full laptop:w-[50%] overflow-y-hidden  h-[100vh]  flex justify-center items-center">
                        <div
                            className="h-[95%] flex flex-col gap-5  w-[90%] overflow-y-scroll shadow-sm rounded-lg  laptop:px-[20px] mid:px-[60px] xxs:px-[60px] px-[10px] py-[20px] xxs:py-[50px]">
                            <WelcomeComp title={data.title} caption={data.caption}/>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col justify-between h-[100%]"
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between flex-wrap xl:flex-nowrap">
                                        <div className="xl:w-[48%]">
                                            <div className="flex flex-col relative w-full">
                                                <label className="font-normal subtitle-size text-[#262626] mb-2">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("firstName")}
                                                    className="border-[#EBEBEB] placeholder-input-modal border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-1 pl-14"
                                                    placeholder="Type Your First Name"
                                                />
                                                <img
                                                    src={Logos.Person}
                                                    height={24}
                                                    width={24}
                                                    className="absolute bottom-2 left-3"
                                                />
                                            </div>
                                            {errors.firstName?.message && (
                                                <p className="text-red-600 text-[12px] mt-1 ml-2">
                                                    {errors.firstName?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="xl:w-[48%]">
                                            <div className="flex flex-col  w-full mt-2 xl:mt-0  relative">
                                                <label className="font-normal subtitle-size text-[#262626] mb-2">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    {...register("lastName")}
                                                    className="border-[#EBEBEB] placeholder-input-modal border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-1 pl-14"
                                                    placeholder="Type Your Last Name"
                                                />
                                                <img
                                                    src={Logos.Person}
                                                    height={24}
                                                    width={24}
                                                    className="absolute bottom-2 left-3"
                                                />
                                            </div>
                                            {errors.lastName?.message && (
                                                <p className="text-red-600 text-[12px] mt-1 ml-2">
                                                    {errors.lastName?.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col relative">
                                            <label className="font-normal subtitle-size text-[#262626] mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="border-[#EBEBEB] placeholder-input-modal border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-1 pl-14"
                                                placeholder="Type Your Email"
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
                                            <p className="text-red-600 text-[12px] mt-1 ml-2">
                                                {errors.email?.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <div className="flex flex-col relative ">
                                            <label className="font-normal subtitle-size text-[#262626] mb-2">
                                                Password
                                            </label>
                                            <input
                                                type={!showPassword.password ? "password" : "text"}
                                                className="border-[#EBEBEB] placeholder-input-modal border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-1 pl-14"
                                                placeholder="Type Your Password"
                                                {...register("password")}
                                            />
                                            <img
                                                src={Logos.PasswordIcon}
                                                height={24}
                                                width={24}
                                                className="absolute bottom-2 left-3"
                                            />
                                            {!showPassword.password ? (
                                                <img
                                                    src={Logos.Eye}
                                                    height={24}
                                                    width={24}
                                                    className="absolute bottom-2 right-3"
                                                    onClick={() => {
                                                        setShowPassword((prev) => ({
                                                            ...prev,
                                                            password: !prev.password,
                                                        }));
                                                    }}
                                                />
                                            ) : (
                                                <img
                                                    src={Logos.EyeBlue}
                                                    height={24}
                                                    width={24}
                                                    className="absolute bottom-2 right-3"
                                                    onClick={() => {
                                                        setShowPassword((prev) => ({
                                                            ...prev,
                                                            password: !prev.password,
                                                        }));
                                                    }}
                                                />
                                            )}
                                        </div>
                                        {errors.password?.message && (
                                            <p className="text-red-600 text-[12px] mt-1 ml-2">
                                                {errors.password?.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <div className="flex flex-col relative ">
                                            <label className="font-normal subtitle-size text-[#262626] mb-2">
                                                Confirm Password
                                            </label>
                                            <input
                                                type={
                                                    !showPassword.confirmPassword ? "password" : "text"
                                                }
                                                className="border-[#EBEBEB] placeholder-input-modal border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-1 pl-14"
                                                placeholder="Type Your Confirm Password"
                                                {...register("confirmPassword")}
                                            />

                                            <img
                                                src={Logos.PasswordIcon}
                                                height={24}
                                                width={24}
                                                className="absolute bottom-2 left-3"
                                            />
                                            {!showPassword.confirmPassword ? (
                                                <img
                                                    src={Logos.Eye}
                                                    height={24}
                                                    width={24}
                                                    className="absolute bottom-2 right-3"
                                                    onClick={() => {
                                                        setShowPassword((prev) => ({
                                                            ...prev,
                                                            confirmPassword: !prev.confirmPassword,
                                                        }));
                                                    }}
                                                />
                                            ) : (
                                                <img
                                                    src={Logos.EyeBlue}
                                                    height={24}
                                                    width={24}
                                                    className="absolute bottom-2 right-3"
                                                    onClick={() => {
                                                        setShowPassword((prev) => ({
                                                            ...prev,
                                                            confirmPassword: !prev.confirmPassword,
                                                        }));
                                                    }}
                                                />
                                            )}
                                        </div>
                                        {errors.confirmPassword?.message && (
                                            <p className="text-red-600 text-[12px] mt-1 ml-2">
                                                {errors.confirmPassword?.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex items-center flex-wrap h-[40px] my-4">
                                        <div className="flex gap-4 font-normal text-[20px] text-[#262626] items-center">
                                            <Controller
                                                name="checkbox"
                                                control={control}
                                                render={({field}) => (
                                                    <Checkbox
                                                        {...field}
                                                        defaultChecked={false}
                                                        checked={field.value}
                                                        onChange={field.onChange}
                                                    />
                                                )}
                                            />
                                            <h1 className="font-normal text-[14px]">
                                                By Creating an account, you agree to our
                                                <Link
                                                    to="#"
                                                    className="text-[#3A37A6] underline font-normal text-[14px]"
                                                >
                                                    Terms Of Service And Privacy Policy
                                                </Link>
                                            </h1>
                                        </div>
                                        {errors.checkbox?.message && (
                                            <p className="text-red-600 text-[12px] mt-1 ml-2">
                                                {errors.checkbox?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="">
                                    <AuthButtonComp
                                        icon={Logos.GoogleIcon}
                                        firstButtonLabel="Create An Account"
                                    />
                                    <div
                                        id="google-btn"
                                        onClick={() => {
                                            googleDiv.value.click();
                                        }}
                                    >
                                        <Link to={"#"} className="relative w-full">
                                            <ButtonComp
                                                className="flex items-center justify-center shadow-sm w-full py-[8px] px-[30px] rounded-[5px]  xxl:text-[24px]"
                                                name={"Sign in with Google"}
                                            />
                                            <img
                                                src={Logos.GoogleIcon}
                                                className="absolute bottom-2 xxl:bottom-3.5
              left-[1%] xs:left-[5%] md:left-[6%] lg:left-[15%] xxl:left-[18%]"
                                            />
                                        </Link>
                                    </div>
                                    <div className="my-5 ml-11 ">
                                        <h1 className="font-light text-[#262626]  xxl:text-[20px]">
                                            Already have an account ?
                                            <Link to="/login" className="text-[#3A37A6]">
                                                log in
                                            </Link>
                                        </h1>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CreateAnAccount;
