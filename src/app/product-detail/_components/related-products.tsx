import React from "react";
import useGetRelatedProduct from "../_service/query/use-get-related-product";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const RelatedProducts = ({
  id,
  categoryId,
}: {
  id: string;
  categoryId: string;
}) => {
  const { data, isLoading, error } = useGetRelatedProduct(id, categoryId);
  return (
    <div className="container py-[127px]">
      <h2 className="font-bold mb-11 text-[18px] text-[#46a358] pb-3 border-b border-b-[#46a358]">
        Related Products
      </h2>
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="swiper__related"
          slidesPerView={5}
          spaceBetween={26}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
