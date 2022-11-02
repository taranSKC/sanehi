import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

function Section() {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
      autoplay={{
        delay: 5000,
      }}
    >
      {[1, 2, 3, 4].map(() => {
        return (
          <SwiperSlide>
            <section className="py-3 sm:py-6 md:py-9">
              <div className="container mx-auto px-2  md:px-10">
                <h1 className="text-4xl text-center font-bold mb-6">
                  Trending
                </h1>
                {/* Two Columns */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="image flex justify-center">
                      <Image
                        src={"/images/nature.jpg"}
                        width={600}
                        height={600}
                        className="object-cover"
                      />
                    </div>
                    <div className="info pl-2 md:pl-10">
                      <div className="cat">
                        <Link href={"/"}>
                          <a className="!text-orange-600">Business, Travel</a>
                        </Link>
                        <Link href={"/"}>
                          <a className="text-gray-600 text-sm hover:text-gray-800">
                            - July 28,2022
                          </a>
                        </Link>
                      </div>
                      <div className="title">
                        <Link href={"/"}>
                          <a className="text-3xl font-bold md:text-6xl">
                            The most visited link in the world for books
                          </a>
                        </Link>
                      </div>
                      <p className="description text-gray-500 pt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure
                        eius earum ut molestias architecto voluptate aliquam...
                      </p>
                      <div className="author-details pt-4">
                        <Author />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Section;
