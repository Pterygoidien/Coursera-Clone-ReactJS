import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  errors: null,
  isLoading: false,
  isSuccess: false,
};

const token = "dedz";

//Create new course
export const createCourse = createAsyncThunk(
  "course/create",
  async (courseData, thunkAPI) => {
    try {
      return await courseService.createCourse(courseData, token);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getCourses = createAsyncThunk(
  "course/getAll",
  async (category = "all", thunkAPI) => {
    try {
      return await courseService.getCourses(category);
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(createCourse.pending, state => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, state => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = [...state.error, action.payload];
      })
      .addCase(getCourses.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses = action.payload;
      });
  },
});

export default courseSlice.reducer;
