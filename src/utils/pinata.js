import axios from "axios";

const API_KEY = "2b5a2109819ae483422b";
const SECRET_API_KEY = "a0c230ab65bc05156dd182113f264d784ea127a957fdc14fa0ac3dc586a7a7b2";

// Function to upload data to IPFS
export const uploadToIPFS = async (name, address, file) => {
  const formData = new FormData();
  formData.append("file", file);

  const metadata = JSON.stringify({ name, address });
  formData.append("pinataMetadata", metadata);

  const options = JSON.stringify({ cidVersion: 1 });
  formData.append("pinataOptions", options);

  try {
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        pinata_api_key: API_KEY,
        pinata_secret_api_key: SECRET_API_KEY,
      },
    });

    return res.data.IpfsHash; // Return CID
  } catch (error) {
    console.error("Error uploading to Pinata:", error);
    return null;
  }
};

// Function to retrieve data from IPFS
export const getFromIPFS = async (cid) => {
  try {
    const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
    return url;
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};
