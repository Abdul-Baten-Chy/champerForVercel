import {
  Tproduct,
  TqueryObj,
  TqueryParam,
  Tresult,
  TresultSingle,
} from "@/Utills/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://champer.vercel.app/api/v1",
  }),
  tagTypes: ["products", "product"],
  endpoints: (builder) => ({
    createProduct: builder.mutation<Tresult, Partial<Tproduct>>({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    editProduct: builder.mutation<Tresult, Partial<TresultSingle>>({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["products", "product"],
    }),
    getSingleProduct: builder.query<TresultSingle, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    getAllProduct: builder.query<Tresult, string>({
      query: (search) => {
        const url = "/products";
        const queryParams: TqueryParam = {};

        if (search) {
          queryParams.searchTerm = search;
        }

        // Construct the query string
        const queryString = new URLSearchParams(queryParams).toString();

        return {
          url: `${url}${queryString ? `?${queryString}` : ""}`,
          method: "GET",
        };
      },

      providesTags: ["products"],
    }),
    getFilteredProduct: builder.query<Tresult, TqueryObj>({
      query: (searcQuery) => ({
        url: `/products/filtered?category=${searcQuery.category}&minPrice=${searcQuery.minPrice}&maxPrice=${searcQuery.maxPrice}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    createCart: builder.mutation<Tresult, Partial<Tproduct>>({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetFilteredProductQuery,
  useCreateCartMutation,
} = productApi;
