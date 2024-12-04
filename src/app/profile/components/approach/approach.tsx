import Carousel from "@/app/components/carousel";

export default function Approach(){
    const approach = [
        "Planning and Designing",
        "Implementation",
        "Testing"
    ]
    return (
        <div className="container">
            <div className="place-items-center py-8">
                <p className="text-[40px] text-white font-extrabold"> 
                    My <span className="text-blue-400"> Approach</span>
                </p>
            </div>
            <div className="flex items-center justify-center bg-inherit">
                <Carousel approach={approach} />
            </div>
        </div>
    )
}