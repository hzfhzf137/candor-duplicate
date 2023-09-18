import axios from "axios";
import {useQuery} from "react-query";
import {base_url_candor} from "../utils/constants";

// import dotenv from 'dotenv';
// dotenv.config();

export const postsData = async () => {
    const {data} = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`
    );
    return data;
};

export function useFetchRepositories() {
    return useQuery(["repos"], postsData);
}

export const signIn = async (payload) => {
    const response = await axios.post(`${base_url_candor}user/sign-in`, {
        email: payload.email,
        password: payload.password,
        rememberMe: payload.checkbox,
    });
    return response.data;
};

export const getOtp = async (payload) => {
    const data = await axios.get(
        `${base_url_candor}user/get-otp?email=${payload.email}`
    );
    localStorage.setItem("loginEmail", JSON.stringify(payload.email));
    return data;
};
export const createNewPassword = async (payload) => {
    const email = JSON.parse(localStorage.getItem("loginEmail"));
    const data = await axios.post(base_url_candor, {
        email: email,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
    });
    return data.data;
};
export const OtpVerifyLogin = async (payload) => {
    const email = JSON.parse(localStorage.getItem("loginEmail"));
    const data = await axios.post(`${base_url_candor}user/verify-otp`, {
        otp: +payload,
        email: email,
    });
    return data;
};

export const signUp = async (payload) => {
    const {data} = await axios.post(`${base_url_candor}user/signup`, payload);
    localStorage.setItem("signUpEmail", JSON.stringify(payload.email));
    return data;
};

export const verifyOTPSignUp = async (payload) => {
    const signup = JSON.parse(localStorage.getItem("signUpEmail"));

    const data = await axios.get(
        `${base_url_candor}user/verify-signup?otp=${+payload}&email=${signup}`
    );
    return data;
};
