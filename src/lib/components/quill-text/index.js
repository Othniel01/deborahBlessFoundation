import React, { useEffect, forwardRef, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Use the full Quill theme for styling

const QuillText = forwardRef(({ initialValue = null, ...props }, ref) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      // Initialize Quill editor
      const editor = new Quill("#editor", {
        theme: "snow",
        placeholder: "Write your content here...",
        ...props,
      });

      // Set the initial value
      if (initialValue) {
        editor.setContents(initialValue);
      }

      // Forward ref for parent access
      if (ref) {
        if (typeof ref === "function") {
          ref(editor);
        } else {
          ref.current = editor;
        }
      }

      editorRef.current = editor;
    }
  }, [initialValue, props, ref]);

  return <div id="editor" style={{ height: "300px" }} />;
});

QuillText.displayName = "QuillText";

export default QuillText;
