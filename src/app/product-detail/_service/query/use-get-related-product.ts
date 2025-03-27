import { ProductResponse } from "@/common/interface";
import fetchWrapper from "@/service/fetcher";
import { useQuery } from "@tanstack/react-query";

const oneProductByFetch = async (id: string, categoryId: string) => {
  const data = await fetchWrapper<ProductResponse>(
    `/products/related${id}?categoryId=${categoryId}&page=1&limit=15}`
  );
  return data;
};

const useGetRelatedProduct = (id: string, categoryId: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => oneProductByFetch(id, categoryId),
  });
};

export default useGetRelatedProduct;
