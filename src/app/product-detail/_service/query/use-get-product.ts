import { oneProductResponse } from "@/common/interface";
import fetchWrapper from "@/service/fetcher";
import { useQuery } from "@tanstack/react-query";

const oneProductByFetch = async (id: string, categoryId: string) => {
  const data = await fetchWrapper<oneProductResponse>(
    `/products/${id}?categoryId=${categoryId}`
  );
  return data;
};

const useGetProduct = (id: string, categoryId: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => oneProductByFetch(id, categoryId),
  });
};

export default useGetProduct;
