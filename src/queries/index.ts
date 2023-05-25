import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api/v1';

interface Result {
    answer: string;
    suggestion: string;
}

export const downloadFromForm = async(data: {resume: string}): Promise<Result> => {
    const response = await axios.post(`${API_URL}/from-form`, data);
    return response?.data;
}

export const downloadFromPDF = async (file: File): Promise<Result> => {
    const formData = new FormData();
    formData.append('pdf', file);

    const response = await axios.post(`${API_URL}/from-pdf`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
    );

    return response?.data;
};

