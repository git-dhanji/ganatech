export default function AheroCard({ primaryText = '', secondaryText = "", icon = '', className = '' }) {
    return (
        <div className={`${className} md:h-auto   md:w-[240px]   bg-[#1B1C1E]  flex flex-col  rounded-lg pl-6 md;py-20 py-10 pr-10 pb-14 md:pb-10  w-[90%] mx-auto overflow-hidden md:p-8`}>
            {/* Icon */}
            <div className="h-10 w-10 bg-amber-300">

            </div>
            {/* primary TExt */}
            <div className="pt-20 md:pt-14 text-sky-300 pb-8">
                <h3 className="font-semibold md:text-[18px] text-2xl text-wrap">
                    {primaryText}
                </h3>
            </div>
            {/* Secondary text */}
            <div>
                <p className="text-text-secondary text-wrap md:text-sm">
                    {secondaryText}
                </p>
            </div>
            <span className="h-[1px] w-full bg-text-secondary rounded-full mt-8"></span>
        </div>
    )
}