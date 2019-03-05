import axios from 'axios';

const KEY = 'AIzaSyDAC0qFPZAS_kEBRBfd25BiHED_kaWUpUI';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults : 5,
        key: KEY
    }
});