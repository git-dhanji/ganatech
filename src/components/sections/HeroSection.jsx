import { Button, Container } from '../index'

export default function HeroSection() {
    return (
        <div className='w-full h-auto mx-auto'>
            <Container className='px-4'>
                <div className='md:pt-80 pt-56 md:pb-40 pb-20 max-h-full  flex flex-col items-start md:items-start w-full'>
                    <h1 className='text-6xl  text-white tracking-lose md:text-8xl md:leading-28'>Empower <br /> Your IT Career
                        with<br /> Gana Tech Solutions
                    </h1>
                    <p className='text-neutral-300 mt-12 sm:text-xl text-start md:text-4xl'>
                        Use Data to Get a 360-Degree <br /> View of Your Business
                    </p>
                    <div className='mt-14 flex justify-between items-center gap-x-2 w-full'>
                        <Button className='px-6 flex-1 py-2  md:hidden dark:text-text-primary text-md text-nowrap border-amber-50 hover:bg-transparent hover:text-amber-50' text='get start ' />

                        <Button className='px-8 py-2 md:py-4 text-md text-nowrap text-black bg-primary hover:border-amber-50 hover:bg-transparent hover:text-amber-50' text='Learn more' />
                    </div>
                </div>
            </Container>
        </div>
    )
}