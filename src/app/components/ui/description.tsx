interface PropTypes{
    className?: string,
    children: React.ReactNode,
}

export default function Description ({className, children}: PropTypes) {
    return (
        <div className={`text-[18px] text-white ${className}`}>
            {children}
        </div>
    )
}