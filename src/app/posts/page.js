import { db } from "@/utils/dbConnection";
import Image from "next/image";

export default async function PostsPage() {
  async function getPosts() {
    try {
      const posts = await db.query(`SELECT * FROM posts`);
      return posts.rows;
    } catch (error) {
      console.error(error.message);
    }
  }

  const posts = (await getPosts()) || [];
  const postElements = posts.map((element) => {
    return (
      <article key={element.id}>
        <h3>{element.title}</h3>
        {/* <Image src={element.img_url} alt="coding brackets" width={250} /> */}
        <p>{element.content}</p>
      </article>
    );
  });
  return <section>{postElements}</section>;
}
