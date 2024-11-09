import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABlJREFUGFdj/Pfv/39GBgYGxv///v9nALIAV70H+gs5xN8AAAAASUVORK5CYII=";

const Header = () => {
  return (
    <header className="h-24 w-full max-w-[1280px] min-w-[320px] mx-auto bg-transparent flex items-center justify-between p-4">
      <Image
        src="/logo.png"
        alt="Tripix Logo"
        width={60}
        height={60}
        blurDataURL={PLACEHOLDER_IMAGE}
      />
      <nav className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/price">Price</Link>
      </nav>

      <nav className="flex gap-4">
        <Link href="/login" className="my-auto mx-auto">
          Login
        </Link>
        <Link href="/register">
          <button className="bg-primary hover:bg-primary-dark text-neutral-light font-bold py-2 px-4 rounded-lg transition-all duration-300">
            Register
          </button>
        </Link>
      </nav>
    </header>
  );
};

export { Header };
