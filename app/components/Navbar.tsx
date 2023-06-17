import cntl from "cntl";
import Link from "next/link";
import SearchInput from "./SearchInput";

const className = {
  title: cntl`text-xl font-bold text-white`,
  navBar: cntl`flex justify-center md:justify-between items-center flex-col  md:flex-row p-4 bg-slate-600 sticky top-0 drop-shadow-xl`,
};

export default function Navbar() {
  return (
    <nav className={className.navBar}>
      <h1 className={className.title}>
        <Link href="/">Mini WikiPedia</Link>
      </h1>
      <SearchInput />
    </nav>
  );
}
