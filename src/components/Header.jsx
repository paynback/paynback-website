import { Button } from '@/components/ui/button'

import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TextAnimate } from '@/components/ui/text-animate'



export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [hoverCount, setHoverCount] = useState({});
    const [buttonHovered, setButtonHovered] = useState(false);
    const [buttonHoverCount, setButtonHoverCount] = useState(0);
    const location = useLocation();

    const navItems = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
        {
            name: 'Services',
            href: '/services'
        },
        {
            name: 'Pricing',
            href: '/pricing'
        },
        {
            name: 'Contact',
            href: '/contact'
        },
        {
            name: 'FAQ',
            href: '/faq'
        }
    ]


    return (
        <div className='sticky top-0 z-50 h-20 w-full py-10  flex justify-between items-center   '>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="inline-block cursor-pointer"
            >
                <TextAnimate
                    animation="blurInUp"
                    by="character"
                    duration={0.5}
                    // Key: force animation restart by changing key when hover starts
                    key={isHovered ? 'hovered' : 'idle'}
                    className={`
          text-xl font-bold
          ${isHovered ? 'animate-blurInUp' : ''}
          transition-all duration-500
        `}
                >
                    Paynback
                </TextAnimate>
            </div>



            <nav className='flex justify-between items-center gap-2 rounded-3xl bg-gray-50 h-12'>
                {navItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    const isHovering = hoveredItem === item.href;
                    
                    return (
                        <Link 
                            key={item.href} 
                            to={item.href}
                            onMouseEnter={() => {
                                setHoveredItem(item.href);
                                setHoverCount(prev => ({
                                    ...prev,
                                    [item.href]: (prev[item.href] || 0) + 1
                                }));
                            }}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`
                                relative flex items-center gap-2 px-4 py-2 rounded-3xl h-full 
                                text-sm font-medium transition-all duration-300 ease-in-out
                                ${isActive 
                                    ? 'bg-blue-50 text-blue-500 ' 
                                    : 'text-gray-700 hover:bg-blue-50'
                                }
                                ${isHovering && !isActive ? 'scale-105 bg-blue-50 font-medium text-blue-500' : ''}
                            `}
                        >
                            {/* Blue dot indicator for active item */}
                            <span className={`
                                w-2 h-2 rounded-full transition-all duration-300
                                ${isActive 
                                    ? 'bg-blue-500 scale-100' 
                                    : 'bg-blue-500 scale-0'
                                }
                                ${isHovering && !isActive ? 'scale-100 bg-blue-500' : ''}
                            `} />
                            
                            <span className={`
                                transition-transform duration-300
                                ${isHovering ? 'translate-x-0.5 text-blue-500 font-medium' : ''}
                            `}>
                                {isHovering ? (
                                    <TextAnimate 
                                        animation="blurInUp" 
                                        by="character" 
                                        duration={0.5}
                                        // Force animation restart on hover by using counter
                                        key={`${item.href}-${hoverCount[item.href] || 0}`}
                                    >
                                        {item.name}
                                    </TextAnimate>
                                ) : (
                                    <span>{item.name}</span>
                                )}
                            </span>
                        </Link>
                    );
                })}
            </nav>



            <Button 
                className={`
                    bg-[#35499a] text-white cursor-pointer h-12 w-32 rounded-3xl
                    transition-transform duration-300 ease-in-out
                    ${buttonHovered ? 'scale-95' : 'scale-100'}
                `}
                onMouseEnter={() => {
                    setButtonHovered(true);
                    setButtonHoverCount(prev => prev + 1);
                }}
                onMouseLeave={() => setButtonHovered(false)}
            >
                {buttonHovered ? (
                    <TextAnimate 
                        animation="blurInUp" 
                        by="character" 
                        duration={0.5}
                        key={`button-${buttonHoverCount}`}
                    >
                        View Demo
                    </TextAnimate>
                ) : (
                    <span>View Demo</span>
                )}
            </Button>
        </div>
    )
}
