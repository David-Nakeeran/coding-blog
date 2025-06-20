"use server";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePost(id) {
  await db.query(`DELETE FROM posts WHERE id = $1`, [id]);
  revalidatePath("/posts");
  redirect("/posts");
}

export async function createComment(id, formData) {
  const commentData = {
    username: formData.get("username"),
    comment: formData.get("comment"),
  };

  await db.query(
    `INSERT INTO comments (post_id, username, comment) Values($1, $2, $3)`,
    [id, commentData.username, commentData.comment]
  );
  revalidatePath(`/posts/${id}`);
  redirect(`/posts/${id}`);
}

export async function updatePost(id, formData) {
  const postData = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  await db.query(`UPDATE posts SET title = $1, content = $2 WHERE id = $3`, [
    postData.title,
    postData.content,
    id,
  ]);
  revalidatePath(`/posts/${id}`);
  redirect(`/posts/${id}`);
}
