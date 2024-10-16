"use client";

import React from "react";
import Button from "../button";
import { Sling as Hamburger } from "hamburger-react";

interface MainLayoutProps {
  children?: React.ReactNode;
}

// bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/60

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full h-screen">
      <div className="nav  fixed bg-white pl-10 pr-10  min-[803px]:pl-32 min-[803px]:pr-32 min-[1095px]:pl-32 min-[1095px]:pr-32  min-[1567px]:pl-20 min-[1567px]:pr-20 flex z-30 flex-row justify-between min-[1095px]:justify-around  items-center  h-[70px] w-full">
        <div className="">
          <h1>Deborah</h1>
        </div>
        <div className="text-sm hidden min-[1095px]:flex flex-row items-center gap-8">
          <p>Home</p>
          <p>About us</p>
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
    </div>
  );
}

export default MainLayout;
