 
import DivContainer from "./DivContainer";

type SiteFooterProperties={ 
  message:string;
};

export default function SiteFooter(props:SiteFooterProperties) {
  const todayYear = new Date().getFullYear();
  return (

    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <DivContainer>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <p className="font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
             {props.message} 
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            Copyright (c) 2015-{todayYear} by Bridge Education Center.
          </div>
        </div>
      </DivContainer>
    </footer> 
  );
};

// OLD= footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
