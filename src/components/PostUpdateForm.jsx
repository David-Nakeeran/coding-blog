"use client";
import { updatePost } from "@/lib/actions";

export default function PostUpdateForm({ post }) {
  const updatePostWithId = updatePost.bind(null, post.id);
  return (
    <form
      action={updatePostWithId}
      className="w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6"
    >
      <fieldset className="flex flex-col border border-[#b388ff] rounded-lg p-6 mb-4">
        <legend className="text-[#FFF2C5] text-xl font-bold px-2">
          Update a Post
        </legend>
        <label htmlFor="title" className="text-[#a9a9b3] mb-1">
          Post title:
        </label>
        <input
          name="title"
          type="text"
          defaultValue={post.title}
          className="bg-[#2a2a3c] text-[#ededed] border border-[#b388ff] rounded-lg p-3"
          required
        ></input>
        <label htmlFor="content" className="text-[#a9a9b3] mt-4 mb-1">
          Content:
        </label>
        <textarea
          name="content"
          defaultValue={post.content}
          className="bg-[#2a2a3c] text-[#ededed] border border-[#b388ff] rounded-lg p-3 mb-8"
          required
        />
        <button
          type="submit"
          className="text-[#ffffff] bg-[#a774fd] font-medium mb-8 border border-[#a774fd] p-4 rounded-md hover:bg-[#9d68f9] cursor-pointer"
        >
          Update Post
        </button>
      </fieldset>
    </form>
  );
}
