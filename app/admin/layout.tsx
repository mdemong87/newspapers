"use client";
import React, { useState } from 'react';
import AdminFooter from "@/components/admin/AdminFooter";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if the route is active
  const isActive = (paths: string[]) => paths.includes(pathname);

  return (
    <main>
      <div className='bg-main sticky top-0 z-50'>
        <div className='container'>
          <div className='flex items-center justify-between text-white'>
            <div className='flex items-center space-x-2'>
              {/* Menu Icon */}
              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)} // Toggle menu open/close
                  className="text-white focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="currentColor" d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"/></svg>
                </button>
              </div>
              <Link href="/admin" className='outline-none font-extrabold text-2xl'>
                ADMIN
              </Link>
            </div>
            <div className='flex items-center space-x-2'>
              <Link href="/" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M24 12v-.006c0-3.551-1.546-6.74-4.001-8.933l-.012-.01a.596.596 0 0 0-.101-.087l-.002-.001A11.917 11.917 0 0 0 11.998.001c-3.032 0-5.8 1.126-7.91 2.984l.013-.011a.481.481 0 0 0-.07.065v.001A11.959 11.959 0 0 0 0 12.003c0 3.55 1.544 6.739 3.997 8.933l.012.01a.672.672 0 0 0 .106.097l.002.001a11.92 11.92 0 0 0 7.881 2.958a11.93 11.93 0 0 0 7.911-2.984l-.013.011a11.94 11.94 0 0 0 4.106-9.021v-.007zm-4.462 7.805a11.935 11.935 0 0 0-1.909-1.262l-.065-.032c.613-1.767.982-3.804 1.017-5.923v-.016h4.261a10.824 10.824 0 0 1-3.301 7.23zM12.572 18.3c1.283.069 2.482.351 3.588.81l-.072-.026c-.886 2.02-2.133 3.408-3.516 3.713zm0-1.144v-4.584h4.868a18.593 18.593 0 0 1-.976 5.578l.039-.131a11.637 11.637 0 0 0-3.903-.862l-.027-.001zm0-5.728V6.844a11.91 11.91 0 0 0 4.007-.891l-.079.029c.555 1.619.896 3.485.94 5.425v.021zm0-5.728V1.205c1.383.305 2.63 1.687 3.516 3.713c-1.034.43-2.233.711-3.487.781zm2.854-4a10.841 10.841 0 0 1 3.258 1.752l-.023-.018c-.443.348-.94.676-1.464.961l-.056.028a10.07 10.07 0 0 0-1.724-2.737l.009.011zm-4-.492V5.7a10.804 10.804 0 0 1-3.588-.81l.072.026c.89-2.02 2.135-3.407 3.518-3.712zM6.858 4.42a10.943 10.943 0 0 1-1.544-1.007l.024.018a10.744 10.744 0 0 1 3.158-1.712l.076-.023a10.02 10.02 0 0 0-1.689 2.658zm4.57 2.423v4.584H6.56c.044-1.961.385-3.827.979-5.577l-.039.131a11.65 11.65 0 0 0 3.901.861zm0 5.728v4.584a11.91 11.91 0 0 0-4.007.891l.079-.029c-.555-1.618-.896-3.485-.94-5.425v-.021zm0 5.728v4.495c-1.383-.305-2.63-1.687-3.516-3.713c1.034-.43 2.233-.71 3.487-.78zm-2.85 4a10.845 10.845 0 0 1-3.258-1.748l.024.018c.443-.348.94-.676 1.464-.961l.056-.028a9.843 9.843 0 0 0 1.723 2.733l-.009-.01zm8.564-2.72c.58.315 1.077.642 1.544 1.007l-.024-.018a10.744 10.744 0 0 1-3.158 1.712l-.076.023a10.014 10.014 0 0 0 1.689-2.657l.025-.065zm5.7-8.151h-4.261a19.663 19.663 0 0 0-1.058-6.078l.041.138a12.383 12.383 0 0 0 1.997-1.312l-.024.018a10.813 10.813 0 0 1 3.303 7.205zM4.462 4.195c.576.468 1.223.897 1.909 1.262l.065.032c-.613 1.767-.982 3.804-1.017 5.923v.016H1.157a10.824 10.824 0 0 1 3.301-7.23zm-3.304 8.377h4.261a19.663 19.663 0 0 0 1.058 6.078l-.041-.138c-.751.399-1.397.828-1.997 1.312l.024-.018a10.813 10.813 0 0 1-3.303-7.205l-.001-.028z"/></svg>
              </Link>
              <Link href="/admin/post/add">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5.116 20q-.691 0-1.153-.462T3.5 18.384V5.616q0-.691.463-1.153T5.115 4h9.308v1H5.116q-.231 0-.424.192t-.192.424v12.769q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423V9.077h1v9.308q0 .69-.462 1.153T17.884 20zM8 16.5v-1h7v1zm0-3v-1h7v1zm0-3v-1h7v1zM17.5 8V6h-2V5h2V3h1v2h2v1h-2v2z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full h-full flex md:flex-row flex-col">
        {/* Menu Items */}
        <div className={`flex-col bg-main w-60 h-auto text-white ${menuOpen ? 'fixed left-0 top-0 bottom-0 overflow-y-auto pt-2 z-50 flex' : ' md:flex hidden'}`}>
          <button
            onClick={() => setMenuOpen(false)} // Close menu
            className="md:hidden absolute right-2 top-2 text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
          </button>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin">
            Dashboard
          </Link>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin/post", "/admin/post/add"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin/post">
            News
          </Link>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin/stories", "/admin/stories/add"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin/stories">
            Stories
          </Link>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin/videos", "/admin/videos/add"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin/videos">
            Videos
          </Link>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin/category", "/admin/category/add"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin/category">
            Category
          </Link>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin/subcategory", "/admin/subcategory/add"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin/subcategory">
            SubCategory
          </Link>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin/page", "/admin/page/add"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin/page">
            Page
          </Link>
          <p className='text-xs text-gray-300 pl-2 pt-2'>
            Location
          </p>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin/city", "/admin/city/add"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin/city">
            City
          </Link>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin/area", "/admin/area/add"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin/area">
            Area
          </Link>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin/user", "/admin/user/add"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin/user">
            User
          </Link>
          <Link className={`hover:bg-gray-200 hover:text-black p-2 block ${isActive(["/admin/setting"]) ? 'bg-gray-200 text-black' : ''}`} href="/admin/setting">
            Setting
          </Link>
          <Link className="hover:bg-gray-200 hover:text-black p-2 block" href="/admin/logout">
            Logout
          </Link>
        </div>
        <div className='w-full'>
          {children}
        </div>
      </div>
      <AdminFooter />
    </main>
  );
}
