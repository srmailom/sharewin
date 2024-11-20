interface PropTypes{
    name: string,
    className?: string,
    event:  (event: React.MouseEvent<HTMLButtonElement>) => void|{},
    disable: boolean
}

export default function Button({name, className, event, disable}:PropTypes){
    return (
        <div className="my-1.5">
            <button 
                className={`mt-4 w-full py-3 px-4 rounded-lg text-white font-semibold tracking-wide bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out ${className}` }
                onClick={event} disabled={disable}
            >
                {name}
            </button>
        </div>
        
    )
}