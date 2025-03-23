import Note404PageNotFound from "@/components/Note404PageNotFound";
import SiteFooter from "@/components/SiteFooter"; 

export const runtime = "edge";

export default function NotFound() {
  return (
    <>
      <title>404: This page could not be found.</title>
        <Note404PageNotFound message="This page could not be found."/>
        <SiteFooter message=" "/>
    </>
  );
}
