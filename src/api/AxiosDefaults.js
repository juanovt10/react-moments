import axios from "axios";

axios.defaults.baseURL = 'https://drf-walk-app-4288386a2e75.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;