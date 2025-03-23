// import Link from "next/link";
import { ICON_FILE_16PX, ICON_GLOBE_16PX } from "@/conf/iconConsts";
import { LOGO_ORANGE_BRIDGE_URL } from "@/conf/logoConsts";
import Image from "next/image";

type SiteHeaderProps={
  title:string;
};

export default function SiteHeader(props:SiteHeaderProps) {
  // OLD:  <div className="flex gap-4 items-center flex-col sm:flex-row">
  // <div className="tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex">  
  // <div className="row-start-1 flex gap-12 flex-wrap items-center">
  return (
      <div className="row-start-1 flex gap-12 flex-wrap items-center">
      <Image 
          src={LOGO_ORANGE_BRIDGE_URL}
          alt="Bridge logomark"
          width={201}
          height={97}
        /> 
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
