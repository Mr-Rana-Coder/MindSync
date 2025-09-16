import axios from "axios";
import { store } from "../Store/store";
import { setCredentials, logout } from "../Store/authSlice";

const api = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    withCredentials: true
});

api.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const token = state.auth.accessToken;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => (
        Promise.reject(error)
    )
);

api.interceptors.response.use(

    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const res = await axios.post(
                    "http://localhost:8000/api/v1/users/refresh-access-token",
                    {},
                    { withCredentials: true }
                );

                const newAccessToken = res.data.accessToken;

                store.dispatch(setCredentials({ accessToken: newAccessToken }));

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } catch (err) {
                console.error(err);
                store.dispatch(logout());
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
)

export { api };