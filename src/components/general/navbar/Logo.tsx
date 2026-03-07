import Link from "next/link";


export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-slate-950 font-bold text-lg">A</span>
      </div>
      <p className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-violet-500 to-indigo-900 font-bold md:text-2xl hidden sm:block">
        Portfolio
      </p>
    </Link>
  );
}
