import Description from "./description";

interface PropTypes{
    value: string,
    className?: string,
}

export default function Label({value, className}:PropTypes) {
    return(
        <div className={`pl-2 text-[22px] pt-8  pb-4 ${className}`}>
            <label>
                {value}
            </label>
        </div>
    )
}