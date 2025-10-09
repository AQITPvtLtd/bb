import Banner from "@/components/homepage/Banner";
import Blog from "@/components/homepage/Blog";
import ConditionsTreated from "@/components/homepage/ConditionsTreated";
import Contact from "@/components/homepage/Contact";
import DrBhupendra from "@/components/homepage/DrBhupendra";
import Services from "@/components/homepage/Services";
import VideoGallery from "@/components/homepage/VideoGallery";

export const metadata = {
  title: "Dr. Bhupendra Pratap Bharti | Best Spine Surgeon in Delhi | Advanced Spine Care",
  description:
    "Dr. Bhupendra Pratap Bharti is a leading spine surgeon in Delhi, specializing in advanced and minimally invasive spine surgeries. Get expert care for back pain, spinal disorders, and injury treatment.",
  keywords: [
    "best spine surgeon in delhi",
    "spine surgery specialist delhi",
    "dr bhupendra pratap bharti",
    "minimally invasive spine surgery delhi",
    "back pain treatment delhi",
    "spinal disorder doctor delhi",
    "lumbar spine surgery expert",
    "cervical spine surgery delhi",
    "spinal injury treatment india",
    "top spine surgeon delhi",
    "spine surgeon near me",
    "advanced spine care delhi",
    "spinal decompression surgery",
    "scoliosis treatment delhi",
    "herniated disc surgery delhi"
  ],
};

export default function Home() {
  return (
    <div>
      <Banner />
      <DrBhupendra />
      <Services />
      <ConditionsTreated />
      <Blog />
      <Contact />
      <VideoGallery />
    </div>
  );
}
