import backgroundImage from '../../Assets/background/Plaza_Taman_Ismail_Marzuki.jpg';
import logo from "../../Assets/logo/logo_dki.svg";
import ismail_marzuki from "../../Assets/ismail_marzuki.png";
import { motion } from 'motion/react';

export default function Home() {
    return (
        <div className="relative h-full bg-white bg-cover bg-center font-forum"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className='absolute inset-0 bg-black opacity-45 z-0' />

            <div className='relative w-full flex items-center justify-between p-6 z-10'>
                <img src={logo} alt="logo" className='w-10 h-10' />
            </div>

            <motion.div 
                className='relative z-10 p-6 text-white flex flex-col gap-y-4'
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-sm font-light font-roboto tracking-widest">dibalik</h1>
                <div className='max-w-[200px] h-full flex flex-col gap-y-0 line-height-0'>
                    <p className="font-forum text-[50px] leading-none">Ismail</p>
                    <p className="font-forum text-[50px] leading-none">Marzuki</p>
                </div>
                <div>
                    <p className='text-[12px] text-justify'>
                        Ismail Marzuki (11 Mei 1914 – 25 Mei 1958) adalah salah seorang komponis besar Indonesia. Namanya sekarang diabadikan sebagai suatu pusat seni di Jakarta yaitu Taman Ismail Marzuki (TIM) di kawasan Cikini, Jakarta Pusat.
                    </p>
                </div>
            </motion.div>
            <motion.div
                className="absolute bottom-0 left-0 right-0 z-20"
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img src={ismail_marzuki} alt="logo" className='shadow-xl' />
            </motion.div>

            <motion.div 
                className="absolute bottom-15 left-0 right-0 z-20 flex items-center justify-center w-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <button className='bg-gray-400/50 px-4 py-2 rounded-full min-w-[150px] text-center text-sm font-medium text-black/80 hover:bg-gray-200 hover:text-black text-white font-bold cursor-pointer animation duration-200'>
                    Read More
                </button>
            </motion.div>
        </div>
    )
}