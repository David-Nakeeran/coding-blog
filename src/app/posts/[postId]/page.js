import { db } from "@/utils/dbConnection";
import Link from "next/link";
export default async function PostIdPage({ params }) {
  const postIdParams = await params.postId;

  async function getPost() {
    try {
      const post = await db.query(
        `SELECT  posts.id, posts.title, posts.img_url, posts.content, comments.id AS comment_id, comments.username, comments.comment
        FROM posts
        LEFT JOIN comments ON posts.id = comments.post_id
        WHERE posts.id = $1
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
      <article key={comment_id}>
        <h3>{username}</h3>
        <p>{comment}</p>
      </article>
    );
  });

  return (
    <>
      <div key={posts[0].id}>
        <article>
          <h3>{posts[0].title}</h3>
          {/* <Image src={element.img_url} alt="coding brackets" width={250} /> */}
          <p>{posts[0].content}</p>
        </article>
        <div>
          <Link href={`/posts/${postIdParams}/delete`}>Delete Post!</Link>
        </div>
      </div>
      <div>{commentElements}</div>
    </>
  );
}
