import Link from "next/link";
import React from "react";
import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";

export default function Header() {
  return (
    <div className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row   text-center justify-between px-4 py-3">
        <div className="order-3 sm:order-1">
          <input
            type="text"
            placeholder="Search.."
            className="rounded-full shadow-sm text-sm px-2"
          />
        </div>
        <div className="order-1 sm:order-2 font-bold uppercase text-3xl">
          <Link href={"/"}>
            <a href="#">Design</a>
          </Link>
        </div>

        <div className="flex gap-4 order-2 sm:order-3">
          <Link href={"/"}>
            <a href="">
              <ImFacebook2 />
            </a>
          </Link>

          <Link href={"/"}>
            <a href="">
              <ImYoutube />
            </a>
          </Link>

          <Link href={"/"}>
            <a href="">
              <ImTwitter />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
