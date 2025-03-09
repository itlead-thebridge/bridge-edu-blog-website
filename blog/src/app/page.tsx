import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <div className="flex gap-4 items-center flex-col sm:flex-row">
           
           <Image 
             src="/bridge_logo_on_orange.png"
             alt="Bridge logomark"
             width={201}
             height={97}
           />
             
           <p className="text-6xl">Bridge Education Center</p>
          
       </div>

       <p className="text-3xl">Site is under construction (we are changing providers). Please check back soon.</p>
        <Image
          className="bg-white"
          src="/tutor-to-excellence.png"
          alt="Tutor books artwork"
          width={2048}
          height={1048}
          priority
        />
        

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Tutor
        </a>
      </footer>
    </div>
  );
}
