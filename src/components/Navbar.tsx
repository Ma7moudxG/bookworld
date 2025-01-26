// import { UserButton } from "@clerk/nextjs"
// import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image"

const Navbar = async () => {
  
  // const user = await currentUser();
  
  return (
    <div className='flex items-center justify-between p-6'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src="/search.png" alt="" width={14} height={14}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <Image src="/avatar1.png" alt="" width={36} height={36} className="rounded-full"/>
        <div className='flex flex-col'>
          <span className="text-md leading-3 font-medium">Jacob Jones</span>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar