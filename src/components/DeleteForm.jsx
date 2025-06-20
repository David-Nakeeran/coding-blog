"use client";
import { deletePost } from "@/lib/actions";

export default function DeleteForm({ postId }) {
  // bind - not setting `this`, so first arg is null
  // also don't need to grab the formdata in deletePost server function
  const deletePostWithId = deletePost.bind(null, postId);
  return (
    <form action={deletePostWithId}>
      <button type="submit">Delete Post</button>
    </form>
  );
}
