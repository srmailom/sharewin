interface PropTypes{
    value: string,
    className?: string,
}

export default function Label({value, className}:PropTypes) {
    return(
        <div className={`text-[18px] my-1.5 ${className}`}>
            <label>
                {value}
            </label>
        </div>
    )
}