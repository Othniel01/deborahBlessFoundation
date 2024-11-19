// "use client";

// import { useState } from "react";
// import { getDatabase, ref, push } from "firebase/database";
// import Image from "next/image";
// import { app } from "../firebase-config"; // Import from the shared config file

// // Get the Firebase database reference using the shared app initialization
// const db = getDatabase(app);

// export default function NewBlog() {
//   const [imageURL, setImageURL] = useState("");
//   const [date, setDate] = useState("");
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState(""); // New state for content
//   const [error, setError] = useState("");

//   const isValidImageURL = (url) => /\.(jpeg|jpg|gif|png|webp|svg)$/.test(url);

//   const handlePublish = async () => {
//     try {
//       if (!content) {
//         throw new Error("No content to publish.");
//       }

//       // Push to Firebase
//       await push(ref(db, "blogs"), {
//         imageURL,
//         date,
//         title,
//         content, // Store plain text content
//       });

//       window.location.reload();
//     } catch (err) {
//       console.error("Publish error: ", err);
//       setError("Failed to publish the blog.");
//     }
//   };

//   return (
//     <div className="w-full">
//       <button
//         className="bg-black text-white rounded-md text-sm h-[40px] w-[120px]"
//         onClick={handlePublish}
//       >
//         Publish
//       </button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}

//       <div className="mt-5 pl-5 bg-white pr-5 pt-5 w-[840px] h-fit pb-5 rounded-md shadow-md">
//         <p className="text-sm font-semibold">Image URL</p>
//         <hr className="w-full h-[1px] mt-5 bg-gray-400" />
//         <input
//           type="text"
//           value={imageURL}
//           onChange={(e) => setImageURL(e.target.value)}
//           placeholder="Image URL"
//           className="w-full text-sm border-none outline-none mt-2 p-2 border"
//         />
//         {imageURL && isValidImageURL(imageURL) && (
//           <Image
//             src={imageURL}
//             className="mt-2"
//             alt="Preview"
//             width={400}
//             height={200}
//           />
//         )}
//       </div>

//       <div className="mt-5 pl-5 bg-white pr-5 pt-5 w-[840px] h-fit pb-5 rounded-md shadow-md">
//         <p className="text-sm font-semibold">Date</p>
//         <hr className="w-full h-[1px] mt-5 bg-gray-400" />
//         <input
//           type="text"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           placeholder="Month, Day Year"
//           className="w-full text-sm border-none outline-none mt-2 p-2 border"
//         />
//       </div>

//       <div className="mt-5 pl-5 bg-white pr-5 pt-5 w-[840px] h-fit pb-5 rounded-md shadow-md">
//         <p className="text-sm font-semibold">Title</p>
//         <hr className="w-full h-[1px] mt-5 bg-gray-400" />
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Title here..."
//           className="w-full text-sm border-none outline-none mt-2 p-2 border"
//         />
//       </div>

//       <div className="mt-5 pl-5 bg-white pr-5 pt-5 w-[840px] h-fit pb-5 rounded-md shadow-md">
//         <p className="text-sm font-semibold">Blog Content</p>
//         <hr className="w-full h-[1px] mt-5 bg-gray-400" />

//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Write content here..."
//           className="w-full h-40 text-sm border-none outline-none mt-2 p-2 border resize-none"
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { getDatabase, ref, push } from "firebase/database";
import Image from "next/image";
import { app } from "../../../../firebase-config"; // Import from the shared config file
import QuillText from "../quill-text/index";

// Get the Firebase database reference using the shared app initialization
const db = getDatabase(app);

export default function NewBlog({ onBack }) {
  const [imageURL, setImageURL] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [blogType, setBlogType] = useState("Normal Blog");
  const quillRef = useRef(null); // Ref for accessing Quill editor

  const isValidImageURL = (url) => /\.(jpeg|jpg|gif|png|webp|svg)$/.test(url);

  const handlePublish = async () => {
    try {
      const quill = quillRef.current;
      if (!quill) throw new Error("Quill editor is not available.");

      const deltaContent = quill.getContents(); // Quill delta (JSON format)
      const htmlContent = quill.root.innerHTML; // HTML format

      if (deltaContent.length() === 0)
        throw new Error("No content to publish.");

      if (!title.trim() || !date.trim() || !imageURL.trim()) {
        throw new Error("All fields (title, date, image URL) are required.");
      }

      if (!isValidImageURL(imageURL)) {
        throw new Error("Invalid image URL format.");
      }

      // Push to Firebase
      await push(ref(db, "blogs"), {
        imageURL,
        date,
        title,
        content: {
          delta: deltaContent,
          html: htmlContent,
        },
        blogType,
      });

      window.location.reload();
    } catch (err) {
      console.error("Publish error: ", err);
      setError(err.message || "Failed to publish the blog.");
    }
  };

  return (
    <div className="w-full p-1 min-[924px]:p-5">
      {/* Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          className="bg-gray-700 text-white rounded-md text-sm h-[40px] w-[120px]"
          onClick={onBack} // Trigger onBack to go back
        >
          Back
        </button>
        <button
          className="bg-black text-white rounded-md text-sm h-[40px] w-[120px]"
          onClick={handlePublish}
        >
          Publish
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div
        className="mt-5 
        
        pl-5 
        
        
        bg-white 
        
        pr-5 pt-5 
      
      w-full
      min-[924px]:w-[840px] h-fit pb-5 rounded-md shadow-md"
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
        <p className="text-sm font-semibold">Blog Type</p>
        <hr className="w-full h-[1px] mt-5 bg-gray-400" />

        {/* Radio buttons for selecting blog type */}
        <div className="flex gap-4 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="blogType"
              value="Normal Blog"
              checked={blogType === "Normal Blog"}
              onChange={() => setBlogType("Normal Blog")}
              className="mr-2"
            />
            Normal Blog
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="blogType"
              value="Impact Blog"
              checked={blogType === "Impact Blog"}
              onChange={() => setBlogType("Impact Blog")}
              className="mr-2"
            />
            Impact Blog
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="blogType"
              value="Highlight Blog"
              checked={blogType === "Highlight Blog"}
              onChange={() => setBlogType("Highlight Blog")}
              className="mr-2"
            />
            Highlight Blog
          </label>
        </div>
      </div>

      <div
        className="mt-5 pl-5 bg-white pr-5 pt-5 
      
      
      w-full
      min-[924px]:w-[840px]
      
      
      h-fit pb-5 rounded-md shadow-md"
      >
        <p className="text-sm font-semibold">Blog Content</p>
        <hr className="w-full h-[1px] mt-5 bg-gray-400" />

        {/* Quill Text Editor */}
        <QuillText ref={quillRef} />
      </div>
    </div>
  );
}
