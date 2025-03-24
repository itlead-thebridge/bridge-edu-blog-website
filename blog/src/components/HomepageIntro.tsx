
type HomepageIntroProperties={
  children?: React.ReactNode;
};

export default function HomepageIntro(props:HomepageIntroProperties) {
    return ( 
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Since 2015 the Bridge Education Center has been tutoring K-12 students 
        and helping neighbors to access education resources in their community.
        </h4> 
    );
};