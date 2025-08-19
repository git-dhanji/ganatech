export default function AheroCard({ primaryText = '', secondaryText = "", icon = '' }) {
    return (
        <div className="h-auto w-65 shadow-xl shadow-black bg-[#1B1C1E]  flex flex-col  rounded-lg pl-6 py-6 pr-10">
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