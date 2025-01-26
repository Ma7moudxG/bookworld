import Table from "@/components/Table";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  { header: "Book ID", accessor: "id" },
  {
    header: "Book Name",
    accessor: "name",
  },
  {
    header: "Pages",
    accessor: "pages",
  },
  {
    header: "Author",
    accessor: "author",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const data = [
  { id: 1, name: "Enemies Of The Future", pages: "238", author:"Brooklyn Simmons", price: "15" },
  { id: 2, name: "A Game Of Thrones", pages: "123", author:"Brooklyn Simmons", price: "5" },
  { id: 3, name: "Fade Into The Light", pages: "222", author:"Brooklyn Simmons", price: "22" },
];

type BooksList = { id: string; name: string, pages: string, author: string };

const Books = () => {
  const renderRow = (item: BooksList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200"
    >
      <td className="flex items-center gap-4 p-4">
          <h3 className="font-semibold">{item.id}</h3>
      </td>

      <td className="flex items-center gap-4 p-4">
          <h3 className="font-semibold">{item.name}</h3>
      </td>
      <td className="flex items-center gap-4 p-4">
          <h3 className="font-semibold">{item.pages}</h3>
      </td>
      <td className="flex items-center gap-4 p-4">
          <h3 className="font-semibold">{item.author}</h3>
      </td>

      <td className="none">
        <div className="flex items-center gap-2">
          <Link href={``}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
              <Image src="/edit.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          <Link href={``}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
              <Image src="/delete.png" alt="view" width={16} height={16} />
            </button>
          </Link>
        </div>
      </td>
     
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Stores</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto"></div>
      </div>

      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* pagination */}
    </div>
  );
};

export default Books;
