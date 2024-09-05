
import React, { useState } from "react";
import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    Image,
    Spinner,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadImg = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate(); 

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleUpload = async () => {
        if (!image) {
            setError("Please select an image to upload.");
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        const formData = new FormData();
        formData.append("image", image);
        formData.append("userId", localStorage.getItem("id")); // Assuming userId is stored in localStorage

        try {
            const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            authentication: `Bearer ${token}`,  // Corrected to Authorization header
          }
        };
            const response = await axios.post("https://lenskart-project.onrender.com/profile/upload-image", formData, config);
            setSuccess(response.data.msg);
            setImage(null);
            setPreview("");
            navigate("/")
            window.location.reload()
        } catch (error) {
            console.log(error.response)
            setError(
                error.response?.data?.msg || "An error occurred while uploading the image."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box maxW="md" mx="auto" mt={4}>
            <FormControl>
                <FormLabel>Upload Profile Image</FormLabel>
                <Input type="file" accept="image/*" onChange={handleImageChange} />
            </FormControl>
            {preview && (
                <Image src={preview} alt="Profile Preview" boxSize="150px" mt={4} borderRadius="full" />
            )}
            {loading ? (
                <Spinner size="xl" mt={4} />
            ) : (
                <Button mt={4} colorScheme="teal" onClick={handleUpload}>
                    Upload
                </Button>
            )}
            {error && (
                <Alert status="error" mt={4}>
                    <AlertIcon />
                    {error}
                </Alert>
            )}
            {success && (
                <Alert status="success" mt={4}>
                    <AlertIcon />
                    {success}
                    
                </Alert>
            )}
        </Box>
    );
};





export default UploadImg;
