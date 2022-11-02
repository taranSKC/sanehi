import Image from "next/image";
import Link from "next/link";
import React from "react";

const Author = () => {
  return (
    <div className="flex">
      <Image
        src={"/images/moosewala.jpg"}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-col px-3">
        <Link href={"/"}>
          <p className="text-xl font-bold cursor-pointer">Karan Aujla</p>
        </Link>

        <p className="text-sm text-gray-600">Singer at Speed Records</p>
      </div>
    </div>
  );
};

export default Author;
