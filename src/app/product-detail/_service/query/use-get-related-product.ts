import { ProductResponse } from "@/common/interface";
import fetchWrapper from "@/service/fetcher";
import { useQuery } from "@tanstack/react-query";

const oneProductByFetch = async (categoryId: string) => {
  const data = await fetchWrapper<ProductResponse>(
    `/products?categoryId=${categoryId}&page=1&limit=15}`
  );

  return data;
};

const useGetRelatedProduct = (categoryId: string) => {
  return useQuery({
    queryKey: ["product_related", categoryId],
    queryFn: () => oneProductByFetch(categoryId),
  });
};

export default useGetRelatedProduct;
