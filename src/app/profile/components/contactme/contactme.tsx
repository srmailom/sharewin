export default function ContactMe() {
    return (
        <div>
            <div className="place-items-center">
                <p className="text-[40px] text-white font-extrabold"> 
                    Contact <span className="text-blue-400"> Me</span>
                </p>
            </div>
            <div className="grid grid-cols-2 mx-52 space-x-4 space-y-4">
                <div className="ml-4 mt-4">
                    <input 
                        className="bg-inherit w-[100%] border-2 text-[18px] text-white p-2 border-gray-700 rounded-lg" 
                        placeholder="Enter your name"
                    />
                    </div>
                <div>
                    <input 
                        className="bg-inherit w-[100%] border-2 text-[18px] text-white p-2 border-gray-700 rounded-lg" 
                        placeholder="Enter email"
                    />
                </div>
                <div className="ml-4">
                    <input 
                        className="bg-inherit w-[100%] border-2 text-[18px] text-white p-2 border-gray-700 rounded-lg" 
                        placeholder="Enter your mobile number"
                    />
                    </div>
                <div>
                    <input 
                        className="bg-inherit w-[100%] border-2 text-[18px] text-white p-2 border-gray-700 rounded-lg" 
                        placeholder="Enter subject of the email"
                    />
                </div>
                <div className="grid col-span-2 h-64">
                    <textarea 
                        name="" id="" 
                        placeholder="Enter your message here..."
                        className="bg-inherit p-2 resize-none border-2 border-gray-700 rounded-lg"/>
                {/* <input 
                        className="bg-inherit w-[100%] border-2 text-[18px] text-white p-2 border-gray-600 rounded-lg peer-placeholder-shown:" 
                        placeholder="Enter your message here..."
                    /> */}
                </div>
                <div className="grid col-span-2 place-content-center">
                    <button className="w-56 text-center text-white space-x-2 mt-8 border-blue-400 bg-blue-400 px-6 py-2 rounded-full shadow-inner shadow-blue-200 hover:bg-inherit">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}