import Button from "../Button";
import { Container } from "../Container";

export default function TrainingSection() {
    return (
        <div className="bg-bgprimary  w-full  py-20">
            <Container>
                <div className="h-screen w-full border border-text-secondary flex items-center justify-between">
                    {/* left */}
                    <div className="h-full w-1/2  border-r border-text-secondary flex justify-center items-center">
                        <p className="text-text-primary text-4xl md:px-20 text-center">
                            Comprehensive IT Training Services
                        </p>
                    </div>
                    {/* Right */}
                    <div className="h-full w-1/2 ">
                        <div className="mx-auto  px-10 pt-30 w-md">
                            <p className="text-text-secondary mb-10 text-lg leading-relaxed">Gana Tech Solutions offers a wide range of IT training services designed to cater to the diverse needs of learners. Our comprehensive programs focus on delivering in-demand skills and practical knowledge to help individuals thrive in the competitive IT landscape.</p>
                            <Button className='px-8 py-4 text-md text-black bg-primary hover:border-amber-50 hover:bg-transparent hover:text-amber-50' text='Learn more' />
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}