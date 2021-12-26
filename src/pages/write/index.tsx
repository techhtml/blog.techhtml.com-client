import { NextPage } from "next";
import { useState } from "react";

const WritePage:NextPage = () => {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  return (
    <div>
      <h1>글 작성</h1>
      <form>
        <input type="text" onChange={handleTitleChange} value={title} />
        <textarea onChange={handleTextAreaChange} value={post} />
        <button type="submit">발행하기</button>
      </form>
    </div>
  )
}

export default WritePage;