"use client";
import { createComment } from "@/lib/actions";

export default function CommentForm({ postId }) {
  const createCommentWithId = createComment.bind(null, postId);
  return (
    <form action={createCommentWithId}>
      <fieldset className="flex flex-col border border-[#b388ff] rounded-lg p-6 mb-4">
        <legend className="text-[#FFF2C5] text-xl font-bold px-2">
          Post a Comment
        </legend>
        <label htmlFor="username" className="text-[#a9a9b3] mb-1">
          Username:
        </label>
        <input
          className="bg-[#2a2a3c] text-[#ededed] border border-[#b388ff] rounded-lg p-3"
          name="username"
          type="text"
          placeholder="Enter your username"
          required
        ></input>
        <label htmlFor="comment" className="text-[#a9a9b3] mt-4 mb-1">
          Comment:
        </label>
        <textarea
          name="comment"
          placeholder="Enter your comment"
          className="bg-[#2a2a3c] text-[#ededed] border border-[#b388ff] rounded-lg p-3 mb-8"
          required
        />
        <button
          type="submit"
          className="text-[#ffffff] bg-[#a774fd] font-medium mb-8 border border-[#a774fd] p-4 rounded-md hover:bg-[#9d68f9] cursor-pointer"
        >
          Add Comment
        </button>
      </fieldset>
    </form>
  );
}
