"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the type for the response from the crypto API
interface CryptoResponse {
  // Define the structure of your response here
}

// Define the headers and base URL
const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_COINRANKING_API_KEY as string,
  "X-RapidAPI-Host": process.env.NEXT_PUBLIC_COINRANKING_API_HOST as string,
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

// Create a function to generate request objects
const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

// Create the crypto API
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // Define the getCryptos endpoint
    getCryptos: builder.query<CryptoResponse, void>({
      query: () => createRequest("/coins"),
    }),
  }),
});

// Export the generated React hook for getCryptos endpoint
export const { useGetCryptosQuery } = cryptoApi;
