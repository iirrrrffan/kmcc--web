import React, { useState, useEffect, useRef } from 'react';
import { adminInstance } from '../../axiosInstance/Axios';
import SideBar from '../components/Sidebar';
import { FaTrash } from 'react-icons/fa';
import { FaFolderOpen } from 'react-icons/fa';

const ImageUpload = () => {
    const [photo, setPhoto] = useState(null);
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);


    const fetchImages = async () => {
        try {
            const response = await adminInstance.get('/admin/upload/images');
            setImages(response.data.images);
        } catch (err) {
            setError('Failed to fetch images.');
        }
    };

    useEffect(() => {
        fetchImages();
    }, [message]);

    const handleImageUpload = async (e) => {
        e.preventDefault();
        if (!photo) {
            setError('Please select an image to upload');
            return;
        }

        const formData = new FormData();
        formData.append('photo', photo);

        try {
            const response = await adminInstance.post('/admin/upload-image', formData);
            setMessage(response.data.message);
            setError('');
            setPhoto(null);
            setPreview(null);
            fetchImages();
        } catch (err) {
            setError('Failed to upload image.');
        }
    };

    const handleImageDelete = async (id) => {
        try {
            await adminInstance.delete(`/admin/image/${id}`);
            setMessage('Image deleted successfully!');
            fetchImages();
        } catch (err) {
            setError('Failed to delete image.');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <SideBar />
            <div className="flex justify-center mb-6 mt-10">
                <form onSubmit={handleImageUpload} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border border-green-200">
                    <button
                        type="button"
                        onClick={handleIconClick}
                        className="block w-full mb-4 px-4 py-2 border rounded-md text-gray-700"
                    >
                        <FaFolderOpen className="inline-block mr-2" />
                        Select Image
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    {preview && (
                        <div className="mb-4">
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-48 h-48 object-cover mx-auto border border-green-200 rounded-lg"
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Upload
                    </button>
                </form>
            </div>
            <div className="container mx-auto p-6 bg-green-50">
                <div className="mb-6 text-center">
                    {message && <p className="text-green-600 font-semibold">{message}</p>}
                    {error && <p className="text-red-600 font-semibold">{error}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.length === 0 ? (
                        <p className="text-center text-gray-500 col-span-3">No images available.</p>
                    ) : (
                        images.map((image) => (
                            <div key={image._id} className="bg-white border border-green-200 rounded-lg shadow-lg overflow-hidden">
                                <img
                                    src={image.photo}
                                    alt="Gallery"
                                    className="w-48 h-48 object-cover mx-auto"
                                />
                                <div className="p-4 flex justify-between items-center">
                                    <button
                                        className="text-red-500 hover:text-red-700 transition-colors"
                                        onClick={() => handleImageDelete(image._id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default ImageUpload;
