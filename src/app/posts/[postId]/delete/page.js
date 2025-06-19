import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePost({ params }) {
  const postId = params.postId;

  async function handleDeletePost() {
    "use server";
    await db.query(`DELETE FROM posts WHERE id = $1`, [postId]);
    revalidatePath("/posts");
    return redirect("/posts");
  }

  return (
    <div>
      <p>Please confirm post deletion</p>
      <form action={handleDeletePost}>
        <button type="submit">Delete Post</button>
      </form>
    </div>
  );
}
