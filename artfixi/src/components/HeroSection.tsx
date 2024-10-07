import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
export default function HeroSection (){
    return <div className="flex justify-center py-10 h-auto md:h-[40rem] w-fulldark:bg-black   dark:bg-grid-white/[0.08] bg-grid-black/[0.08] rounded-md flex-col items-center relative overflow-hidden mx-auto md:py-0">
        <div className="absolute top-0 left-0 pt-12 ml-8 font-bold text-3xl text-red-500">ArtFixi</div>
        <div className="p-4 relative z-10 w-full text-center ">
        <Spotlight className="-top-10 left-0 md:left-60 md:-top-20" fill="white" />
            <h1  className="mt-16 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" >
                 Learn Sketching to become a Professional  <span className="text-red-500"> Artist </span>
            </h1>
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aliquam dolorem itaque eum quae, neque quaerat dolorum nisi soluta laboriosam!</p> */}
            <div className="mt-4"></div>
            <Link href = {"/courses"}><Button> Explore courses</Button> </Link>
        </div>
    </div>
}