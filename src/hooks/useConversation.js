import axios from "axios";
import {useMutation, useQuery} from "react-query";
import {base_url_candor, getToken} from "../utils/constants";
// import { v4 as uuidv4 } from "uuid";
// const { setLoading } = useGlobalInfo();

// Bilal Code start ---
// fetching API fot all conversation data
export const getConversation = async () => {
    // setLoading(true)
    const data = await axios.get(`${base_url_candor}conversation/find-all/`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    // setLoading(true)
    return data;
};

// Creating a function to export and grant access to other file
export function useFetchConversation() {
    return useQuery(["convo"], getConversation, {
        enabled: false, // Set enabled to false to prevent automatic fetching
    });
}

// contacts Details
export const getContactDetails = async (ctx) => {

    const [_, id] = ctx.queryKey;
    const data = await axios.get(`${base_url_candor}conversation/contact-detail/${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    // console.log("abc", data);
    return data;
};

// Creating a function to export and grant access to other file
export function useFetchContactsDetails(id) {
    return useQuery(["contacts", id], getContactDetails);
}

export const readUnread = async (payload) => {
    const data = await axios.patch(
        `${base_url_candor}conversation/update/${payload.id}`,
        {
            isSeen: payload.read,
        },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );
    return data.data;
};

export const closeChat = async (payload) => {
    const data = await axios.patch(
        `${base_url_candor}conversation/update/${payload.id}`,
        {
            isClosed: payload.closed,
        },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );
    return data.data;
};

export const deleteChat = async (payload) => {
    if (payload.id != undefined) {
        const data = await axios.delete(
            `${base_url_candor}conversation/delete/${payload.id}`,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );
        return data.data;
    } else {
        const data = await axios.delete(
            `${base_url_candor}conversation/delete/${payload}`,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );
        return data.data;
    }
};
export const deleteMsg = async (payload) => {
    const data = await axios.delete(
        `${base_url_candor}conversation/messages/delete-messages/${payload.id}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );
    return data.data;
};

// Bilal Code end

export const addNewContact = async (payload) => {
    // const uuid = uuidv4();

    const data = await axios.post(
        `${base_url_candor}contacts/create`,
        {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
        },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );
    return data.data;
};
export const getAllContact = async () => {
    const data = await axios.get(`${base_url_candor}contacts/find-all`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return data?.data?.data;
};

export const SearchContact = async (searchQuery) => {
    const data = await axios.get(
        `${base_url_candor}contacts/find-all?query=${searchQuery}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );

    return data?.data?.data;
};

export const ReadMessages = async (conversationId) => {

    const [_, id] = conversationId.queryKey;
    if (id != "null" && id != "" && id != null) {
        const data = await axios.get(
            `${base_url_candor}conversation/messages/find-all/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );

        return data?.data?.data;
    } else {
        return;
    }
};

export function useReadMessages(id) {
    return useQuery(["repos", id], ReadMessages);
}

export const filterConversation = async (payload) => {
    const data = await axios.post(`${base_url_candor}conversation/filter`, payload, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return data;
};

const uploadConversationFiles = async (formData) => {
    const data = await axios.post(`${base_url_candor}storage/upload`, formData, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
    return data;
};
// SHARE CONVERSATION
export const passwordMatching = async (payload) => {
    const data = await axios.post(
        `${base_url_candor}share-conversation-public`,
        payload,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );
    return data;
};
export const downloadConversation = async (payload) => {
    const conversationId = localStorage.getItem("conversationId");
    // const id = localStorage.getItem("conversationId");
    const userId = localStorage.getItem("userId");
    const data = await axios.post(
        // `${base_url}conversation/download/${id}`,
        `${base_url_candor}storage/downloads/${conversationId}`,
        payload,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );
    return data;
};
export const shareConversation = async (payload) => {
    const id = localStorage.getItem("conversationId");
    const data = await axios.post(
        `${base_url_candor}share-conversation/${id}`,
        payload,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );
    return data;
};
export const conversationSecurity = async (payload) => {
    let data;
    if (payload.password) {
        data = await axios.get(
            `${base_url_candor}share-conversation?id=${payload.id}&password=${payload?.password}`,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );
    } else {
        data = await axios.get(`${base_url_candor}share-conversation?id=${payload.id}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
    }
    return data;
};

export const passwordLock = async (payload) => {
    const finalPayload = {
        requirePassword: payload.requirePassword,
        password: payload.password,
    };
    const data = await axios.patch(
        `${base_url_candor}share-conversation/${payload.id}`,
        finalPayload,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );
    return data;
};
export const passwordUnlock = async (payload) => {
    const finalPayload = {
        requirePassword: payload.requirePassword,
        password: payload.password,
    };
    const data = await axios.patch(
        `${base_url_candor}share-conversation/${payload.id}`,
        finalPayload,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );
    return data;
};

// // Arslan's code --- fecthing the contact details

// export const fetchContactDetails = async () => {
//   try {
//     const { data } = await axios.get(
//       `${base_url}conversation/contact-detail/64a6b627fc94de87d5781f08`
//     );
//     console.log("dataaa>>>", data);
//     return data;
//   } catch (error) {
//     throw new Error("Failed to fetch contact details");
//   }
// };
// // Creating a function to export and grant access to other file
// export function useFetchContactDetails() {
//   return useQuery(["Contact"], fetchContactDetails);
// }
// // arslan
export function useUploadConversationFiles() {
    return useMutation(uploadConversationFiles);
}

// USAMA Code ends Here --- integrating uploading Video and Audio API

export const sendText = async (payload) => {
    const SID = localStorage.getItem("userId");
    const ID = localStorage.getItem("conversationId");
    const RID = JSON.parse(localStorage.getItem("receiverId")).contactId ?
        JSON.parse(localStorage.getItem("receiverId")).contactId : JSON.parse(localStorage.getItem("receiverId"));

    if (ID != "null") {
        
        const data = await axios.post(
            `${base_url_candor}conversation/messages/send-messages`,
            {
                conversationId: ID,
                // senderId: SID,
                // recipientId: RID,
                content: payload,
                messageHistoryPreviewThumbnail: payload.thumbnailUrl1,
                messagePreviewThumbnail: payload.thumbnailUrl2,
                type: "text",
            },
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );
        return data.data.data;
    } else {
        
        const data = await axios.post(
            `${base_url_candor}conversation/messages/send-messages`,
            {
                // senderId: SID,
                // recipientId: RID,
                content: payload,
                contactId: RID?._id ? RID._id : RID,
                messageHistoryPreviewThumbnail: payload.thumbnailUrl1,
                messagePreviewThumbnail: payload.thumbnailUrl2,
                type: "text",
            },
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );
        // console.log("---->3data", data.data);
        return data.data.data;
    }
};

export const sendFileMessage = async (payload) => {
    const SID = localStorage.getItem("userId");
    const ID = localStorage.getItem("conversationId");
    const RID = JSON.parse(localStorage.getItem("receiverId")).contactId ?
        JSON.parse(localStorage.getItem("receiverId")).contactId : JSON.parse(localStorage.getItem("receiverId"));
    const isVideo = localStorage.getItem("isVideo");
    let type = isVideo === "true" ? "video" : "audio";
    let data;
    if (type === "video") {
        if (ID != "null") {
            
            data = axios.post(
                `${base_url_candor}conversation/messages/send-messages`,
                {
                    conversationId: ID,
                    // senderId: SID,
                    // recipientId: RID,
                    content: payload.fullPathUrl,
                    messageHistoryPreviewThumbnail: payload.thumbnailUrl1,
                    messagePreviewThumbnail: payload.thumbnailUrl2,
                    type,
                },
                {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                }
            );
        } else {
            
            data = axios.post(
                `${base_url_candor}conversation/messages/send-messages`,
                {
                    contactId: RID,
                    content: payload.fullPathUrl,
                    messageHistoryPreviewThumbnail: payload.thumbnailUrl1,
                    messagePreviewThumbnail: payload.thumbnailUrl2,
                    type,
                },
                {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                }
            );
        }
    } else {
        
        if (ID != "null") {
            data = axios.post(
                `${base_url_candor}conversation/messages/send-messages`,
                {
                    conversationId: ID,
                    // senderId: SID,
                    // recipientId: RID,
                    content: payload.fullPathUrl,
                    messageHistoryPreviewThumbnail: payload.thumbnailUrl1,
                    messagePreviewThumbnail: payload.thumbnailUrl2,
                    type: "audio",
                },
                {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                }
            );
        } else {
            
            data = axios.post(
                `${base_url_candor}conversation/messages/send-messages`,
                {
                    contactId: RID,
                    content: payload.fullPathUrl,
                    messageHistoryPreviewThumbnail: payload.thumbnailUrl1,
                    messagePreviewThumbnail: payload.thumbnailUrl2,
                    type: "audio",
                },
                {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                }
            );
        }
    }

    // alert("calling api");
    // console.log("Sending Message from store");
    // console.log("Payload fullPathUrl", payload.fullPathUrl);
    // console.log("Payload thumbnailUrl2", payload.thumbnailUrl2);
    // console.log("conversationId", ID);
    // console.log("receiverId", RID);
    // console.log("type", type);
    return data;
};
