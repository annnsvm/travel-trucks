import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../API/apiInstance';

export const getAllTrucks = createAsyncThunk(
  'trucks/getAllTrucks',
  async (filterParams, thunkAPI) => {
    try {
      const response = await instance.get('/campers', {
        params: filterParams, 
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTruck = createAsyncThunk(
  'trucks/getTruck',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/campers/${id}`);
      
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);