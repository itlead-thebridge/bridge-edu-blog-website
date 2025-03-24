
import HomepageIntro from '@/components/HomepageIntro';
import NoteSiteMaintenance from "@/components/NoteSiteMaintenance";

export default function Home() {
//    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">      
//    </div>

  return (
      <main className="flex flex-col p-4 pb-4 gap-4 row-start-2 items-center sm:items-start"> 
        <HomepageIntro/>
        <NoteSiteMaintenance message="Site is under construction (we are changing providers). Please check back soon."/>
      </main>      
  );
}
