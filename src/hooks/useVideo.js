import axios from "axios";
import { useQuery } from "react-query";

import { base_url_candor, getToken } from "../utils/constants";
// import { useGlobalInfo } from "../contexts/GlobalContext";

// const {stepId}= useGlobalInfo();
// export const postVideo = async (formData) => {
//   const data = await axios.post(`${base_url}storage/upload`, formData, {
//     headers: {
//       Authorization: `Bearer ${getToken()}`,
//     },
//   });
//   console.log("video", data?.data);
//   return data;
// };
let publicToken;
export const postVideo = async (formData) => {
  const data = await axios.post(`${base_url_candor}storage/upload`, formData, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return data?.data;
};
export const createFolder = async (payload) => {
  const data = await axios.post(`${base_url_candor}folder/create`, payload, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};
export const createSubFolder = async (payload) => {
  const data = await axios.post(`${base_url_candor}sub-folder/create`, payload, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};
export const createStep = async (payload) => {
  const data = await axios.post(`${base_url_candor}step/create`, payload, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};
// export const updateStep = async (payload) => {
//   // const stepId= localStorage.getItem('stepId');
//   const data = await axios.patch(
//     `${base_url}step/update-step/${payload?.id}`,
//     {
//       content: payload?.file?.fullPathUrl,
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${getToken()}`,
//       },
//     }
//   );
//   return data?.data;
// };
export const updateStep = async ({ id, interaction, payload }) => {
  if (interaction?.type) {
    const data = await axios.patch(
      `${base_url_candor}step/update-step/${id}`,
      {
        interaction,
      },

      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    return data?.data;
  } else if (interaction === undefined) {
    const data = await axios.patch(
      `${base_url_candor}step/update-step/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    return data?.data;
  }
};
export const updateInteraction = async (payload) => {
  const data = await axios.patch(
    `${base_url_candor}step/update-interaction/${payload.id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;

  // else if (interaction === undefined) {
  //     const data = await axios.patch(`${base_url}step/update-interaction/${id}`,
  //         payload,
  //         {
  //             headers: {
  //                 Authorization: `Bearer ${getToken()}`,
  //             },
  //         }
  //     );

  //     return data?.data;
  // }
};
export const getAllStep = async (payload) => {
  const data = await axios.get(
    `${base_url_candor}step/find-all/${payload}`,

    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};
export const getAllPath = async (payload) => {
  const data = await axios.get(`${base_url_candor}step/paths/${payload}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};
export const setPath = async (payload) => {
  const data = await axios.patch(
    `${base_url_candor}step/push-path/${payload.id}`,
    {
      pathText: payload.pathText,
      pathSource: payload.pathSource,
      pathDestination:payload?.pathDestination
    },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};

export const deleteFolder = async (id) => {
  const data = await axios.delete(`${base_url_candor}folder/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};
export const deleteSinglePath = async (payload) => {
  const data = await axios.delete(
    `${base_url_candor}step/pop-path/${payload.interactionId}/${payload.id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};
export const deleteSubFolder = async (id) => {
  const data = await axios.delete(`${base_url_candor}sub-folder/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};
export const renameFolder = async (payload) => {
  const data = await axios.patch(
    `${base_url_candor}folder/${payload.id}`,
    { folderName: payload.folderName },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};
export const renameSubFolder = async (payload) => {
  const data = await axios.patch(
    `${base_url_candor}sub-folder/${payload.id}`,
    { subFolderName: payload.folderName,folderId:payload.folderId },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};
export const getSubFolder = async (id) => {
  const data = await axios.get(`${base_url_candor}sub-folder/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};
export const GetFolders = async () => {
  const data = await axios.get(`${base_url_candor}folder`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};

export function useFetchFolders() {
  return useQuery(["folders"], GetFolders);
}

export const GetSingleStep = async (id) => {
  const data = await axios.get(`${base_url_candor}step/find-one/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken() ?? publicToken}`,
    },
  });

  return data?.data?.data;
};
export const deleteStep = async (id) => {
  const data = await axios.delete(`${base_url_candor}step/delete-one/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return data?.data;
};

export const moveVideo = async (payload) => {
  const data = await axios.post(
    `${base_url_candor}sub-folder/move-sub-folder`,
    {
      folderId: payload?.folderId,
      subFolderId: payload?.subFolderId,
    },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};
export const duplicateVideo = async (payload) => {
  const data = await axios.post(
    `${base_url_candor}sub-folder/duplicate-one/${payload?.folderId}/${payload?.subFolderId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};

export const duplicateStep = async (payload) => {
  const data = await axios.post(
    `${base_url_candor}step/duplicate-one/${payload}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};
export const StripeConnect = async (id) => {
  const data = await axios.get(`${base_url_candor}stripe/account/connect?url=${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};
export const getShareSubFolder = async (id) => {
  const data = await axios.get(
    `${base_url_candor}share-folder/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
  publicToken = data?.data?.data?.accessToken;
  return data?.data?.data;
};

export const addSuggestedAmount = async ({id,payload}) => {
  const data = await axios.patch(
    `${base_url_candor}step/push-suggested-amount/${id}`,
    
       payload,
    
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};

export const getSuggestedAmount = async (id) => {
  const data = await axios.get(`${base_url_candor}step/suggested-amounts/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};

export const deleteSuggestedAmount = async ({IntractionId,Id}) => {
  const data = await axios.delete(`${base_url_candor}step/pop-suggested-amount/${IntractionId}/${Id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return data?.data;
};
export const checkStripeStatus = async () => {
  const data = await axios.get(`${base_url_candor}stripe/user/status`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return data?.data;
};


export const shareSubFolder = async (payload) => {

  const data = await axios.post(
    `${base_url_candor}share-folder`,
    {
      subFolderId: payload,
    },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};

export const updateSuggestedAmount = async ({interactionId,amountId,payload}) => {
  const data = await axios.patch(
    `${base_url_candor}step/update-suggested-amount/${interactionId}/${amountId}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data?.data;
};
export const stripeConnection = async ({payload,setLoading}) => {
  const data = await axios.post(
    `${base_url_candor}stripe/checkout/payment`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${publicToken}`,
      },
    }
  );
  setLoading(false)
  window.open(data?.data?.url, "_blank");
  return data?.data;
};
