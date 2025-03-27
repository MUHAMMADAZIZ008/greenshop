import React from "react";
import useGetRelatedProduct from "../_service/query/use-get-related-product";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ProductCard from "@/components/home/components/product-card";

const RelatedProducts = ({
  id,
  categoryId,
}: {
  id: string;
  categoryId: string;
}) => {
  const { data, isLoading, error } = useGetRelatedProduct(categoryId);

  return (
    <div className="container pb-[127px]">
      <h2 className="font-bold mb-11 text-[18px] text-[#46a358] pb-3 border-b border-b-[#46a358]">
        Related Products
      </h2>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="swiper__related"
            slidesPerView={5}
            spaceBetween={26}
          >
            {data?.data.map((item) => (
              <SwiperSlide className="pb-10" key={item._id}>
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
