export default function AheroCard({ primaryText = '', secondaryText = "", icon = '', className = '' }) {
    return (
        <div className={`${className} md:h-auto lg:w-65 md:w-50 shadow-xl shadow-black bg-[#1B1C1E]  flex flex-col  rounded-lg pl-6 md;py-6 py-10 pr-10 pb-14 md:pb-10  w-[90%] mx-auto overflow-hidden`}>
            {/* Icon */}
            <div className="h-10 w-10 bg-amber-300">
                <img></img>
            </div>
            {/* primary TExt */}
            <div className="pt-20 text-sky-300 pb-8">
                <h3 className="font-semibold text-2xl">
                    {primaryText}
                </h3>
            </div>
            {/* Secondary text */}
            <div>
                <p className="text-text-secondary">
                    {secondaryText}
                </p>
            </div>
            <span className="h-1 w-full bg-text-secondary rounded-full mt-8"></span>
        </div>
    )
}