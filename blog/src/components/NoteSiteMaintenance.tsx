import Link from "next/link";
import Image from "next/image";

type NoteSiteMaintenanceProperties={ 
};

export default function NoteSiteMaintenance(props:NoteSiteMaintenanceProperties) {
  return (
    <>
       <p className="text-3xl">Site is under construction (we are changing providers). Please check back soon.</p>
        <Image
          className="bg-white"
          src="/tutor-to-excellence.png"
          alt="Tutor books artwork"
          width={2048}
          height={1048}
          priority
        />
 </>
  );
};
