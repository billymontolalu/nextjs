"use client";
import Link from "next/link";
import { useState } from "react";

export default function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  let submit = async (e) => {
    e.preventDefault();
    let res = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="m-5">
      <h1>Add New Post</h1>
      <form onSubmit={submit}>
        <label className="block text-sm font-medium text-slate-700">Title</label>
        <input
          className="border"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="block text-sm font-medium text-slate-700">Content</label>
        <input
          className="border block mb-2"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white px-4 py-1 rounded-full"
          type="submit"
        >
          Save
        </button>&nbsp;
        <Link
          href="/post"
          className="bg-sky-500 hover:bg-sky-700 text-white px-4 py-1.5 rounded-full"
        >
          Back
        </Link>
      </form>
    </div>
  );
}
