import axios from "axios";

import {base_url_candor, getToken} from "../utils/constants";

export const contactDetails = async (payload) => {
    const data = await axios.get(`${base_url_candor}contacts/contact-detail/${payload}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        })
    return data.data;
}
export const exportData = async (payload) => {
    const data = await axios.post(`${base_url_candor}contacts/download-csv`,
        {
            "firstName": payload[0].state,
            "lastName": payload[0].state,
            "email": payload[1].state,
            "organization": payload[4].state,
            "occupation": payload[5].state,
            "address": payload[3].state,
            "employer": payload[6].state,
            "phone": payload[2].state,
            "searchValue": payload[7].search
        },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        })
//   console.log('exported data',data.data)
    return data.data;
}

export const filterContact = async (payload) => {
    if (payload.length == 0) {
        const data = await axios.post(
            `${base_url_candor}contacts/find-by-filter`, {},
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );

        return data?.data;
    } else {
        const data = await axios.post(
            `${base_url_candor}contacts/find-by-filter`, {
                "firstName": payload[0].state,
                "lastName": payload[0].state,
                "email": payload[1].state,
                "organization": payload[4].state,
                "occupation": payload[5].state,
                "address": payload[3].state,
                "employer": payload[6].state,
                "phone": payload[2].state,
                "searchValue": payload[7].search
            },
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );
        return data?.data;

    }

};
export const deleteChat = async (payload) => {
    const data = await axios.delete(
        `${base_url_candor}contacts/${payload}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );
    return data.data;

};


export const updateContact = async (payload) => {
    const body = {firstName: payload.firstName, lastName: payload.lastName};
    const data = await axios.patch(`${base_url_candor}contacts/${payload.id}`, body, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return data;
};

export const deleteContact = async (id) => {
    const data = await axios.delete(`${base_url_candor}contacts/${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return data;
};

