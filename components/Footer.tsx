import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-center static bottom-0 xl:static  h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 ">
      <div>
        Made by{" "}
        <a
          href="https://twitter.com/mayanks_tw"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          Mayank Singh{" "}
        </a>
        and deployed on{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          Vercel
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0 ">
        <Link
          href="https://twitter.com/mayanks_tw"
          aria-label="Maytank's Twitter"
        >
          <FaTwitter className="text-gray-500 hover:text-blue-500" size={24} />
        </Link>
        <Link href="https://github.com/codescalper" aria-label="GitHub">
          <FaGithub className="text-gray-500 hover:text-green-500" size={24} />
        </Link>
      </div>
    </footer>
  );
}
