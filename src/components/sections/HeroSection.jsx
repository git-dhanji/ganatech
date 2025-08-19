import { Button, Container } from '../index'

export default function HeroSection() {
    return (
        <div className='w-full h-auto mx-auto'>
            <Container>
                <div className='pt-80 pb-40 max-h-full  text-start flex flex-col items-start w-full'>
                    <h1 className='text-8xl text-white tracking-lose leading-28 '>Empower <br /> Your IT Career
                        with<br /> Gana Tech Solutions
                    </h1>
                    <p className='text-neutral-300 text-4xl mt-12'>
                        Use Data to Get a 360-Degree <br /> View of Your Business
                    </p>
                    <div className='mt-14'>
                        <Button className='px-8 py-4 text-md text-black bg-primary hover:border-amber-50 hover:bg-transparent hover:text-amber-50' text='Learn more' />
                    </div>
                </div>
            </Container>
        </div>
    )
}