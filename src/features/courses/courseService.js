import axios from "axios";

const API_URL = "/api/courses";

//Create new Course

const createCourse = async (courseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, courseData, config);
  return response.data;
};

// Get courses list
const getCourses = async category => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
};
