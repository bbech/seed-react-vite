import { Configuration } from "@publicApi/configuration";
import { Configuration as ConfiguratioPrivate  } from "@privateApi/configuration";

export const configuration = new Configuration({
    basePath: import.meta.env.VITE_API_URL,
  });

  
export const configurationpPrivate = new ConfiguratioPrivate({
    basePath: import.meta.env.VITE_API_URL,
    accessToken: () => {
        return import.meta.env.VITE_API_KEY;
    }
});
