import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/disasters"; // Backend URL

export const predictDisaster = async (features) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/predict`, { features });
        return response.data;
    } catch (error) {
        console.error("Prediction Error:", error);
        return { error: "Prediction failed" };
    }
};
