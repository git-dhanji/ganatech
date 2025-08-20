

import { AheroCard, Container } from '../index'

export default function AHeroSection() {
    return (
        <div className="h-auto w-full mt-80 relative">
            <div className="absolute w-full h-full bg-bgprimary -z-10 top-40">
            </div>

            <Container className='px-4'>
                <div className="w-full  md:h-[1370px] md:mb-40 md:flex flex-col md:flex-row border border-text-secondary bg-bgprimary relative ">
                    {/* left box */}
                    <div className="md:w-[40%]  md:h-full py-20 md:py-0 md:px-0 md:text-start text-center  md:border-r w-full  border-text-secondary border-b md:border-b-0  mx-auto h-auto">

                        <div className="flex flex-col  md:w-full   mx-auto  gap-y-10 md:mt-30 lg:mt-50 md:pl-10 md:pr-4  lg:pl-28 ">
                            <h2 className="text-3xl  text-text-primary" >
                                Your Path to a Future-Ready IT Career
                            </h2>
                            <p className="text-text-secondary text-center lg:pr-20 md:text-start text-lg">
                                At Gana Tech Solutions, we are dedicated to providing a platform for individuals to transform their IT skills and knowledge. Our industry-aligned curriculum and expert-led training empower learners to elevate their careers in the dynamic world of IT.
                            </p>
                        </div>
                    </div>

                    {/* Right Box */}
                    <div className="md:flex-1 relative md:h-[1169px]">
                        <div className='lg:ml-30 md:ml-0 my-20 md:my-0 h-full lg:w-[34rem] z-2 relative flex items-center gap-y-20 justify-center flex-col '>
                            <div className='md:absolute md:-top-30 md:left-0'>
                                <AheroCard
                                    primaryText='Comprehensive Cloud Analytics Training'
                                    secondaryText='Our cloud analytics training program is designed to equip learners with the latest tools and techniques in cloud-based data analysis and visualization, preparing them to drive insights and innovation in their organizations.'
                                />
                            </div>
                            <div className='md:absolute top-60 right-0'>
                                <AheroCard
                                    primaryText='Accelerate Your Career in Data Science'
                                    secondaryText='Discover the world of data science at Gana Tech Solutions and gain expertise in data analysis, machine learning, and predictive modeling to solve complex business challenges and drive informed decision-making.'
                                />
                            </div>
                            <div className='md:absolute top-140 left-0'>
                                <AheroCard
                                    primaryText='Versatile Application Development Courses'
                                    secondaryText='Explore a wide range of application development courses at Gana Tech Solutions, where you can master the skills needed to build scalable and secure applications across various platforms and technologies.'
                                />
                            </div>
                            <div className='md:absolute top-230 right-0'>
                                <AheroCard
                                    primaryText='Superior Customer Experience and Support'
                                    secondaryText='At Gana Tech Solutions, we prioritize the learning experience of our students and provide exceptional support to ensure their success in the IT industry.'
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </Container>
        </div>
    )
} ``