import { Button, Container } from '../index'
import {
    Mikron,
    Pome,
    Velocity,
    Garmosh,
    careerBG
} from '../images'

export default function OurTrainingPart() {
    return (
        <div className='bg-bgprimary py-10'>
            <Container className='px-4'>
                <div className='h-full w-full grid md:grid-cols-5 md:grid-rows-4 border border-text-secondary relative sm:grid-cols-2'>
                    {/* our training */}
                    <div className='border-r border-b border-text-secondary flex items-center justify-center md:text-text-primary text-text-secondary md:text-3xl md:font-thin text-start w-full h-72 md:h-full md:w-full text-4xl font-bold'>
                        <h3>
                            Our <br /> Training <br />Partners
                        </h3>
                    </div>

                    <div className='border-r border-b border-text-secondary flex items-center justify-center p-14 w-full h-72 md:h-full md:w-full'>
                        <img src={Mikron} className='w-full  object-center object-cover' />


                    </div>


                    <div className='border-r border-b border-text-secondary  flex items-center justify-center p-14 w-full h-72 md:h-full md:w-full'>
                        <img src={Pome} className='w-full  object-center object-cover' />
                    </div>


                    <div className='border-r border-b border-text-secondary  flex items-center justify-center p-14 w-full h-72 md:h-full md:w-full'>
                        <img src={Velocity} className='w-full  object-center object-cover' />
                    </div>


                    <div className='border-b border-text-secondary  flex items-center justify-center p-14 sm:border-r w-full h-72 md:h-full md:w-full md:border-r-transparent'>
                        <img src={Garmosh} className='w-full  object-center object-cover' />
                    </div>


                    <div className=' md:col-span-3 md:row-span-4 border-r border-text-secondary border-b md:border-b-transparent  w-full relative h-72 md:h-full md:w-full'>
                        <img src={careerBG} className='h-full w-full' />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>

                            <p className='text-text-primary z-20 text-3xl'>
                                Ready to Build Your IT Career?
                            </p>
                        </div>
                    </div>
                    <div className=' md:col-span-2 md:row-span-4 md:w-[55%] md:mx-auto  flex justify-center md:items-start flex-col gap-y-6 md:m-0 mx-8 my-8 items-start '>
                        <p className='text-text-secondary font-extralight font-global leading-relaxed tracking-wide'>
                            Embark on a transformative journey with Gana Tech Solutions and unlock the potential for a successful IT career. Explore our range of IT training programs and take the first step towards a rewarding professional future.
                        </p>
                        <Button className='md:px-8 md:py-4 w-full md:w-auto text-md text-black bg-primary hover:border-amber-50 hover:bg-transparent hover:text-amber-50' text='Learn more' />
                    </div>
                </div>
            </Container>
        </div>
    )
}


