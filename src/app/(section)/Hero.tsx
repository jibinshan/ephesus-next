'use client'
import { Icons } from "@/components/Icon";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

const Hero = ({ }) => {
    useEffect(() => {

        const tl = gsap.timeline()
        tl.from('.head-container', 1.5, {
            y: 30,
            opacity: 1,
            ease: 'power4.out'
        }).from('.head-hero', 1, {
            x: 100,
            opacity: 0,
            delay: -0.5
        }).from('.hero-button', 1, {
            y: 100,
            opacity: 0,
            ease: "power4.out",
            delay: -0.5
        })
    }, [])
    return (
        <section id="hero" className="flex w-full items-center justify-center">
            <div className="relative flex min-h-[100vh] w-full items-center justify-center">
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden"
                    style={{
                        backgroundImage: "url(/images/hero.png)",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                >
                    {/* <Image
                        src='/images/hero.png'
                        width={2000}
                        height={1600}
                        alt="hero"
                        className="object-cover"
                    /> */}
                </div>
                <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
                <div className="flex-1 flex items-center z-40">
                    <div
                        className="head-container text-center mx-auto flex flex-col items-center justify-center gap-10  backdrop-blur-lg px-7 py-14 lg:px-10 lg:py-24 rounded-full">
                        <h1 className="head-hero flex justify-center items-center gap-2">
                            <div className="py-[1px] w-14 bg-[#DCCF90] h-0"></div>
                            <span
                                className="text-2xl font-thin font-mono uppercase text-[#DCCF90] leading-[80%] tracking-[7px]">EPHESUS</span>
                            <div className="py-[1px] w-14 bg-[#DCCF90] h-0"></div>
                        </h1>
                        <p className="head-hero text-[#DCCF90] text-center text-3xl lg:text-6xl font-medium leading-10 lg:leading-[73.6px] tracking-[15px] lg:tracking-[30px] uppercase"
                            style={{
                                fontFamily: "'Marcellus SC', serif",
                            }} >
                            Experience < br /> the Flavors<br /> of Turkey</p>
                        <div className="bg-transparent flex flex-col lg:flex-row gap-6">
                            <Link className="hero-button px-6 py-4 flex w-fit items-center gap-3 bg-primary text-black transition-colors uppercase text-sm tracking-[1.96px] font-[600]"
                                href="/menu">
                                View Menu
                                <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
                            </Link>
                            <Link className="hero-button hidden px-6 py-4 md:flex w-fit items-center gap-3 bg-primary text-black transition-colors uppercase text-sm tracking-[1.96px] font-[600]"
                                href="/table-booking">
                                Book A Table
                                <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
