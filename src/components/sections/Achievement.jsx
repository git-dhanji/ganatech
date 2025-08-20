import { Container } from "../Container";
import achievementBg from '../../assets/achievementBg.avif'

const stats = [
    { value: "10K+", label: "Students Trained" },
    { value: "50+", label: "Industry-Aligned Courses" },
    { value: "95%", label: "Learner Satisfaction Rate" },
    { value: "20+", label: "Tech Partnerships" },
    { value: "5", label: "Industry Recognitions" },
];

export default function Achievement() {
    return (
        <div className="bg-bgprimary h-auto w-full pb-10 ">
            <Container>
                <div className="h-full w-full bg-gradient-to-t to-bgprimary from-transparent">
                    <div className="w-full flex flex-col items-center pt-4">
                        <h3 className="text-center text-[30px] font-extralight text-text-primary">We Take Pride in Our Training Excellence</h3>
                    </div>
                    <div>
                        <div className="text-red-400 pt-20">
                            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                                {stats.map((item, index) => (
                                    <div key={index} className="flex flex-col gap-4 ">
                                        <h2 className="text-6xl font-extralight font-global">{item.value}</h2>
                                        <p className="text-text-secondary px-4 mt-2">{item.label}</p>
                                        <div className="mt-2 h-1 w-[80%] mx-auto bg-text-secondary rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="w-full h-[30rem] relative">
                <img src={achievementBg} className=" w-full h-full -z-10 object-cover object-center" />
                <div className="absolute top-0 left-0  h-full w-full bg-gradient-to-b from-bgprimary via-transparent via-80% to-bgprimary  z-10">
                </div>
            </div>
        </div>
    )
}