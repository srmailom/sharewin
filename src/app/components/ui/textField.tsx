interface PropTypes{
    type: string,
    id: string,
    name: string,
    value?: string,
    placeholder?: string, 
    className?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField ({type, id, name, value, placeholder, className, onChange} : PropTypes) {
    return (
        <div>
            <input 
                type={type} 
                id={id} 
                name={name} 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange} 
                className={`mt-1 mb-1 p-2 text-[20px] border border-gray-300 rounded-lg w-full focus:ring focus:ring-slate-500 focus:border-slate-500 text-black ${className}`}
            />
        </div>
    )
}