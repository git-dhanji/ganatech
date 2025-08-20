import Button from "../Button";
import { Container } from "../Container";

export default function TrainingSection() {
    return (
        <div className="bg-bgprimary  w-full  py-20">
            <Container className="px-4">
                <div className="md:h-screen h-auto w-full border border-text-secondary md:flex items-center justify-between flex-col md:flex-row relative">
                    {/* left */}
                    <div className="h-full md:w-1/2  md:border-r border-b border-text-secondary flex justify-center items-center py-20 px-10 md:p-0">
                        <p className="text-text-primary sm:text-4xl text-3xl md:px-20 text-center px-10">
                            Comprehensive IT Training Services
                        </p>
                    </div>
                    {/* Right */}
                    <div className="h-full md:w-1/2 text-center md:text-start mb-10">
                        <div className="mx-auto  px-10 md:pt-30 pt-10 md:w-md ">
                            <p className="text-text-secondary mb-10 text-lg leading-relaxed">Gana Tech Solutions offers a wide range of IT training services designed to cater to the diverse needs of learners. Our comprehensive programs focus on delivering in-demand skills and practical knowledge to help individuals thrive in the competitive IT landscape.</p>
                            <Button className='px-8 py-4 text-md text-black bg-primary hover:border-amber-50 hover:bg-transparent hover:text-amber-50' text='Learn more' />
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}