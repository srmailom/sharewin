export default function Header(){
    const contentList = [
        "About",
        "Skills",
        "Approach"
        
    ]
    return(
        <>
        <header className="bg-inherit flex sticky top-0 mx-28 py-2 w-auto h-16 content-center px-2 justify-between">
            <button className="px-2 text-[25px] text-pretty hover:scale-125 text-white "> Home </button>
            <p className="text-center text-[25px] text-white space-x-4"> 
                {contentList.map((content) => (
                    <a href={`#${content}`}>{content}</a>
                ))}
                
            </p>
            <button className="text-white border-none text-[25px]"> Logout </button>
        </header>  
        </>
    )
}