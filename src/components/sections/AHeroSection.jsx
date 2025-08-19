

import { AheroCard, Container } from '../index'

export default function AHeroSection() {
    return (
        <div className="h-auto w-full mt-80 relative">
            <div className="absolute w-full h-full bg-bgprimary -z-10 top-40">
            </div>

            <Container>
                <div className="w-full  h-[1370px] mb-40 flex border border-neutral-300 bg-bgprimary relative ">
                    <div className="w-2/5 h-full border-r border-neutral-300">
                        <div className="flex flex-col gap-y-10 mt-50 pl-28 pr-10">
                            <h2 className="text-4xl text-text-primary" >
                                Your Path to a Future-Ready IT Career
                            </h2>
                            <p className="text-text-secondary  pr-20 text-start text-lg">
                                At Gana Tech Solutions, we are dedicated to providing a platform for individuals to transform their IT skills and knowledge. Our industry-aligned curriculum and expert-led training empower learners to elevate their careers in the dynamic world of IT.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 relative h-[1169px] ">
                        <div className='ml-30 h-full w-[34rem] z-2 relative'>
                            <div className='absolute -top-30 left-0'>
                                <AheroCard
                                    primaryText='Comprehensive Cloud Analytics Training'
                                    secondaryText='Our cloud analytics training program is designed to equip learners with the latest tools and techniques in cloud-based data analysis and visualization, preparing them to drive insights and innovation in their organizations.'
                                />
                            </div>
                            <div className='absolute top-60 right-0'>
                                <AheroCard
                                    primaryText='Comprehensive Cloud Analytics Training'
                                    secondaryText='Our cloud analytics training program is designed to equip learners with the latest tools and techniques in cloud-based data analysis and visualization, preparing them to drive insights and innovation in their organizations.'
                                />
                            </div>
                            <div className='absolute top-140 left-0'>
                                <AheroCard
                                    primaryText='Comprehensive Cloud Analytics Training'
                                    secondaryText='Our cloud analytics training program is designed to equip learners with the latest tools and techniques in cloud-based data analysis and visualization, preparing them to drive insights and innovation in their organizations.'
                                />
                            </div>
                            <div className='absolute top-230 right-0'>
                                <AheroCard
                                    primaryText='Comprehensive Cloud Analytics Training'
                                    secondaryText='Our cloud analytics training program is designed to equip learners with the latest tools and techniques in cloud-based data analysis and visualization, preparing them to drive insights and innovation in their organizations.'
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </Container>
        </div>
    )
} ``