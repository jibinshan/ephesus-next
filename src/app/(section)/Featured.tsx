import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Featured = ({ }) => {
    return (
        <section className="relative flex h-full w-full items-center justify-center bg-[#0f0f0f] px-6" id="menu">
            <div className="flex h-full w-full flex-col items-center  gap-6 py-8 md:py-24">
                <h3 className="w-full font-mono uppercase flex gap-2 items-center">
                    <span
                        className="text-lg font-thin font-mono uppercase text-[#DCCF90] leading-[80%] tracking-[5px]">Dishes</span>
                    <div className="py-[1px] w-14 bg-[#DCCF90] h-0"></div>
                </h3>
                <h1 className="flex gap-3 items-end w-full text-4xl font-medium font-mono uppercase text-[#DCCF90] leading-[50px] tracking-[5px]"
                    style={{ fontFamily: "'Marcellus SC' , serif" }}>
                    Featured Dishes
                    <div className="py-[0.5px] w-0 lg:w-8/12 bg-[#DCCF90] h-0 mb-3"></div>
                </h1>
                <div className="w-full flex flex-col lg:flex-row items-center gap-5 mt-5">
                    <div
                        className="hidden lg:w-[58px] lg:h-[58px] shrink-0 rounded-full bg-[#161616] lg:flex lg:justify-center lg:items-center text-[#9f986e] rotate-180">
                        <ArrowRight />
                    </div>
                    <div className="w-full lg:w-11/12 flex flex-col items-center justify-center lg:flex-row gap-4 lg:gap-8">
                        <div className="flex flex-col gap-5">
                            <Image src="/images/adanakebab.png" alt="adanakebab" width={360} height={458} />
                            <div>
                                <h1 className="text-xl font-medium font-mono uppercase text-[#DCCF90] leading-[30px] tracking-[3px]"
                                    style={{ fontFamily: "'Marcellus SC' , serif" }}>
                                    Adana Kebab</h1>

                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Image src="/images/mezeplatter.png" alt="adanakebab" width={360} height={458} />
                            <div>
                                <h1 className="text-xl font-medium font-mono uppercase text-[#DCCF90] leading-[30px] tracking-[3px]"
                                    style={{ fontFamily: "'Marcellus SC' , serif" }}>
                                    Meze platter</h1>

                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Image src="/images/beklava.png" alt="adanakebab" width={360} height={458} />
                            <div>
                                <h1 className="text-xl font-medium font-mono uppercase text-[#DCCF90] leading-[30px] tracking-[3px]"
                                    style={{ fontFamily: "'Marcellus SC' , serif" }}>
                                    baklava</h1>

                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Image src="/images/kebabplatter.png" alt="adanakebab" width={360} height={458} />
                            <div>
                                <h1 className="text-xl font-medium font-mono uppercase text-[#DCCF90] leading-[30px] tracking-[3px]"
                                    style={{ fontFamily: "'Marcellus SC' , serif" }}>
                                    Kebab platter</h1>

                            </div>
                        </div>
                    </div>
                    <div
                        className="hidden lg:w-[58px] lg:h-[58px] shrink-0 rounded-full bg-[#161616] lg:flex lg:justify-center lg:items-center text-[#9f986e]">
                        <ArrowRight />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-7">
                    <Link className=" px-6 py-4 flex w-fit h-fit items-center gap-3 bg-[#505c42] text-[#DCCF90] border-[1px] lg:mt-12
                border-[#505c42] transition-colors uppercase text-sm tracking-[1.96px] font-[600]" href="">
                        <span> View our main menu</span>
                    </Link>
                    <Link className=" px-6 py-4 flex w-fit h-fit items-center gap-3 bg-[#505c42] text-[#DCCF90] border-[1px] lg:mt-12
                border-[#505c42] transition-colors uppercase text-sm tracking-[1.96px] font-[600]" href="">
                        <span> View our Drinks menu</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Featured;