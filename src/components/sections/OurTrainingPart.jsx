import { Container } from '../index'
import {
    Mikron,
    Pome,
    Velocity,
    Garmosh
} from '../images'

export default function OurTrainingPart() {
    return (
        <div className='bg-bgprimary py-10'>
            <Container>
                <div className='h-screen w-full grid grid-cols-5 grid-rows-3 border border-text-secondary'>
                    {/* our training */}
                    <div className='border-r border-b border-text-secondary flex items-center justify-center text-text-primary text-3xl font-thin text-start'>
                        <h3>
                            Our <br /> Training <br />Partners
                        </h3>
                    </div>

                    <div className='border-r border-b border-text-secondary flex items-center justify-center p-14'>
                        <img src={Mikron} className='w-full  object-center object-cover' />
                    </div>


                    <div className='border-r border-b border-text-secondary  flex items-center justify-center p-14'>
                        <img src={Pome} className='w-full  object-center object-cover' />
                    </div>


                    <div className='border-r border-b border-text-secondary  flex items-center justify-center p-14'>
                        <img src={Velocity} className='w-full  object-center object-cover' />
                    </div>


                    <div className='border-b border-text-secondary  flex items-center justify-center p-14'>
                        <img src={Garmosh} className='w-full  object-center object-cover' />
                    </div>


                    <div className=' col-span-3 row-span-3 border-r border-text-secondary'></div>
                    <div className=' col-span-2 row-span-3'></div>
                </div>
            </Container>
        </div>
    )
}


