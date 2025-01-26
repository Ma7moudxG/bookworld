import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthorCard = ({
  name,
  books,
  href,
}: {
  name: string;
  books: string;
  href: string;
}) => {
  return (
    <div className="bg-white flex p-4 rounded-md ">
      <div>
        <Image src={href} alt="store thumb" width={100} height={100} />
      </div>
      <div className="ml-2 flex flex-col gap-3 justify-between">
        <div>
          <h1 className="pl-2 font-semibold">{name}</h1>
          <h1 className="pl-2 text-xs text-[#D86128]">
            Published Books:{books}
          </h1>
        </div>
        <Link href="/" className="">
          <button className="bg-[#D86128] text-white text-sm px-3 py-2 rounded-md">
            Visit Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AuthorCard;
