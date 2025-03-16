import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h4 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
             Blessed to have an opportunity to help neighbors. Blessed to work alongside caring volunteers. 
          </h4>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            Copyright (c) 2015-2025 by Bridge Education Center.
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
