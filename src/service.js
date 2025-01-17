// 引入 axios 库
import axios from 'axios';


function base64(str) {
    const encoded = new TextEncoder().encode(str);
    return btoa(String.fromCharCode(...encoded));
  }

export function getDrawProto(code) {
    const encodedCode = encodeURIComponent(base64(code));
    return axios.get(`/draw?code=${encodedCode}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error in Draw API:', error);
            // throw error;
        });
}

export function getFormatProto(code) {
    const encodedCode = base64(code);
    return axios.get(`/format?code=${encodedCode}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error in Format API:', error);
            // throw error;
        });
}
