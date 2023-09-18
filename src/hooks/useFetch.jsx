import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

// Pass URL
const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleGoogle = async (response) => {
        setLoading(true);
        const body = {
            credential: response.credential,
        };
        try {
            const res = await axios.post(url, body);

            localStorage.setItem(
                "token",
                JSON.stringify(res.data.data.accessToken)
            );

            localStorage.setItem(
                "userName",
                res.data.data.firstName +
                " " +
                res.data.data.lastName
            );

            localStorage.setItem(
                "userPic",
                res.data.data.picture
            );

            localStorage.setItem(
                "userEmail",
                res.data.data.email
            );

            localStorage.setItem(
                "userId",
                res.data.data.id
            );
            navigate("/conversation");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error?.response?.data?.message,
            });
        }
    };

    return {loading, error, handleGoogle};
};

export default useFetch;
