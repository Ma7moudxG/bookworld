import Image from 'next/image'
import React from 'react'

const StoreCard = ({ name, books }: { name: string; books: string[] }) => {
    return (
      <div className="bg-white flex p-4 rounded-md">
        <div>
          <Image 
            src="/store_thumb.png"
            alt="store thumb"
            width={100}
            height={100}
          />
        </div>
        <div className="ml-2">
          <h1 className="pl-2 font-semibold">{name}</h1>
          <div className="flex gap-4 p-2">
              <div
                className="bg-[#FFF6F1] flex-col items-center justify-center p-2 rounded-md"
              >
                <h3>book1</h3>
                <p className="text-[#E9692C]">$4</p>
                <button className="bg-[#2374BF] text-white px-2 py-1 rounded-md text-xs">
                  Buy Now!
                </button>
              </div>
              <div
                className="bg-[#FFF6F1] flex-col items-center justify-center p-2 rounded-md"
              >
                <h3>book2</h3>
                <p className="text-[#E9692C]">$7</p>
                <button className="bg-[#2374BF] text-white px-2 py-1 rounded-md text-xs">
                  Buy Now!
                </button>
              </div>
          </div>
        </div>
      </div>
    );
  };
  

export default StoreCard