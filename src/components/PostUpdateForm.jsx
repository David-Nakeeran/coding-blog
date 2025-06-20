"use client";
import { updatePost } from "@/lib/actions";

export default function PostUpdateForm({ post }) {
  const updatePostWithId = updatePost.bind(null, post.id);
  return (
    <form action={updatePostWithId}>
      <fieldset>
        <legend>Post a Comment</legend>
        <label htmlFor="title">Post title:</label>
        <input
          name="title"
          type="text"
          defaultValue={post.title}
          required
        ></input>
        <label htmlFor="content">Content:</label>
        <textarea name="content" defaultValue={post.content} required />
      </fieldset>
      <button type="submit">Update Post</button>
    </form>
  );
}
