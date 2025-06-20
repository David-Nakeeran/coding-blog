"use client";
import { createComment } from "@/lib/actions";

export default function CommentForm({ postId }) {
  const createCommentWithId = createComment.bind(null, postId);
  return (
    <form action={createCommentWithId}>
      <fieldset>
        <legend>Post a Comment</legend>
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          required
        ></input>
        <label htmlFor="comment">Comment:</label>
        <textarea name="comment" placeholder="Enter your comment" required />
      </fieldset>
      <button type="submit">Add Comment</button>
    </form>
  );
}
