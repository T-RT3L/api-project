import Link from "next/link";
import Navbar from "./component/Navbar";
import AppsLayout from "./component/AppsLayout";
import Image from "next/image";
import background from "./images/background.png"
export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Image src={background} className="w-screen h-screen object-cover absolute" alt="image"></Image>
      <Navbar text="Home" link="/" hasReturn={false}/>
      <div className="h-1/2 ">
        <AppsLayout/>
      </div>
      
      
      
      
    </div>

  );
}
