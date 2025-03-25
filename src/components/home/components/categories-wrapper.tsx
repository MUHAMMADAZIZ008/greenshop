import React from "react";
import Categories from "../categories";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getProductByFetch } from "../service/query/use-get-product";

const CategoriesWrapper = async () => {
  const client = new QueryClient();
  await client.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => getProductByFetch({}),
  });
  const hydrateClient = dehydrate(client);
  return (
    <HydrationBoundary state={hydrateClient}>
      <Categories />
    </HydrationBoundary>
  );
};

export default CategoriesWrapper;
