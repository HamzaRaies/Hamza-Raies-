import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const mystyle={
    backgroundImage: `url(${"Group.png"})`,
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    height:'72vh',

  }
  return (
    
    <>
    
   
    <div className="main " style={mystyle} >
    <h1 className="text-white text-6xl flex justify-center items-center mt-20">Navigating the digital landscape for success</h1>
    <p className="text-white mt-4 flex justify-center items-center">passop enables you to save password for a long time and you can also delete or edit it</p>
    <p className="text-white flex justify-center items-center mt-2">it saves the password and it is so reliable , you can get pass whenever you want it</p>
    <div className="main-btn flex items-center justify-center gap-16 mt-10 bg-transparent">
    <div className="ui-btn ">
            <Link href={"/login"}>
            <span className='border-4 border-white  px-8 py-1 text-xl bg-white text-white hover:bg-black hover:text-white'id="one">
                Log in
            </span>
            </Link>
           </div>
    <div className="ui-btn">
            <Link href={"/about"}>
            <span className='border-4 border-white  px-8 py-1 text-xl bg-black text-white hover:bg-black hover:text-white' id="one">
                about
            </span>
            </Link>
           </div>
     
    </div>
    </div>
    </>
  );
}
