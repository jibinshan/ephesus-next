import { Icons } from "@/components/Icon";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = ({ }) => {
    return (
        <section className="relative flex h-full w-full items-center justify-center bg-[#161616]">
            <div className="flex flex-col lg:flex-row h-full w-full max-w-[1300px] items-center justify-center gap-6">
                <div className="w-full lg:w-1/2 p-6 flex justify-center items-center">
                    <Image src="/images/passionfortraditional.png" width={718} height={906} alt="about" className="h-[600px]" />
                </div>
                <div className="h-full lg:w-1/2 py-8 md:py-24 flex flex-col justify-between gap-7 px-8 md:px-24">
                    <h3 className="font-mono uppercase flex gap-2 items-center">
                        <span
                            className="text-lg font-thin font-mono uppercase text-[#DCCF90] leading-[80%] tracking-[5px]">About
                            us</span>
                        <div className="py-[1px] w-14 bg-[#DCCF90] h-0"></div>
                    </h3>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-4xl font-medium font-mono uppercase text-[#DCCF90] leading-[50px] tracking-[5px] text-start"
                            style={{ fontFamily: "'Marcellus SC' , serif" }} >
                            Passion for <br />Traditional <br />Flavors </h1>
                        <p className="lg:max-w-[600px] text-start font-light leading-[160%] text-[#C1B6A6] md:px-0">
                            At Ephesus Restaurant, our passion for traditional flavors is at the heart of everything we do.
                            Inspired by the rich culinary heritage of Turkey, we strive to bring the time-honored tastes and
                            aromas of our homeland to your table. Every dish is a tribute to the authentic techniques and
                            recipes passed down through generations, prepared with love and care. Whether it`s the spices of
                            Anatolia or the fresh ingredients from local markets, our commitment is to offer you an
                            unforgettable dining experience that celebrates the true essence of Turkish cuisine.
                        </p>
                    </div>
                    <Link className=" px-6 py-4 flex w-fit items-center gap-3 bg-primary text-black transition-colors uppercase text-sm tracking-[1.96px] font-[600]"
                        href="/contact">
                        Contact Us
                        <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
                    </Link>
                    <div className="mt-9 py-[0.5px] w-full bg-[#DCCF90] h-0"></div>
                </div>
            </div>
        </section >
    );
};

export default About;
