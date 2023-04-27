import { Configuration } from "@petapi/configuration";

export const configuration = new Configuration({
    basePath: import.meta.env.VITE_API_URL,
  });

  