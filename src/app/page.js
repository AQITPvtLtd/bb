import Banner from "@/components/homepage/Banner";
import Blog from "@/components/homepage/Blog";
import ConditionsTreated from "@/components/homepage/ConditionsTreated";
import DrBhupendra from "@/components/homepage/DrBhupendra";
import Services from "@/components/homepage/Services";
import VideoGallery from "@/components/homepage/VideoGallery";
export default function Home() {
  return (
    <div>
      <Banner />
      <DrBhupendra />
      <Services />
      <ConditionsTreated />
      <Blog />
      <VideoGallery />
    </div>
  );
}
