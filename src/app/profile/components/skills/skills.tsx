import Image from "next/image";

export default function Skills(){
    const borderStyle = "grid border-2 border-blue-300 p-8 place-content-center"
    return (
        <div className="container">
            <div className="place-items-center">
                <p className="text-[40px] text-white font-extrabold"> 
                    Technical <span className="text-blue-400"> Skills</span>
                </p>
            </div>
            <div 
                className="grid space-y-2 lg:grid-cols-5 lg:space-x-8 lg:space-y-14 md:grid-cols-3 md:space-y-7 md:space-x-4 sm:grid-cols-2 sm:space-y-3 sm:space-x-2">
                <div className="grid border-none lg:py-4 lg:ml-8 md:ml-4 lg:mt-14 md:mt-7 sm:mt-3 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-teal-100">
                    <div>
                        <Image
                            src="/images/tailwindcss-icon.png" 
                            alt="reactIcon"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div>
                        <p className="text-[20px] text-white pt-4">TailwindCSS</p>
                    </div>
                </div>
                <div className="grid border-none p-4 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-blue-200">
                    <div>
                        <Image
                            src="/images/react-icon.png" 
                            alt="Center Image"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="self-end">
                        <p className="text-[20px] text-white pt-4">React</p>
                    </div>
                </div>
                <div className="grid border-none p-4 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-blue-200">
                    <div>
                        <Image
                            src="/images/javascript-icon.png" 
                            alt="Center Image"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="self-end">
                        <p className="text-[20px] text-white pt-4">JavaScript</p>
                    </div>
                </div>
                <div className="grid border-none p-4 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-blue-200">
                    <div>
                        <Image
                            src="/images/typescript-icon.png" 
                            alt="Center Image"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="self-end">
                        <p className="text-[20px] text-white pt-4">TypeScript</p>
                    </div>
                </div>
                <div className="grid border-none p-4 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-blue-200">
                    <div>
                        <Image
                            src="/images/graphql-icon.png" 
                            alt="Center Image"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="self-end">
                        <p className="text-[20px] text-white pt-4">GraphQL</p>
                    </div>
                </div>
                <div className="grid border-none p-4 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-blue-200">
                    <div>
                        <Image
                            src="/images/mysql-icon.png" 
                            alt="Center Image"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="self-end">
                        <p className="text-[20px] text-white pt-4">MySQL</p>
                    </div>
                </div>
                <div className="grid border-none p-4 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-blue-200">
                    <div>
                        <Image
                            src="/images/postgresql-icon.png" 
                            alt="Center Image"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="self-end">
                        <p className="text-[20px] text-white pt-4">PostgreSQL</p>
                    </div>
                </div>
                <div className="grid border-none p-4 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-blue-200">
                    <div>
                        <Image
                            src="/images/mongodb-icon.png" 
                            alt="Center Image"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="self-end">
                        <p className="text-[20px] text-white pt-4">MongoDb</p>
                    </div>
                </div>
                <div className="grid border-none p-4 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-blue-200">
                    <div>
                        <Image
                            src="/images/nodejs-icon.png" 
                            alt="Center Image"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="self-end">
                        <p className="text-[20px] text-white pt-4">NodeJS</p>
                    </div>
                </div>
                <div className="grid border-none p-4 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-blue-200">
                    <div>
                        <Image
                            src="/images/python-icon.png" 
                            alt="Center Image"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="self-end">
                        <p className="text-[20px] text-white pt-4">Python</p>
                    </div>
                </div>
                <div className="grid border-none p-4 lg:col-start-3 place-content-center place-items-center rounded-2xl shadow-inner shadow-slate-300 hover:bg-blue-200">
                    <div>
                        <Image
                            src="/images/docker-icon.png" 
                            alt="Center Image"        
                            width={100}               
                            height={100}
                            className="h-auto w-auto"
                        />
                    </div>
                    <div className="self-end">
                        <p className="text-[20px] text-white pt-4">Docker</p>
                    </div>
                </div>
            </div>

        </div>
    )
}