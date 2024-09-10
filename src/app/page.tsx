import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link
        prefetch={true}
        className="rounded-full w-fit border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="/home"
      >
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Go To Design
      </Link>
    </div>
  );
}
