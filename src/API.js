import axios from 'axios';
import KEY from './api_key';

const URL = 'https://www.googleapis.com/youtube/v3/search';

let config = {
    part: 'snippet',
    key: KEY,
    maxResults: 5,
    type: 'video'
};

export default function(options, callback) {
    if(!options.q) {
        throw new Error('You have to pass object with q property that stands for search query');
    }

    let params = {...config, ...options};
    console.log(params);
    
    axios.get(URL, {params})
        .then( (response) => {
            if(callback) {callback(response.data.items);}
        })
        .catch((error) => {
            console.error('An error occured during fetching data from YouTube', error);
        })
}
