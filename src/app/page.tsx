import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen p-8   from-red-50 to-red-100 dark:from-red-900 dark:to-red-800">
      <Link
        prefetch={true}
        className="flex items-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
        href="/home"
      >
        <span>Go To Design</span>
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/vercel.svg"
          alt="Vercel logomark"
          width={24}
          height={24}
        />
      </Link>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 max-w-md text-center">
        <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
          API Status Alert
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          https://wo********.com/************/random
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">working Now</p>
      </div>
    </div>
  );
}
