import { FilterT, ProductResponse } from "@/common/interface";
import fetchWrapper from "@/service/fetcher";
import { useQuery } from "@tanstack/react-query";

export const getProductByFetch = async ({ filter }: { filter?: FilterT }) => {
  const data = await fetchWrapper<ProductResponse>(
    `/products?categoryId=67dd38572c0640fc1a0ef93f&page=${filter?.page}&limit=${filter?.limit}`
  );
  return data;
};

export const useGetProductByQuery = (filter?: FilterT) => {
  return useQuery({
    queryKey: ["product_list", filter],
    queryFn: () => getProductByFetch({ filter }),
  });
};
