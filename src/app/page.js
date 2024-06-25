import MainBody from "@/components/MainBody";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <>
      <div className="flex flex-row contain">
        <Sidebar />
        <MainBody />
      </div>
    </>
  );
}
