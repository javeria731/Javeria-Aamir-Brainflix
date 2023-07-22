import axios from 'axios';

const API_BASE_URL = 'https://project-2-api.herokuapp.com';
const API_KEY = '3f2038c3-55cd-4630-aa79-be510a6c3bf5';

export const fetchVideos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/videos?api_key=${API_KEY}`);
      console.log("Videos response:", response.data); // Add this line to check the response data
      return response.data;
    } catch (error) {
      console.error('Error fetching videos:', error);
      return [];
    }
  };
  
  export const fetchSingleVideo = async (videoId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/videos/${videoId}?api_key=${API_KEY}`);
      ///videos/:id
      console.log("Single video response:", response.data); // Add this line to check the response data
      return response.data;
    } catch (error) {
      console.error('Error fetching single video:', error);
      return null;
    }
  };
  