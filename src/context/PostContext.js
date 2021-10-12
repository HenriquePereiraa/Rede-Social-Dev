import React, { createContext, useState } from "react";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [markdown, setMarkdown] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeMarkdown = (event) => {
    setMarkdown(event.currentTarget.value)
  }


  return (
    <PostContext.Provider
      value={{
        image,
        setImage,
        title,
        setTitle: handleChangeTitle,
        tags,
        setTags,
        markdown,
        setMarkdown: handleChangeMarkdown,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
