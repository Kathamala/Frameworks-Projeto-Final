import axios from 'axios';

const API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE3MzI5NTA1LTg0NDItNDgxOC1hODM5LWNmNjY2YzIyYWQwZiIsImlhdCI6MTYyOTc1NjU2Nywic3ViIjoiZGV2ZWxvcGVyLzllOThjMDQzLWUyYjAtYTMzYS1jZDE5LTUwZWU4NGE5NjA4NCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODcuMTkuMTYzLjk1Il0sInR5cGUiOiJjbGllbnQifV19.Q6EOqNCa-g3CHM6XrQrM3-hWEkZa_FjW0p_Eokic7AAYJU-2z53KjaNh-jZnLCdXk92PaduE5HpyAVCV-QKb7w"

const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/episode',
    //headers: {'Authorization' : 'Bearer '+API_TOKEN}
});

export default api;


//baseURL: 'https://api.clashroyale.com/v1/cards',
//baseURL: 'https://api.tvmaze.com/search/shows?q=star%20wars',
//baseURL: 'https://rickandmortyapi.com/api/episode',
//baseURL: 'https://www.scorebat.com/video-api/v3/',


//ThiagoKey: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE3MzI5NTA1LTg0NDItNDgxOC1hODM5LWNmNjY2YzIyYWQwZiIsImlhdCI6MTYyOTc1NjU2Nywic3ViIjoiZGV2ZWxvcGVyLzllOThjMDQzLWUyYjAtYTMzYS1jZDE5LTUwZWU4NGE5NjA4NCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODcuMTkuMTYzLjk1Il0sInR5cGUiOiJjbGllbnQifV19.Q6EOqNCa-g3CHM6XrQrM3-hWEkZa_FjW0p_Eokic7AAYJU-2z53KjaNh-jZnLCdXk92PaduE5HpyAVCV-QKb7w