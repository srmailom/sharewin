import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Approach from "./components/approach/approach";
import ContactMe from "./components/contactme/contactme";

export default function Profile() {
    return (
        <div className="bg-inherit">
            <section className="flex flex-row mx-28 py-32">
                <div className="flex flex-col w-[70%] text-white">
                    <p className="text-[30px] font-extrabold">Hello, I am</p>
                    <p className="text-[60px] font-extrabold">Sherwin Mailom</p>
                    <p className="text-[60px] font-extrabold">I{"'"}m a
                        <span className="text-blue-400 font-extrabold"> Full Stack Developer</span>
                    </p>
                    <p className="text-[16px] font-thin">Building bridges between front-end and backend, transforming ideas into web reality</p>
                    
                    <div className="flex space-x-4 mt-4">
                    <div  className="w-10 h-auto rounded-full border-2 border-blue-400 p-2 hover:scale-110">
                            <FaLinkedinIn size={20} color="#278BF7"/>
                        </div>
                        <div  className="w-10 h-auto rounded-full border-2 border-blue-400 p-2 hover:scale-110">
                            <FaGithub size={20} color="#278BF7"/>
                        </div>
                        <div  className="w-10 h-auto rounded-full border-2 border-blue-400 p-2 hover:scale-110">
                            <IoMail size={20} color="#278BF7"/>
                        </div>
                    </div>
                    <div className="flex w-56 place-items-center space-x-2 mt-8 border-blue-400 bg-blue-400 px-6 py-2 rounded-full shadow-inner shadow-blue-200 hover:bg-inherit">
                        <button> Download Resume </button>
                        <MdFileDownload color="white"/>
                    </div>
                </div>
                <div className="grid w-[30%] h-100 place-content-center item">
                    <Image
                        src="/images/profile.png" 
                        alt="Center Image"        
                        width={320}               
                        height={320}              
                        className="rounded-full border-8 border-green-800 h-auto w-auto"
                    />
                </div>
            </section>
            <section id="About" className="flex flex-col mx-28 py-32">
                <About />
            </section>
            <section id="Skills" className="flex flex-col lg:mx-28 lg:py-32 md:mx-14 sm:mx-7 md:py-16 sm:py-8">
                <Skills />
            </section>
            <section id="Approach" className="flex flex-col mx-28 py-32">
                <Approach />
            </section>
            <section id="ContactMe" className="flex flex-col mx-28 py-32">
                <ContactMe />
            </section>
        </div>
    )
}