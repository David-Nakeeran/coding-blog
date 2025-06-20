import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/images/logo.png";

export default function Header() {
  return (
    <header className="col-span-full row-start-1 row-end-2 w-full flex justify-between items-center text-[#E0C074] mb-8">
      <div>
        <Link className="flex justify-center items-center" href={"/"}>
          <Image src={logo} alt="coding brackets" width={50} />
          <h1 className="font-semibold hover:border-b border-[#FFF2C5]">
            Coding Blog
          </h1>
        </Link>
      </div>
      <nav className="flex gap-5">
        <Link
          className="font-semibold hover:text-[#F1D99C] transition-colors duration-200 hover:border-b border-[#FFF2C5]"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="font-semibold hover:text-[#F1D99C] transition-colors duration-200 hover:border-b border-[#FFF2C5]"
          href={"/posts"}
        >
          Posts
        </Link>
      </nav>
    </header>
  );
}
