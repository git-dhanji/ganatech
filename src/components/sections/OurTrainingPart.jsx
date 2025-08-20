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
            <Container>
                <div className='h-full w-full grid grid-cols-5 grid-rows-4 border border-text-secondary relative'>
                    {/* our training */}
                    <div className='border-r border-b border-text-secondary flex items-center justify-center text-text-primary text-3xl font-thin text-start'>
                        <h3>
                            Our <br /> Training <br />Partners
                        </h3>
                    </div>

                    <div className='border-r border-b border-text-secondary flex items-center justify-center p-14'>
                        <img src={Mikron} className='w-full  object-center object-cover' />


                    </div>


                    <div className='border-r border-b border-text-secondary  flex items-center justify-center p-14 min-h-8'>
                        <img src={Pome} className='w-full  object-center object-cover' />
                    </div>


                    <div className='border-r border-b border-text-secondary  flex items-center justify-center p-14'>
                        <img src={Velocity} className='w-full  object-center object-cover' />
                    </div>


                    <div className='border-b border-text-secondary  flex items-center justify-center p-14'>
                        <img src={Garmosh} className='w-full  object-center object-cover' />
                    </div>


                    <div className=' col-span-3 row-span-4 border-r border-text-secondary h-full w-full relative '>
                        <img src={careerBG} className='h-full w-full' />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>

                            <p className='text-text-primary z-20 text-3xl'>
                                Ready to Build Your IT Career?
                            </p>
                        </div>
                    </div>
                    <div className=' col-span-2 row-span-4 w-[55%] mx-auto  flex justify-center items-start flex-col gap-y-6 '>
                        <p className='text-text-secondary font-extralight font-global leading-relaxed tracking-wide'>
                            Embark on a transformative journey with Gana Tech Solutions and unlock the potential for a successful IT career. Explore our range of IT training programs and take the first step towards a rewarding professional future.
                        </p>
                        <Button className='px-8 py-4 text-md text-black bg-primary hover:border-amber-50 hover:bg-transparent hover:text-amber-50' text='Learn more' />
                    </div>
                </div>
            </Container>
        </div>
    )
}


