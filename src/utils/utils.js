import axios, {Axios} from "axios";

let baseURL;

if (process.env.NODE_ENV === 'production') {
    baseURL = "https://prs.esite-lab.com/"
} else {
    baseURL = "http://127.0.0.1:8000/"
}

const JsonHeader = {
    headers: {
        'Content-Type' : 'application/json',
        'Accept'       : 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('esite_token')
    }
}

export function httpGET($URL) {
  return axios.get(baseURL + $URL, JsonHeader );
}

export function httpPOST($URL, $data) {
    return axios.post(baseURL + $URL, $data, JsonHeader );
}