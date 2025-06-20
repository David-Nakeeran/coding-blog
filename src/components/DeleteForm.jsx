"use client";
import { deletePost } from "@/lib/actions";

export default function DeleteForm({ postId }) {
  // bind - not setting `this`, so first arg is null
  // also don't need to grab the formdata in deletePost server function
  const deletePostWithId = deletePost.bind(null, postId);
  return (
    <form action={deletePostWithId}>
      <button
        className="text-[#ffffff] bg-[#a774fd] font-medium mb-8 border border-[#a774fd] p-4 rounded-md hover:bg-[#9d68f9] cursor-pointer"
        type="submit"
      >
        Delete Post
      </button>
    </form>
  );
}
