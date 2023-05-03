import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL } from 'constants/constants';

axios.defaults.baseURL = SERVER_URL;

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

export const delContact = createAsyncThunk(
  'contact/delContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

export const updateStatusContact = createAsyncThunk(
  'contact/updateStatusContact',
  async ({ id, favorite }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}/favorite`, favorite);
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

export const editContact = createAsyncThunk(
  'contact/editContact',
  async ({ id, name, phone, email }, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${id}`, {
        name,
        phone,
        email,
      });
      return { data: response.data, status: response.request.status };
    } catch (e) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);