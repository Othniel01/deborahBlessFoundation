"use client";

import React, { useState } from "react";
import Button from "../button";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";

interface MainLayoutProps {
  children?: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState<null | "about" | "donate">(null);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleSubmenuOpen = (menu: "about" | "donate") => setSubmenu(menu);
  const handleBackToMain = () => setSubmenu(null);

  return (
    <div className="w-full h-screen">
      {/* Nav Bar */}
      <div className="nav fixed bg-white 3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] flex z-50 flex-row justify-between shadow-md items-center h-[70px] w-full">
        <div className="flex gap-2 items-center">
          <Image
            alt="db-logo"
            className="w-[34px]"
            src="/image/db-logo.png"
            width={1700}
            height={1700}
          />
          <p className="text-[13px] leading-[1.2]">
            The Deborah <br /> Bless Foundation
          </p>
        </div>
        <div className="hidden min-[1095px]:flex flex-row items-center gap-4">
          {/* Links for larger screens */}
          <div className="w-[100px] text-sm flex justify-center">
            <Link href="/">Home</Link>
          </div>
          <div className="w-[100px] text-sm ">
            <div className="relative flex justify-center w-full main-link">
              <Link href="/about">About us</Link>
              <div className="absolute flex justify-center items-end pb-2 bg-white h-[45px] w-full sub-link top-[20px]">
                <Link href="/team">Team</Link>
              </div>
            </div>
          </div>
          <div className="w-[100px] text-sm flex justify-center">
            <Link href="/impact">Our Impact</Link>
          </div>
          <div className="w-[100px] text-sm ">
            <div className="relative flex justify-center w-full main-link">
              <Link href="/donate">Donate</Link>
              <div className="absolute flex justify-center items-end pb-2 bg-white h-[45px] w-full sub-link top-[20px]">
                <Link href="/partner">Partner</Link>
              </div>
            </div>
          </div>
          <div className="w-[100px] text-sm flex justify-center">
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        <div className="min-[1095px]:hidden  bg-white block">
          <Hamburger toggled={menuOpen} toggle={handleMenuToggle} size={28} />
        </div>

        <Button className="btn-gradient hidden min-[1095px]:block">
          Contact us
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white  flex flex-col z-40">
          {/* Main Menu */}
          <div
            className={`flex flex-col items-center justify-center text-black w-full h-full transition-transform duration-300 ${
              submenu ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <Link href="/" onClick={handleMenuToggle}>
              <p className="text-xl mb-4">Home</p>
            </Link>
            <p
              onClick={() => handleSubmenuOpen("about")}
              className="text-xl mb-4 cursor-pointer"
            >
              About Us
            </p>
            <Link href="/impact" onClick={handleMenuToggle}>
              <p className="text-xl mb-4">Our Impact</p>
            </Link>
            <p
              onClick={() => handleSubmenuOpen("donate")}
              className="text-xl mb-4 cursor-pointer"
            >
              Donate
            </p>
            <Link href="/blog" onClick={handleMenuToggle}>
              <p className="text-xl">Blog</p>
            </Link>
          </div>

          {/* Submenu for About Us */}
          {submenu === "about" && (
            <div className="absolute top-0 left-0 w-full h-full bg-white  flex flex-col items-center justify-center text-black transition-transform duration-300">
              <button
                onClick={handleBackToMain}
                className="absolute top-[6rem] left-[2rem] text-2xl"
              >
                ←
              </button>
              <Link href="/about" onClick={handleMenuToggle}>
                <p className="text-xl mb-4">About Us</p>
              </Link>
              <Link href="/team" onClick={handleMenuToggle}>
                <p className="text-xl">Team</p>
              </Link>
            </div>
          )}

          {/* Submenu for Donate */}
          {submenu === "donate" && (
            <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center text-black transition-transform duration-300">
              <button
                onClick={handleBackToMain}
                className="absolute top-[6rem] left-[2rem] text-2xl"
              >
                ←
              </button>
              <Link href="/donate" onClick={handleMenuToggle}>
                <p className="text-xl mb-4">Donate</p>
              </Link>
              <Link href="/partner" onClick={handleMenuToggle}>
                <p className="text-xl">Partner</p>
              </Link>
            </div>
          )}
        </div>
      )}
      <div className="h-[70px]"></div>
      {children}

      <div
        className="w-full relative flex flex-col 
         min-[870px]:h-[500px] sm:h-[700px] h-[980px]  min-[507px]:mt-10 mt-10 bg-[#131313]"
      >
        <div className=" w-full pt-[6rem]   3xl:pr-[18rem] 3xl:pl-[18rem]   min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem]  h-fit pb-16">
          <div
            className="flex gap-20  
              min-[870px]:gap-0  justify-between 
               min-[870px]:items-start items-center
            min-[870px]:flex-row flex-col"
          >
            <div className="text-white">
              <h1
                className="text-3xl w-[full]
                min-[982px]:w-[450px]"
              >
                The Deborah Bless Foundation
              </h1>
              <p
                className="mt-4  w-[280px]  
                min-[1066px]:w-[320px] min-[1132px]:w-[450px]"
              >
                We believe every child should have a chance at a good life, good
                food and overall a great future tha
              </p>
              <Button className="mt-12 w-[142px] h-[49px] btn-gradient">
                Donate Now
              </Button>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-20
              min-[1066px]:gap-40"
            >
              <div className=" flex w-[99px] flex-col gap-4 text-white">
                <h1 className="text-lg font-semibold">Short Links</h1>
                <Link href="/about">
                  <h1 className="text-base font-normal">About us</h1>
                </Link>
                <Link href="/impact">
                  <h1 className="text-base  font-normal">Impact</h1>
                </Link>

                <h1 className="text-base font-normal">Latest News</h1>
              </div>

              <div className="flex flex-col gap-2 text-white">
                <h1 className="text-lg font-semibold">Contact us</h1>
                <p className="flex font-normal flex-row gap-3">
                  <object
                    className="w-[24px]"
                    type="image/svg+xml"
                    data={"/svg/location.svg"}
                  ></object>
                  1st Avenue, gwarinpa
                </p>
                <p className="flex mt-2 font-normal flex-row gap-3">
                  <object
                    className="w-[24px]"
                    type="image/svg+xml"
                    data={"/svg/mail.svg"}
                  ></object>
                  Hello@DeborahBlessFoundation
                </p>
                <p className="flex mt-2 font-normal flex-row gap-3">
                  <object
                    className="w-[24px]"
                    type="image/svg+xml"
                    data={"/svg/phone.svg"}
                  ></object>
                  +1200 456 897
                </p>
              </div>
            </div>
          </div>
          <hr className="h-[1px] left-0 absolute min-[1132px]:mt-28 mt-[6rem] w-full bg-white" />

          <div className="flex 3xl:pr-[18rem] 3xl:pl-[18rem] sm:flex-row flex-col min-[1536px]:pl-[14rem] min-[1536px]:pr-[14rem] min-[1332px]:pl-[8rem] min-[1332px]:pr-[8rem] pl-[2rem] pr-[2rem] left-0 bottom-5 w-full absolute items-center justify-between">
            <div className="flex text-xs text-white items-center gap-4">
              <p>Terms of use</p>|<p>Privacy policy</p>
            </div>
            <p className="text-white text-xs">
              Copyright 2022 Deborah Bless Foundation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
