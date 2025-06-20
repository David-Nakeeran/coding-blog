import { db } from "@/utils/dbConnection";
import Link from "next/link";
import Image from "next/image";
import DeleteForm from "@/components/DeleteForm";
import CommentForm from "@/components/CommentForm";
export default async function PostIdPage({ params }) {
  const postIdParams = await params.postId;

  async function getPost() {
    try {
      const post = await db.query(
        `SELECT  posts.id, posts.title, posts.img_url, posts.content, comments.id AS comment_id, comments.username, comments.comment
        FROM posts
        LEFT JOIN comments ON posts.id = comments.post_id
        WHERE posts.id = $1
        ORDER BY comments.created_at DESC
        `,
        [postIdParams]
      );
      return post.rows;
    } catch (error) {
      console.error(error.message);
    }
  }
  const posts = (await getPost()) || [];

  const commentElements = posts.map(({ comment_id, username, comment }) => {
    console.log(comment);
    return (
      <article key={comment_id} className="border-b border-[#b388ff] mb-10">
        <h3>Username: {username}</h3>
        <p>Comment: {comment}</p>
      </article>
    );
  });

  const id = parseInt(posts[0].id);

  return (
    <section className="flex flex-col justify-center items-center w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6">
      <div
        key={posts[0].id}
        className="flex flex-col justify-center items-center"
      >
        <article className="flex flex-col justify-center items-center">
          <h3 className="font-semibold text-xl mb-8">{posts[0].title}</h3>
          <Image
            src={posts[0].img_url}
            alt="coding brackets"
            width={600}
            height={400}
            className="mb-6"
          />
          <p className="mb-3">{posts[0].content}</p>
        </article>
        <div className="flex gap-7 mb-8">
          <DeleteForm postId={id} />
          <Link
            className="text-[#ffffff] bg-[#a774fd] font-medium mb-8 border border-[#a774fd] p-4 rounded-md hover:bg-[#9d68f9]"
            href={`/posts/${id}/update`}
          >
            Update Post
          </Link>
        </div>
      </div>
      <div className="mb-10">
        <CommentForm postId={id} />
      </div>
      <div className="flex flex-col justify-center items-center mb-8">
        {commentElements}
      </div>
    </section>
  );
}
