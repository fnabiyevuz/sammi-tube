import axios from "axios";


const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50',
    },
	headers: {
		'x-rapidapi-key': '22ee9fd6e9msh6b9e0400bc809d0p14cc96jsn919191f99806',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
	}
};


export const ApiService = {
    async fetching(url){
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response
    }
}