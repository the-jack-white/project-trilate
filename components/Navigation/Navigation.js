import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="text-xl font-medium z-20 relative">
      <ul className="flex gap-12">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        {/* <Link href={"/about"}>
          <li>About</li>
        </Link> */}
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
