

import { AheroCard, Container } from '../index'

export default function AHeroSection() {
    return (
        <div className="h-auto w-full mt-80 relative">
            <div className="absolute w-full h-full bg-bgprimary -z-10 top-40">
            </div>


            <Container className='px-4'>
                <div className="w-full md:h-[1199px]  md:mb-40 md:flex flex-col md:flex-row border border-text-secondary bg-bgprimary relative ">
                    {/* left box */}
                    <div className="md:w-1/3 md:h-full py-20 md:py-0 md:px-0 md:text-start text-center  md:border-r w-full  border-text-secondary border-b md:border-b-0  mx-auto h-auto px-4 ">

                        <div className="flex flex-col md:w-full   mx-auto  gap-y-10 md:mt-30 lg:mt-50 md:pl-10 md:pr-4  lg:pl-20">
                            <h2 className="text-3xl  text-text-primary" >
                                Your Path to a Future-Ready IT Career
                            </h2>
                            <p className="text-text-secondary text-center lg:pr-20 md:text-start text-lg">
                                At Gana Tech Solutions, we are dedicated to providing a platform for individuals to transform their IT skills and knowledge. Our industry-aligned curriculum and expert-led training empower learners to elevate their careers in the dynamic world of IT.
                            </p>
                        </div>
                    </div>

                    {/* Right Box */}
                    <div className="md:flex-1  md:h-auto min-h-auto relative">
                        <div className='h-auto  md:px-20 flex flex-col items-center gap-y-10 my-10 md:block'>
                            <div className='md:w-[240px] md:absolute -top-20'>
                                <AheroCard
                                    primaryText='Comprehensive Cloud Analytics Training'
                                    secondaryText='Our cloud analytics training program is designed to equip learners with the latest tools and techniques in cloud-based data analysis and visualization, preparing them to drive insights and innovation in their organizations.'
                                />
                            </div>
                            <div className=' md:w-[240px] md:absolute  left-[340px] top-40'>
                                <AheroCard
                                    primaryText='Accelerate Your Career in Data Science'
                                    secondaryText='Discover the world of data science at Gana Tech Solutions and gain expertise in data analysis, machine learning, and predictive modeling to solve complex business challenges and drive informed decision-making.'
                                />
                            </div>
                            <div className=' md:w-[240px] md:absolute top-[580px]'>
                                <AheroCard
                                    primaryText='Versatile Application Development Courses'
                                    secondaryText='Explore a wide range of application development courses at Gana Tech Solutions, where you can master the skills needed to build scalable and secure applications across various platforms and technologies.'
                                />
                            </div>
                            <div className='md:w-[240px] md:absolute -bottom-20  left-[340px]'>
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