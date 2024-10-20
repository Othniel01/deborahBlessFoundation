"use client";

import React from "react";
import Button from "../button";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";

interface MainLayoutProps {
  children?: React.ReactNode;
}

// bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/60

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full h-screen">
      <div className="nav  fixed bg-white  pl-10 pr-10  min-[803px]:pl-32 min-[803px]:pr-32 min-[1095px]:pl-32 min-[1095px]:pr-32  min-[1567px]:pl-20 min-[1567px]:pr-20 flex z-30 flex-row justify-between min-[1095px]:justify-around shadow-[6px_6px_29px_-6px_rgba(0,0,0,0.1)]  items-center  h-[70px] w-full">
        <div className="">
          <h1>Deborah</h1>
        </div>
        <div className="text-sm hidden min-[1095px]:flex flex-row items-center gap-8">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About us</p>
          </Link>
          <p>Our Impact</p>
          <p>Donate</p>
          <p>Partner with us</p>
          <p>Blog</p>
        </div>
        <div className="">
          <div className="min-[1095px]:hidden block">
            <Hamburger size={28} direction="right" />
          </div>

          <Button
            className="btn-gradient hidden 
          min-[1095px]:block "
          >
            Contact us
          </Button>
        </div>
      </div>
      <div className="h-[100px]"></div>
      {children}

      <div
        className="w-full relative flex flex-col 
         min-[870px]:h-[500px] sm:h-[700px] h-[980px]  min-[507px]:mt-40 mt-20 bg-[#131313]"
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
                <h1 className="text-base font-normal">About us</h1>
                <h1 className="text-base  font-normal">Donate</h1>
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
