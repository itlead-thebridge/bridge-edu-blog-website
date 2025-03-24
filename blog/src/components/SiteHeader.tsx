import Link from "next/link";
import Image from "next/image";

import { ICON_FILE_16PX, ICON_GLOBE_16PX } from "@/conf/iconConsts";
import { LOGO_ORANGE_BRIDGE_URL } from "@/conf/logoConsts";

type SiteHeaderProps={
  title:string;
};

export default function SiteHeader(props:SiteHeaderProps) { 
  return (
      <div className="row-start-1 flex gap-12 flex-wrap items-center bg-neutral-50 border-b border-neutral-200 dark:bg-slate-800">
      <Link href="/">
      <Image 
          src={LOGO_ORANGE_BRIDGE_URL}
          alt="Bridge logomark"
          width={201}
          height={97}
        /></Link>
      <h2 className="text-2xl md:text-5xl">
              {props.title}</h2>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <Image
          aria-hidden
          src={ICON_FILE_16PX}
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
          src={ICON_GLOBE_16PX}
          alt="Globe icon"
          width={16}
          height={16}
        />
        Tutor
      </a>
    </div>
  );
};
