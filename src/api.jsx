import axios from 'axios';

const API_BASE_URL = 'https://project-2-api.herokuapp.com';

export let fetchVideos = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/videos?api_key=3f2038c3-55cd-4630-aa79-be510a6c3bf5`);
        return response.data;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
};