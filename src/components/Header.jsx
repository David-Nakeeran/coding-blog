import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/images/logo.png";

export default function Header() {
  return (
    <header>
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="coding brackets" width={50} />
          <h1>Coding Blog</h1>
        </Link>
      </div>
      <nav>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
      </nav>
    </header>
  );
}
