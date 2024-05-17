import { Home, HandCoins, Lightbulb, Bitcoin, Newspaper } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const NavBar = () => {
  return (
    <nav className="flex justify-between  px-2 lg:px-9 md:px-8 py-2 backdrop-blur-sm  sticky bg-transparent">
      <h1 className="flex text-base font-extrabold lg:text-lg md:text-lg pt-1">
        <Link href="/">Crypto Control</Link>
      </h1>
      <ul className=" gap-6 justify-center items-center lg:flex md:flex hidden bg-slate-800 px-6 rounded-full">
        <li>
          <Link href="/">
            <Home size={24} />
          </Link>
          <Separator orientation="vertical" />
        </li>
        <li>
          <Link href="/cryptocurrency">
            {" "}
            <Bitcoin size={24} />
          </Link>
          <Separator orientation="vertical" />
        </li>
        <li>
          <Link href="/exchange">
            <HandCoins size={24} />
          </Link>
        </li>
        <li>
          <Link href="/news">
            <Newspaper size={24} />
          </Link>
        </li>
      </ul>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default NavBar;
