import Banner from "@/components/homepage/Banner";
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
      <VideoGallery />
    </div>
  );
}
