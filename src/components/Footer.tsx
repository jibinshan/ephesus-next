import { Diamond } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = ({ }) => {
    return (
        <section className="relative flex h-full w-full items-center justify-center bg-black">
            <div className="flex h-full w-full flex-col items-center justify-center py-8 md:py-24 gap-8">
                <div className="w-full flex flex-col gap-4 lg:flex-row">
                    <div
                        className="w-full lg:w-1/3 flex flex-col justify-center items-center border-b-[1px] border-b-[#2c291d] lg:border-b-0 lg:border-r-[1px] lg:border-r-[#2c291d] gap-6 px-10 py-10">
                        <h3 className="font-mono uppercase flex gap-2 items-center justify-center">
                            <span
                                className="text-lg font-thin font-mono uppercase text-[#DCCF90] leading-[80%] tracking-[5px]">contact
                                us</span>
                        </h3>
                        <h3 className="uppercase flex gap-2 items-center justify-center">
                            <span className="text-sm font-thin uppercase text-white leading-[25px] tracking-[2px] text-center">
                                <Link href="tel:+441273329989">
                                    T. +44 1273 329989
                                </Link>
                                <br />
                                <Link href='mailto:info@ephesus-brighton.co.uk'>
                                    info@ephesus-brighton.co.uk
                                </Link>
                            </span>
                        </h3>
                    </div>
                    <div
                        className="w-full lg:w-1/3 flex flex-col justify-center items-center border-b-[1px] border-b-[#2c291d] lg:border-b-0 lg:border-r-[1px] lg:border-r-[#2c291d] gap-6 px-10 py-10">
                        <h3 className="font-mono uppercase flex gap-2 items-center justify-center">
                            <span
                                className="text-lg font-thin font-mono uppercase text-[#DCCF90] leading-[80%] tracking-[5px]">address</span>
                        </h3>
                        <Link
                            href="https://maps.app.goo.gl/B5Hphbdh2hhN3J6r9">
                            <h3 className="uppercase flex gap-2 items-center justify-center">
                                <span
                                    className="text-sm font-thin uppercase text-white leading-[25px] tracking-[2px] text-center">575
                                    80-82 Preston Street, <br />Brighton BN1 2HG England
                                </span>
                            </h3>
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col justify-center items-start gap-6 px-10 py-10">
                        <h3 className="font-mono uppercase flex gap-2 items-center justify-center">
                            <span
                                className="text-lg font-thin font-mono uppercase text-[#DCCF90] leading-[80%] tracking-[5px]">Opening
                                hours</span>
                        </h3>
                        <h3 className="uppercase flex gap-2 items-center justify-center">
                            <span className="text-sm font-thin uppercase text-white leading-[25px] tracking-[2px] text-start">We
                                are open 7 days a week<br /> Thursday
                                4 - 11 pm
                                <br />
                                Friday
                                12 - 11 pm
                                <br />
                                Saturday
                                12 - 11 pm
                                <br />
                                Sunday
                                12 - 11 pm
                                <br />
                                Monday
                                4 - 11 pm
                                <br />
                                Tuesday
                                4 - 11 pm
                                <br />
                                Wednesday
                                4 - 11 pm</span>
                        </h3>
                    </div>
                </div>
                <div className="flex gap-6 items-center justify-center">
                    <div className="py-[0.5px] lg:w-[550px] bg-[#DCCF90] h-0 flex "></div>
                    <Image src="/images/logo.png" alt="harem" width={551} height={220} className="w-48 h-24" />
                    <div className=" py-[0.5px] lg:w-[550px] bg-[#DCCF90] h-0 flex">
                    </div>
                </div>
                <div
                    className="w-full flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-4 px-5 lg:px-28">
                    <div className="flex gap-3 text-[#DCCF90]">
                        <h3 className="uppercase flex gap-2 items-center justify-center">
                            <span
                                className="text-xs font-thin uppercase text-white leading-[80%] tracking-[2px]">pinterest</span>
                        </h3>
                        <Diamond />
                        <h3 className="uppercase flex gap-2 items-center justify-center">
                            <span
                                className="text-xs font-thin uppercase text-white leading-[80%] tracking-[2px]">facebook</span>
                        </h3>
                        <Diamond />
                        <h3 className="uppercase flex gap-2 items-center justify-center">
                            <span
                                className="text-xs font-thin uppercase text-white leading-[80%] tracking-[2px]">instagram</span>
                        </h3>
                    </div>
                    <div>
                        <h3 className="uppercase flex gap-2 items-center justify-center">
                            <span className="text-xs font-thin uppercase text-white leading-[80%] tracking-[2px]">©
                                2024 Ephesus - Authentic Turkish Cuisine, ALL RIGHTS RESERVED</span>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer