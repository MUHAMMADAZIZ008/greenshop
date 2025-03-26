import { FilterT, ProductResponse } from "@/common/interface";
import fetchWrapper from "@/service/fetcher";
import { useQuery } from "@tanstack/react-query";

export const getProductByFetch = async ({ filter }: { filter?: FilterT }) => {
  const data = await fetchWrapper<ProductResponse>(
    `/products?categoryId=${filter?.category}&page=${filter?.page}&limit=${filter?.limit}&maxPrice=${filter?.maxPrice}&minPrice=${filter?.minPrice}`
  );

  return data;
};

export const useGetProductByQuery = (filter?: FilterT) => {
  return useQuery({
    queryKey: ["product_list", filter],
    queryFn: () => getProductByFetch({ filter }),
  });
};
