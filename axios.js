import axios from 'axios';

// Set config defaults when creating the instance
const axios = axios.create({
  baseURL: 'https://api.example.com'
});

// Alter defaults after instance has been created
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;