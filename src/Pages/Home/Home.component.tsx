import backgroundImage from '../../Assets/background/Plaza_Taman_Ismail_Marzuki.jpg';

export default function Home() {
    return (
        <div className="relative h-full bg-white bg-cover bg-center font-forum"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className='absolute inset-0 bg-black opacity-50 z-0' />

            <div className='relative z-10 p-4 text-white'>
                <h1 className="text-sm font-light mb-4 font-roboto tracking-widest">dibalik</h1>
                <div className='max-w-[200px] h-full flex flex-col gap-y-0 line-height-0'>
                    <p className="font-forum text-[50px] leading-none">Ismail</p>
                    <p className="font-forum text-[50px] leading-none">Marzuki</p>
                </div>
            </div>
        </div>
    )
}