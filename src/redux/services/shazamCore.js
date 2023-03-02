import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


  export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key",'0882bd7e32msha658c9e45685ca8p1bf880jsn7f2a76295755' );

            return headers;
        },
    }),
     endpoints: (builder) => ({
        getTopCharts: builder.query({query: () =>  "/charts/world"}),
        // getSongByGenre: builder.query({query: (genre) =>  `/charts/genre-world?genre_code=${genre}`}),
        getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({query: ({songid}) => `/tracks/related?track_id=${songid}` }),
        getArtistDetail: builder.query({query: (artistId) => `/artists/details?artist_id=${artistId}` }),
        getSongByCountry: builder.query({query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
     }),
  });

  export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailQuery,
    useGetSongByCountryQuery,
    // useGetSongByGenreQuery
  } = shazamCoreApi 
  