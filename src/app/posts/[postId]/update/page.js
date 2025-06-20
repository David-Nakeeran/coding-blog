import { db } from "@/utils/dbConnection";
import Link from "next/link";
import PostUpdateForm from "@/components/PostUpdateForm";
export default async function PostUpdatePage({ params }) {
  const postIdParams = await params.postId;

  async function getPost() {
    try {
      const post = await db.query(
        `SELECT * FROM posts
        WHERE posts.id = $1
        `,
        [postIdParams]
      );
      return post.rows[0];
    } catch (error) {
      console.error(error.message);
    }
  }
  const post = (await getPost()) || [];

  return (
    <>
      <PostUpdateForm post={post} />
    </>
  );
}
