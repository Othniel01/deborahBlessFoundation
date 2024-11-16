"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/components/firebase-config";
import NewBlog from "@/lib/components/new-blog/index";
import Link from "next/link";
import Hold from "@/lib/components/blog-dashboard";

import DynamicBlog from "@/lib/components/dynamic-blog"; // Import DynamicBlog component

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [showNewBlog, setShowNewBlog] = useState(false); // State to toggle between Hold and NewBlog
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null); // Store the selected blog id
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          router.push("/admin");
        }
      });

      return () => unsubscribe();
    }
  }, [isMounted, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleNewBlogClick = () => {
    setSelectedBlogId(null); // Reset selected blog when creating a new blog
    setShowNewBlog(true); // Show NewBlog component
  };

  const handleBlogClick = async (blogId: string) => {
    setShowNewBlog(false); // Hide NewBlog and show the DynamicBlog
    setSelectedBlogId(blogId); // Store the selected blogId
  };

  if (!isMounted) {
    return null;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="w-full bg-[#f7fafc] h-fit pb-10">
      <div className="w-full bg-white fixed z-50 h-[70px] shadow-md"></div>
      <div className="flex w-full flex-row">
        <div className="bg-white z-30 left-0 top-0 fixed h-[100vh] pl-[1rem] pr-[1rem] pt-[8rem] w-[250px]">
          <Link
            className="text-sm hover:bg-[#e8ebec] rounded-md h-[40px] pl-3 flex gap-2 items-center"
            href="/dashboard"
          >
            <object
              className="w-[20px]"
              type="image/svg+xml"
              data={"/svg/message.svg"}
            ></object>
            <p>Blogs</p>
          </Link>

          <button
            onClick={handleLogout}
            className="text-sm hover:bg-[#e8ebec] rounded-md h-[40px] w-full pl-3 flex gap-2 items-center mt-4"
          >
            <object
              className="w-[20px]"
              type="image/svg+xml"
              data={"/svg/logout.svg"}
            ></object>
            Logout
          </button>
        </div>
        <div className="bg-white h-[100vh] w-[250px]"></div>

        <div className="p-10 pl-16 pt-28 w-full relative">
          {/* Render Hold, NewBlog, or DynamicBlog based on state */}
          {!selectedBlogId ? (
            !showNewBlog ? (
              <Hold
                onNewBlogClick={handleNewBlogClick}
                onBlogClick={handleBlogClick}
              />
            ) : (
              <NewBlog onBack={() => setShowNewBlog(false)} />
            )
          ) : (
            <DynamicBlog
              blogId={selectedBlogId}
              onBack={() => setSelectedBlogId(null)} // Set back to null to render Hold
            /> // Show the DynamicBlog with the selected blogId
          )}
        </div>
      </div>
    </div>
  );
}
