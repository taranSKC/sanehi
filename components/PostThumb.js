import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./Author";

const PostThumb = () => {
  return (
    <div className="flex flex-col py-3 !max-w-[318px]">
      <div className="flex justify-center">
        <Image
          src={"/images/nature.jpg"}
          width={290}
          height={290}
          //   layout="fill"
          className="object-cover "
        />
      </div>

      <div className="info px-4 ">
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
            <a className=" font-bold md:text-xl">
              The most visited link in the world for books
            </a>
          </Link>
        </div>
        <p className="description text-sm text-gray-500 pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum ..
        </p>
        <div className="author-details pt-4">
          <Author />
        </div>
      </div>
    </div>
  );
};

export default PostThumb;
