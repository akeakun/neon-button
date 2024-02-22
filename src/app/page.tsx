import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="
      bg-[#010029]
      text-white
      py-4
      px-8
      text-lg
      rounded-xl
      relative
      before:block
      before:w-full
      before:h-full
      before:absolute
      before:top-0
      before:left-0
      before:bg-gradient-to-tr
      before:from-[#00fff7]
      before:to-[#ff00f7]
      before:-z-10
      before:scale-105
      before:rounded-xl
      hover:z-0
      hover:shadow-2xl
      hover:shadow-cyan-50
      transition-all
      ease-in-out
      duration-300
      "
      >
        Click me
      </button>
    </main>
  );
}
