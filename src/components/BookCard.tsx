import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({
  name,
  author,
  href,
}: {
  name: string;
  author: string;
  href: string;
}) => {
  return (
    <div className="bg-white flex p-4 rounded-md ">
      <div>
        <Image src={href} alt="store thumb" width={100} height={100} />
      </div>
      <div className="ml-2 flex flex-col gap-2 justify-between">
        <div>
          <h1 className="pl-2 font-semibold">{name}</h1>
          <h1 className="pl-2 text-xs text-[#D86128]">By:{author}</h1>
        </div>
        <div className="p-2">
          <p className="text-xs text-gray-500">Stores</p>
          <div className="flex gap-4">
          <div className="bg-[#FFF6F1] flex-col items-center justify-center p-2 rounded-md">
            <h3>book1</h3>
            <p className="text-[#E9692C]">$4</p>
            <button className="bg-[#2374BF] text-white px-2 py-1 rounded-md text-xs">
              Buy Now!
            </button>
          </div>
          <div className="bg-[#FFF6F1] flex-col items-center justify-center p-2 rounded-md">
            <h3>book2</h3>
            <p className="text-[#E9692C]">$7</p>
            <button className="bg-[#2374BF] text-white px-2 py-1 rounded-md text-xs">
              Buy Now!
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
