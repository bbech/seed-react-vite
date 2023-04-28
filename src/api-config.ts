import { Configuration } from "@publicApi/configuration";
import { Configuration as ConfiguratioPrivate  } from "@privateApi/configuration";
import axios from "axios";
import { containerInstance } from "./inject";
import { CounterService } from "./services/counter.service";

export const axiosPublic = axios.create();
axiosPublic.interceptors.request.use((request) => {
    console.log("axiosPublic.interceptors.request");
    console.log(containerInstance?.get(CounterService).getCounter());
    return request;
});
axiosPublic.interceptors.response.use((response) => {
    return response;
});
export const configuration = new Configuration({
    basePath: import.meta.env.VITE_API_URL,
  });


export const axiosPrivate = axios.create();
axiosPrivate.interceptors.request.use((request) => {
    console.log("axiosPrivate.interceptors.request");
    console.log(containerInstance?.get(CounterService).getCounter());
    return request;
});
axiosPrivate.interceptors.response.use((response) => {
    return response;
});
  
export const configurationpPrivate = new ConfiguratioPrivate({
    basePath: import.meta.env.VITE_API_URL,
    accessToken: () => {
        return import.meta.env.VITE_API_KEY;
    }
});
