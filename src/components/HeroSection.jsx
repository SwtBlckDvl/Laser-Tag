import pic2 from '../assets/pic2.jpg'
import pic1 from '../assets/pic1.jpg'


export const HeroSection = () => {
    return (
        <div className='flex flex-col items-center mt-6 lg:mt-20'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                Acción, estrategia y diversión:
                <span className='text-naranja-custom'>
                    {" "}
                    ¡Todo en un solo lugar!
                </span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Sumérgete en la emoción del laser tag, donde la adrenalina y la estrategia se encuentran. Disfruta de intensas batallas en nuestros campos de juego vibrantes, equipados con tecnología de última generación. ¡Compite con amigos y demuestra tus habilidades en un ambiente seguro y divertido para todas las edades!
            </p>
            <div className='flex justify-center my-10'>
                <a href="#" className='bg-btn-reservar py-3 px-4 mx-3 rounded-md'>
                    Conócenos
                </a>
                <a href='#' className='py-3 px-4 mx-3 rounded-md border'>
                    ¡Reserva Ahora!
                </a>
            </div>
            <div className='flex mt-10 justify-center'>
                <img src={pic1} className='rounded-lg w-1/2 border border-naranja-custom shadow-naranja-custom mx-2 my-4' />
                <img src={pic2} className='rounded-lg w-1/2 border border-naranja-custom shadow-naranja-custom mx-2 my-4' />
            </div>
        </div>
    )
}
