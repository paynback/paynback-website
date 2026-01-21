import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TextAnimate } from '@/components/ui/text-animate'
import { ArrowRight, Plus } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { motion } from 'framer-motion'
import image from '../../public/phone.png'

import { NumberTicker } from "@/components/ui/number-ticker"
import { StarsBackground } from '@/components/Starbackground'
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { Apple, Play } from 'lucide-react'


export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / 10
        const y = (e.clientY - rect.top - rect.height / 2) / 10
        setMousePosition({ x, y })
    }

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 })
        setIsHovered(false)
    }

    return (
        <>
            <StarsBackground>
                <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                    <InteractiveGridPattern
                        width={70}
                        height={50}
                        squares={[50, 50]}
                        className="w-full h-full opacity-30"
                        strokeDasharray="0"
                    />
                </div>
                {/* <Meteors /> */}

                <section className='w-full min-h-screen flex flex-col lg:flex-row  items-start   pt-16 sm:pt-20 lg:pt-24 pb-8 gap-8  relative z-20' >

                    <motion.div
                        className='w-full lg:w-1/3 flex flex-col justify-center gap-6 sm:gap-8 lg:gap-10 order-1 lg:order-1'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal  leading-tight -mr-28 text-start '>Shop Smarter </h1>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal  leading-tight -mr-8 text-end '>With Paynback </h1>
                            <h1 className=' pt-2  text-6xl sm:text-4xl md:text-5xl lg:text-2xl font-normal text-gray-500 leading-tight text-start pl-10'>Sign up and become a member</h1>
                        </motion.div>


                        <motion.div
                            className='w-full  rounded-xl p-6 sm:p-8 flex flex-col gap-5'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        >
                            <h2 className='text-xl  font-semibold text-gray-900'>Get The App Now</h2>

                            <div className='flex   gap-4 '>
                                {/* Google Play Button */}
                                <motion.a
                                    href='https://play.google.com/store'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-4 px-3 py-4 w-52 h-16 rounded-lg bg-white text-black hover:bg-gray-100 transition-all flex-1 border border-gray-400'
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <img src="https://cdn-icons-png.flaticon.com/512/300/300218.png " className='w-7 h-7 text-green-500 ' />
                                    <div className='flex flex-col'>
                                        <span className='text-xs font-medium'>Get it on</span>
                                        <span className='text-sm font-semibold'>Google Play</span>
                                    </div>
                                </motion.a>

                                {/* App Store Button */}
                                <motion.a
                                    href='https://apps.apple.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-4 px-3 py-4 w-52 h-16 rounded-lg bg-white text-black hover:bg-gray-100 transition-all flex-1 border border-gray-400'
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <img src="https://cdn-icons-png.flaticon.com/512/15263/15263166.png " className='w-7 h-7 text-gray-800 ' />
                                    <div className='flex flex-col'>
                                        <span className='text-xs font-medium'>Download on the</span>
                                        <span className='text-sm font-semibold'>App Store</span>
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className='w-full sm:w-2/3 md:w-1/2 lg:w-3/4 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] flex items-start justify-center order-3 lg:order-2 p-4 -mt-16 lg:-mt-28 relative z-30'
                        initial={{ opacity: 0, y: 200 }}
                        animate={{
                            opacity: 1,
                            y: [0, -5, 0]
                        }}
                        transition={{
                            opacity: { duration: 0.8, ease: "easeOut" },
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.8
                            }
                        }}
                    >
                        {/* <motion.div
                        className='w-full h-full'
                        animate={{
                            x: mousePosition.x,
                            y: mousePosition.y
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 15,
                            mass: 0.1
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={image} alt="Hero Image" className='w-full h-full object-cover drop-shadow-[0_0_40px_rgba(255,255,255,1)] drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]' />
                    </motion.div> */}

                        <motion.div
                            className='w-full h-full'
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{
                                y: isHovered ? mousePosition.y : 0,
                                x: isHovered ? mousePosition.x : 0,
                                opacity: 1
                            }}
                            transition={{
                                y: isHovered ? { type: "spring", stiffness: 150, damping: 15, mass: 0.1 } : { duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
                                x: isHovered ? { type: "spring", stiffness: 150, damping: 15, mass: 0.1 } : { duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
                                opacity: { duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={handleMouseLeave}>
                            <img src={image} alt="Hero Image" className='w-full h-full object-cover drop-shadow-[0_0_40px_rgba(255,255,255,1)] drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]' />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className='w-full sm:w-3/4 md:w-2/3 lg:w-1/3 flex flex-col p-6 sm:p-8  rounded-lg order-2 lg:order-3 min-h-[300px] sm:min-h-[350px] lg:h-1/2 gap-10'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                        <div className='flex items-center justify-start mb-4'>
                            <div className='w-12 h-12   
                              flex items-center justify-center  rounded'>
                                <img src="https://cdn-icons-png.flaticon.com/512/1545/1545211.png" className='w-full h-full  text-blue-500' />
                            </div>
                        </div>

                        <div className='flex-1 flex items-center mb-4'>
                            <h1 className='text-sm sm:text-md md:text-base font-medium leading-tight text-gray-700'>
                                Simplify your financial life. Our intuitive app makes managing your money effortless.
                            </h1>
                        </div>

                        <div className='space-y-3'>
                            <div className='flex items-center gap-2'>
                                <div className='flex -space-x-3'>
                                    <Avatar className='h-8 w-8 sm:h-10 sm:w-10 border-2 border-white'>
                                        <AvatarImage src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop' alt='User 1' />
                                        <AvatarFallback className='bg-orange-500'>U1</AvatarFallback>
                                    </Avatar>

                                    <Avatar className='h-8 w-8 sm:h-10 sm:w-10 border-2 border-white'>
                                        <AvatarImage src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop' alt='User 2' />
                                        <AvatarFallback className='bg-orange-300'>U2</AvatarFallback>
                                    </Avatar>

                                    <Avatar className='h-8 w-8 sm:h-10 sm:w-10 border-2 border-white'>
                                        <AvatarImage src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop' alt='User 3' />
                                        <AvatarFallback className='bg-gray-800 text-white'>U3</AvatarFallback>
                                    </Avatar>
                                </div>

                                <NumberTicker value={2300} direction='up' className='text-xl sm:text-2xl font-bold text-gray-900' />
                            </div>

                            <p className='text-xs sm:text-sm text-gray-500'>
                                Trusted to use by millions users<br />over 140 countries
                            </p>
                        </div>
                    </motion.div>
                </section>

                <motion.section
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-b from-blue-700 via-blue-800 to-blue-500 rounded-t-3xl -mt-32 sm:-mt-40 lg:-mt-60 relative z-10 overflow-hidden "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 flex items-start py-10">
                        <div
                            className="w-full inline-flex flex-nowrap overflow-hidden"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', // Safari support
                            }}
                        >
                            {/* First copy – starts visible and moves left */}
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-semibold text-white/70 whitespace-nowrap flex-shrink-0 px-4"
                                style={{
                                    animation: 'marquee 40s linear infinite',
                                }}
                            >
                                FINANCE MANAGEMENT&nbsp;&nbsp;FINANCE MANAGEMENT
                            </h1>

                            {/* Second copy – starts off-screen right and follows */}
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white whitespace-nowrap flex-shrink-0 px-4"
                                style={{
                                    animation: 'marquee2 30s linear infinite',
                                }}
                            >
                                FINANCE MANAGEMENT&nbsp;&nbsp;FINANCE MANAGEMENT
                            </h1>
                        </div>
                    </div>

                    {/* Inline keyframes – no tailwind.config.js needed */}
                    <style jsx>{`
    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    @keyframes marquee2 {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
  `}</style>
                </motion.section>
            </StarsBackground>


        </>

    )
}