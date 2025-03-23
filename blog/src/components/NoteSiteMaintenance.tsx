
import LOGO_TUTOR_TO_EXCELLENCE_URL from "@/conf/logoConsts";
import Image from "next/image"; 

type NoteSiteMaintenanceProperties={ 
  message:string
};

export default function NoteSiteMaintenance(props:NoteSiteMaintenanceProperties) {
  return (
    <>
       <p className="text-3xl">{props.message}</p>
        <Image
          className="bg-white"
          src={LOGO_TUTOR_TO_EXCELLENCE_URL}
          alt="Tutor books artwork"
          width={2048}
          height={1048}
          priority
        />
 </>
  );
};
