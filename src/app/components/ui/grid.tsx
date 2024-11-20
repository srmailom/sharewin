interface PropTypes{
    className?: string,
    children: React.ReactNode,
}

export default function Grid ({className, children}:PropTypes) {
    return (
        <div className={`grid ${className}`}>
            {children}
        </div>
    )
}