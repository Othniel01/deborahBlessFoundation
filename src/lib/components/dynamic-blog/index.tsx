"use client";

import { useState, useEffect, useRef } from "react";
import { getDatabase, ref, get, set, remove } from "firebase/database";
import Image from "next/image";
import QuillText from "../quill-text/index";
import Quill from "quill";
import { app } from "../../../../firebase-config";

const db = getDatabase(app);

export default function DynamicBlog({
  blogId,
  onBack,
}: {
  blogId: string;
  onBack: () => void;
}) {
  const [imageURL, setImageURL] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogRef = ref(db, `blogs/${blogId}`);
        const snapshot = await get(blogRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setImageURL(data.imageURL);
          setDate(data.date);
          setTitle(data.title);

          // Load the delta content into Quill editor
          if (quillRef.current && data.content?.delta) {
            quillRef.current.setContents(data.content.delta);
          }
        } else {
          setError("Blog not found.");
        }
      } catch (err) {
        console.error("Error fetching blog data: ", err);
        setError("Failed to fetch blog data.");
      }
    };

    if (blogId) {
      fetchBlogData();
    }
  }, [blogId]);

  const handlePublish = async () => {
    try {
      const quill = quillRef.current;
      if (!quill) {
        throw new Error("Quill editor is not available.");
      }

      const deltaContent = quill.getContents();
      const htmlContent = quill.root.innerHTML;

      await set(ref(db, `blogs/${blogId}`), {
        imageURL,
        date,
        title,
        content: {
          delta: deltaContent,
          html: htmlContent,
        },
      });

      window.location.reload();
    } catch (err) {
      console.error("Publish error: ", err);
      setError("Failed to publish the blog.");
    }
  };

  const handleDelete = async () => {
    try {
      await remove(ref(db, `blogs/${blogId}`));
      onBack(); // Navigate back to Hold after deleting
    } catch (err) {
      console.error("Delete error: ", err);
      setError("Failed to delete the blog.");
    }
  };

  const isValidImageURL = (url: string) =>
    /\.(jpeg|jpg|gif|png|webp|svg)$/.test(url);

  return (
    <div className="w-full h-full">
      <button
        className="bg-gray-700 text-white rounded-md text-sm h-[40px] w-[120px] mb-4"
        onClick={onBack} // Trigger onBack to go back to Hold
      >
        Back
      </button>
      <button
        className="bg-black text-white rounded-md text-sm h-[40px] w-[120px] ml-2"
        onClick={handlePublish}
      >
        Publish
      </button>
      <button
        className="bg-red-500 text-white rounded-md text-sm h-[40px] w-[120px] ml-4"
        onClick={handleDelete}
      >
        Delete Blog
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div
        className="mt-5 pl-5 bg-white pr-5 pt-5 
      
      w-full
      min-[924px]:w-[840px]
      
      h-fit pb-5 rounded-md shadow-md"
      >
        <p className="text-sm font-semibold">Image URL</p>
        <hr className="w-full h-[1px] mt-5 bg-gray-400" />
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder="Image URL"
          className="w-full text-sm border-none outline-none mt-2 p-2 border"
        />
        {imageURL && isValidImageURL(imageURL) && (
          <Image
            src={imageURL}
            className="mt-2"
            alt="Preview"
            width={400}
            height={200}
          />
        )}
      </div>

      <div
        className="mt-5 pl-5 bg-white pr-5 pt-5 
      
       w-full
      min-[924px]:w-[840px]
      
      h-fit pb-5 rounded-md shadow-md"
      >
        <p className="text-sm font-semibold">Date</p>
        <hr className="w-full h-[1px] mt-5 bg-gray-400" />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Month, Day Year"
          className="w-full text-sm border-none outline-none mt-2 p-2 border"
        />
      </div>

      <div
        className="mt-5 pl-5 bg-white pr-5 pt-5 
      
      
     w-full
      min-[924px]:w-[840px]
      
      h-fit pb-5 rounded-md shadow-md"
      >
        <p className="text-sm font-semibold">Title</p>
        <hr className="w-full h-[1px] mt-5 bg-gray-400" />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title here..."
          className="w-full text-sm border-none outline-none mt-2 p-2 border"
        />
      </div>

      <div
        className="mt-5 pl-5 bg-white pr-5 pt-5 
      
       w-full
      min-[924px]:w-[840px]
      
      h-fit pb-5 rounded-md shadow-md"
      >
        <p className="text-sm font-semibold">Blog Content</p>

        {/* Quill Text Editor */}
        <QuillText ref={quillRef} />
      </div>
    </div>
  );
}
