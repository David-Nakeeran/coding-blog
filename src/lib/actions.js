"use server";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePost(id) {
  await db.query(`DELETE FROM posts WHERE id = $1`, [id]);
  revalidatePath("/posts");
  redirect("/posts");
}
