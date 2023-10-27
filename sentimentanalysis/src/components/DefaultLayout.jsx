import React, { useState } from 'react'
import Logo from '../assets/EavesLogo.png';
import { navigation, menus } from '../constants/Index';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DefaultLayout() {

  const location = useLocation();
  
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const navigateAndCloseNavbar = (link) => {
    setMobileNavbarOpen(false);
    navigate(link);
  };
  
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Disclosure as="nav" className="">
      {({ open }) => (
      <>
      <div className='flex flex-row justify-between items-center capitalize m-2 sm:mx-4'>
          <Link to={"/homepage"}>
              <img 
                  src={Logo} 
                  alt='Logo'
                  className='w-20 sm:w-32 h-10 sm:h-16'
              />
          </Link>
          <div className='flex flex-row sm justify-between items-center space-x-2'>
            <div className='hidden sm:block'>
                <div 
                to={""}
                className='bg-blue-900 sm:p-2 rounded-full uppercase font-semibold text-2xl text-white'>uk</div>
            </div>
            <div className='hidden sm:block'>
                <p 
                to={"/guest/signup"}
                className='bg-blue-900 px-3 sm:px-6 py-1 rounded-2xl text-white text-xs sm:text-base transition duration-300 ease-in-out'>udeme kendrick</p>
            </div>
          </div>
          <div className="flex md:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-blue-900 p-2 text-white hover:bg-blue-900 hover:text-white h-7 w-8">
              <span className="absolute -inset-0.5"/>
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
      </div>
      <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item, index) => (
                  <Disclosure.Button
                    key={index}
                    to={item.link}
                    className={({ isActive }) => classNames(
                    index === 1
                    ? location.pathname === "/historylayout/billhistory" || location.pathname === "/historylayout/paymenthistory"
                    ? 'flex p-2 cursor-pointer bg-gray-300 items-center gap-x-4 mt-8 text-orange-500'
                    : 'flex rounded-md p-2 cursor-pointer hover:bg-gray-300 duration-200 ease-in-out text-blue-900 text-sm items-center gap-x-4 mt-8'
                    : isActive
                    ? 'flex p-2 cursor-pointer bg-gray-300 items-center gap-x-4 mt-8 text-orange-500'
                    : 'flex rounded-md p-2 cursor-pointer hover:bg-gray-300 duration-200 ease-in-out text-blue-900 text-sm items-center gap-x-4 mt-8',
                    'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    onClick={() => navigateAndCloseNavbar(item.link)}
                    >
                    <div>{React.createElement(item?.icon, { size: "20" })}</div>
                    <span className={`${!open && "hidden"} origin-left duration-200 font-bold text-sm capitalize text-blue-900`}>
                      {item.name}
                    </span>
                  </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-blue-900 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0 justify-center items-center">
                      <div className='bg-blue-900 p-2 uppercase rounded-full text-white'>uk</div>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm tracking-tighter font-medium leading-none text-blue-700 capitalize">udeme kendrick</div>
                      <div className="text-sm font-medium leading-none text-gray-500">udemekendrick@gmail.com</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full p-1 text-gray-700 hover:text-orange-500 focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-orange-500"
                      >
                        Sign out
                      </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
              </>
              )}
      </Disclosure>
      <hr className='border-t-2 border-blue-900 w-full'/>

      {/* SIDEBAR */}
      <section className="flex">
        <div
          className={`bg-blue-900 min-h-screen ${
            open ? "w-52" : "w-16"
          } duration-500 text-gray-100 px-4 hidden sm:block`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-8 relative capitalize">
            {menus?.map((menu, i) => (
              <NavLink
                to={menu?.link}
                key={i}
                className={({ isActive }) => classNames(
                  i === 1
                    ? location.pathname === "/historylayout/billhistory" || location.pathname === "/historylayout/paymenthistory"
                    ? 'flex p-2 cursor-pointer bg-gray-300 items-center gap-x-4 mt-8 text-orange-500'
                    : 'flex rounded-md p-2 cursor-pointer hover:bg-gray-300 duration-200 ease-in-out text-blue-900 text-sm items-center gap-x-4 mt-8'
                    : isActive
                    ? 'flex p-2 cursor-pointer bg-gray-300 items-center gap-x-4 mt-8 text-orange-500'
                    : 'flex rounded-md p-2 cursor-pointer hover:bg-gray-300 duration-200 ease-in-out text-blue-900 text-sm items-center gap-x-4 mt-8',
                  "rounded-md px-3 py-2 text-sm font-medium"
                )` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-blue-500 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </section>  
    </div>
  )
}
