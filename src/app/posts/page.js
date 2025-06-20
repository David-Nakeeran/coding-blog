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
      <article
        className="flex flex-col justify-center items-center gap-2 mb-10 border-b border-[#b388ff]"
        key={element.id}
      >
        <h3 className="font-semibold text-xl">{element.title}</h3>
        <Image
          src={element.img_url}
          alt="coding brackets"
          width={200}
          height={200}
        />
        <p className="mb-5">{element.content}</p>
        <Link
          className="text-[#ffffff] bg-[#a774fd] font-medium mb-8 border border-[#a774fd] p-4 rounded-md hover:bg-[#9d68f9]"
          href={`/posts/${element.id}`}
        >
          Read More
        </Link>
      </article>
    );
  });

  return (
    <section className="mb-6">
      <div className="flex w-full justify-center gap-2 text-[#E0C074] mb-6 z-1">
        <Link
          className="hover:text-[#F1D99C] transition-colors duration-200 hover:border-b border-[#FFF2C5] cursor-pointer"
          href={"/posts?sort=asc"}
        >
          Sort by latest
        </Link>
        <Link
          className="hover:text-[#F1D99C] transition-colors duration-200 hover:border-b border-[#FFF2C5] cursor-pointer"
          href={"/posts?sort=desc"}
        >
          Sort by oldest
        </Link>
        <Link
          className="cursor-pointer hover:text-[#F1D99C] transition-colors duration-200 hover:border-b border-[#FFF2C5]"
          href={`/posts`}
        >
          Reset
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {postElements}
      </div>
    </section>
  );
}
