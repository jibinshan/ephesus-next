'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";

const Welcome = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.welcome-title', {
            scrollTrigger: {
                trigger: ".welcome-title",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            x: 40,
            duration: 1.5

        })
        const splitType = document.querySelectorAll(".head-welcome")
        splitType.forEach((char, i) => {
            if (char instanceof HTMLElement) {
                const text = new SplitType(char, { types: "chars" })
                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false
                    },
                    opacity: 0.2,
                    stagger: 0.2
                })
            }
        })

        gsap.to('.welcome-description', {
            scrollTrigger: {
                trigger: ".welcome-description",
                toggleActions: "restart none none none"
            },
            x: 40,
            duration: 2
        }
        )
    }, [])

    return (
        <section className="flex h-full w-full items-center justify-center bg-[#040404] lg:relative lg:px-10 lg:py-14">
            <svg xmlns="http://www.w3.org/2000/svg" width="1463" height="689" viewBox="0 0 1463 689" fill="none"
                className="hidden lg:flex">
                <path
                    d="M1399.09 688H63.9089C63.9089 653.265 35.7476 625.099 1 625.099V63.9011C35.7391 63.9011 63.9089 35.7433 63.9089 1H1399.09C1399.09 35.7348 1427.25 63.9011 1462 63.9011V625.099C1427.26 625.099 1399.09 653.257 1399.09 688Z"
                    stroke="#675A48" stroke-width="0.8" stroke-miterlimit="10" />
            </svg>
            <div className="lg:absolute flex h-full w-full flex-col items-center justify-center gap-6 py-8 md:py-24 ">
                <h3 className="welcome-title font-mono uppercase flex gap-2 items-center justify-center -ml-[50px]">
                    <div className="py-[1px] w-14 bg-[#DCCF90] h-0"></div>
                    <span
                        className="text-lg font-thin font-mono uppercase text-[#DCCF90] leading-[80%] tracking-[5px]">Welcome</span>
                    <div className="py-[1px] w-14 bg-[#DCCF90] h-0"></div>
                </h3>
                <h1 className="head-welcome text-4xl font-medium font-mono uppercase text-[#DCCF90] leading-[50px] tracking-[5px] text-center"
                    style={{ fontFamily: "'Marcellus SC' , serif" }} >
                    A Journey Through<br /> Turkish Flavors </h1>
                <p className="welcome-description lg:max-w-[600px] px-4 text-center font-light leading-[160%] text-[#C1B6A6] md:px-0 -ml-[50px]">
                    Experience the rich and authentic flavors of Turkish cuisine, celebrated as one of the world’s finest.
                    At Ephesus, we handpick and prepare every ingredient with care to bring you simple, wholesome dishes.
                    Immerse yourself in a warm, relaxed ambiance, where exceptional service awaits. We hope your visit with
                    us is a delightful one—thank you for choosing Ephesus!
                </p>
            </div>
        </section >
    );
};

export default Welcome;