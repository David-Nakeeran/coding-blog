import { db } from "@/utils/dbConnection";
import Link from "next/link";
import Image from "next/image";

export default async function PostsPage({ searchParams }) {
  const queryString = await searchParams;
  async function getPosts() {
    try {
      const posts = await db.query(`SELECT * FROM posts`);
      return posts.rows;
    } catch (error) {
      console.error(error.message);
    }
  }
  const posts = (await getPosts()) || [];

  switch (queryString.sort) {
    case "asc":
      posts.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });
      break;
    case "desc":
      posts.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      break;
  }
  const postElements = posts.map((element) => {
    return (
      <article key={element.id}>
        <h3>{element.title}</h3>
        {/* <Image src={element.img_url} alt="coding brackets" width={250} /> */}
        <p>{element.content}</p>
        <Link href={`/posts/${element.id}`}>Read More</Link>
      </article>
    );
  });

  return (
    <section>
      <div>
        <Link href={"/posts?sort=asc"}>Sort by latest</Link>
        <Link href={"/posts?sort=desc"}>Sort by oldest</Link>
        <Link href={`/posts`}>Reset</Link>
      </div>
      {postElements}
    </section>
  );
}
