import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-6 ">
      <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <Image
          src="/logo.svg"
          alt="Book World"
          height={200}
          width={200}
          className="hidden lg:block"
        />
        <Image
          src="/icon.svg"
          alt="Book World"
          height={500}
          width={500}
          className=" lg:hidden"
        />
        {/* <span className="hidden lg:block font-bold text-sm xl:text-base">Book World</span> */}
      </Link>
      <Menu />
    </div>
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll flex flex-col">
      <Navbar />
      {children}
    </div>
  </div>
  );
}
