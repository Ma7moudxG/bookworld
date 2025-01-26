import Table from "@/components/Table";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns = [
  { header: "Store ID", accessor: "id" },
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Address",
    accessor: "address",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const data = [
  { id: 1, name: "Cover Discovery", address: "Cairo" },
  { id: 2, name: "Good On Paper", address: "Cairo" },
  { id: 3, name: "Jacob Warren", address: "Cairo" },
];

type StoresList = { id: string; name: string, address: string };

const Stores = () => {
  const renderRow = (item: StoresList) => (
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
          <h3 className="font-semibold">{item.address}</h3>
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

export default Stores;
