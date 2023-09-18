import axios from "axios";
import {useQuery} from "react-query";

import {base_url_candor, getToken} from "../utils/constants";
// Arslan's code --- fecthing the contact details

export const fetchContactDetails = async () => {
    try {
        const {data} = await axios.get(
            `${base_url_candor}conversation/contact-detail/64ad392d02d8550469521b05`,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );
        // console.log("------------------>>>>>>>>--------------", data);
        return data;
    } catch (error) {
        throw new Error("Failed to fetch contact details");
    }
};

// Creating a function to export and grant access to other file
export function useFetchContactDetails() {
    return useQuery(["Contact"], fetchContactDetails);
}

// Arslan's code end
