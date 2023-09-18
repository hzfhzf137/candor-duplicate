import React, {useEffect, useRef, useState} from "react";
import {Logos} from "../../assets";
import WelcomeComp from "../../components/WelcomeComp/WelcomeComp";
import {Link, useNavigate} from "react-router-dom";
import ButtonComp from "../../components/ButtonComp/ButtonComp";
import AuthComp from "../../components/AuthComp/AuthComp";
import AuthButtonComp from "../../components/AuthButtonComp/AuthButtonComp";
import useFetch from "../../hooks/useFetch";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Checkbox} from "antd";
import {signIn} from "../../hooks/useAuth";
import {useMutation} from "react-query";
import {Toast} from "primereact/toast";
import {useStore} from "../../store/auth";
import GlobalLoader from "../../components/GlobalLoader/GlobalLoader";

// import { createNewPassword } from "../../hooks/useAuth";
const schema = yup
    .object({
        email: yup
            .string()
            .email()
            .matches(
                /^[\w\.-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z]{2,4}$/,
                "Please enter a valid Email"
            ),
        password: yup.string().required("Please Enter your password"),
        checkbox: yup.boolean(),
    })
    .required();

const data = {
    title: "Login",
    caption: "Welcome back, you’ve been missed !",
};

const Login = () => {
    const toast = useRef(null);
    const loadingState = useStore((state) => state.loading);
    const isLoading = useStore((state) => state.isLoading);
    const [check, setCheck] = useState(true);
    const setUserId = useStore((state) => state.setUserId);
    const userId = useStore((state) => state.userId);
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });
    const signInMutation = useMutation(signIn);
    const [checkboxValue, setcheckboxValue] = useState(false);
    // const resetPassword = useMutation(createNewPassword);
    const onSubmit = async (data) => {
        isLoading(!loadingState);
        signInMutation.mutate(data);
        setcheckboxValue(data.checkbox);
    };

    const {handleGoogle, loading, error} = useFetch(
        "http://localhost:3000/login"
        // "https://to-dot-candor-fe-393406.de.r.appspot.com/candor/user/signup-with-google"
    );

    const googleDiv = useRef(null);
    const [showPassword, setShowPassword] = useState(false);
    const onClickHandler = (a) => {

        if (checkboxValue == true) {
            localStorage.setItem("token", JSON.stringify(a));
        } else {
            sessionStorage.setItem("token", JSON.stringify(a));
        }
    };
    const navigate = useNavigate();
    const createFakeGoogleWrapper = () => {
        const googleLoginWrapper = document.createElement("div");

        googleLoginWrapper.style.display = "none";
        googleLoginWrapper.classList.add("custom-google-button");

        document.body.appendChild(googleLoginWrapper);

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
    const show = (param) => {
        toast.current.show({severity: "error", summary: "error", detail: param});
    };

    useEffect(() => {
        const error = signInMutation?.data?.error;

        //  setUserId(signInMutation?.data?.data?.id ?? "")
        // localStorage.setItem("userId", signInMutation?.data?.data?.id);
        // localStorage.setItem(
        //   "userName",
        //   signInMutation?.data?.data?.firstName +
        //     " " +
        //     signInMutation?.data?.data?.lastName
        // );
        // localStorage.setItem("userEmail", signInMutation?.data?.data?.email);
        // localStorage.setItem("userPic", signInMutation?.data?.data?.picture);

        if (error === false) {
            const data = signInMutation?.data?.data?.accessToken;
            onClickHandler(data);
            navigate("/conversation");
            localStorage.setItem("userId", signInMutation?.data?.data?.id);
            localStorage.setItem(
                "userName",
                signInMutation?.data?.data?.firstName +
                " " +
                signInMutation?.data?.data?.lastName
            );
            localStorage.setItem("userEmail", signInMutation?.data?.data?.email);
            localStorage.setItem("userPic", signInMutation?.data?.data?.picture);
            setTimeout(() => {
                isLoading(false);
            }, 1000);
        } else if (error === true) {
            isLoading(false);
            show(signInMutation?.data?.message);
        }
    }, [signInMutation.isSuccess]);

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
    // }, [handleGoogle]);
    useEffect(() => {
        localStorage.setItem("active", JSON.stringify(true));
    }, []);

    return (
        <div className="flex w-full h-[100vh]">
            <Toast ref={toast} color="red"/>
            {loadingState ? (
                <GlobalLoader data={"Verifying Credentials"}/>
            ) : (
                <>
                    <AuthComp
                        url={Logos.Login}
                        startText="Welcome Back To"
                        endText="Candor"
                    />
                    <div className="w-full laptop:w-[50%] overflow-hidden flex justify-center items-center">
                        <div
                            className="h-[95%] flex flex-col gap-4 overflow-y-auto w-[90%] shadow-sm rounded-lg xxs:pl-[80px] xxs:pr-[90px] px-[20px] py-[20px] xxs:py-[50px]">
                            <WelcomeComp title={data.title} caption={data.caption}/>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col justify-between h-[100%]"
                            >
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col relative">
                                        <label className="font-normal subtitle-size text-[#262626] mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-[#EBEBEB]  border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-1 pl-14 placeholder-input-modal"
                                            placeholder="Type Your Email"
                                            {...register("email", {
                                                required: true,
                                            })}
                                        />
                                        <img
                                            src={Logos.EmailIcon}
                                            height={24}
                                            width={24}
                                            className="absolute bottom-2 left-3"
                                        />
                                    </div>
                                    {errors.email?.message && (
                                        <p className="text-red-600 text-[12px]">
                                            {errors.email?.message}
                                        </p>
                                    )}
                                    <div className="flex flex-col relative ">
                                        <label className="font-normal subtitle-size text-[#262626] mb-2">
                                            Password
                                        </label>
                                        <input
                                            type={!showPassword ? "password" : "text"}
                                            className="border-[#EBEBEB]  border-[1px] border-solid shadow-sm rounded-[8px] h-[42px] mt-1 pl-14 placeholder-input-modal"
                                            placeholder="Type Your Password"
                                            {...register("password", {
                                                required: true,
                                            })}
                                        />
                                        <img
                                            src={Logos.PasswordIcon}
                                            height={24}
                                            width={24}
                                            className="absolute bottom-2 left-3"
                                        />
                                        {!showPassword ? (
                                            <img
                                                src={Logos.Eye}
                                                height={24}
                                                width={24}
                                                className="absolute bottom-2 right-3"
                                                onClick={() => {
                                                    setShowPassword(!showPassword);
                                                }}
                                            />
                                        ) : (
                                            <img
                                                src={Logos.EyeBlue}
                                                height={24}
                                                width={24}
                                                className="absolute bottom-2 right-3"
                                                onClick={() => {
                                                    setShowPassword(!showPassword);
                                                }}
                                            />
                                        )}
                                    </div>
                                    {errors.email?.message && (
                                        <p className="text-red-600 text-[12px]">
                                            {errors.password?.message}
                                        </p>
                                    )}
                                    <div className="flex items-center justify-between mt-3 flex-wrap">
                                        <div
                                            className="flex gap-4 font-normal xxl:text-[20px] text-[#262626] items-center">
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
                                            <h1 id="signUpDiv" onClick={() => {
                                            }}>
                                                {" "}
                                                Remember Me
                                            </h1>
                                        </div>
                                        <div className="underline text-[#3A37A6]">
                                            <Link
                                                to="/forgot-password"
                                                className="text-[#3A37A6] xxl:text-[20px] font-normal"
                                            >
                                                Forgot Password
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <AuthButtonComp
                                        icon={Logos.GoogleIcon}
                                        firstButtonLabel="Sign in"
                                    />

                                    <div
                                        id="google-btn"
                                        onClick={() => {
                                            googleDiv?.value?.click();
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
                                    <div className="my-5 xxl:ml-11 ">
                                        <h1 className="font-light text-[#262626] xxl:text-[20px]">
                                            Don't have an account ?{" "}
                                            <Link to="/sign-up" className="text-[#3A37A6]">
                                                Sign up
                                            </Link>{" "}
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

export default Login;
