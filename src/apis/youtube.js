import axios from 'axios';

const KEY = 'AIzaSyAFvZJMjJbBKvNqJ6giF35Vsb6gQwVUgfg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
});
