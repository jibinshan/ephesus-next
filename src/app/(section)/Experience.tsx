import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Experience = ({ }) => {
    return (
        <section className="relative flex h-full w-full items-center justify-center bg-[#0f0f0f] px-6">
            <div className="flex h-full w-full flex-col items-center justify-center gap-6 py-8 md:py-24">
                <h3 className="font-mono uppercase flex gap-2 items-center justify-center">
                    <div className="py-[1px] w-14 bg-[#DCCF90] h-0"></div>
                    <span className="text-lg font-thin font-mono uppercase text-[#DCCF90] leading-[80%] tracking-[5px]">we
                        offer</span>
                    <div className="py-[1px] w-14 bg-[#DCCF90] h-0"></div>
                </h3>
                <h1 className="text-4xl font-medium font-mono uppercase text-[#DCCF90] leading-[50px] tracking-[5px] text-center"
                    style={{
                        fontFamily: "'Marcellus SC', serif"
                    }}>
                    Unforgettable < br /> Dining Experience </h1>
                <p className="lg:max-w-[600px] px-2 font-light leading-[160%] text-center text-[#C1B6A6] md:px-0">
                    At Ephesus Restaurant, we offer an unforgettable dining experience with authentic Turkish flavors,
                    carefully prepared using traditional recipes and the finest ingredients. Enjoy warm hospitality and
                    exceptional service in an inviting atmosphere, where every bite reflects the rich culinary heritage of
                    Turkey.
                </p>
                <div className="flex flex-col lg:gap-12 gap-6 px-8 mt-8">
                    <div className="w-full flex flex-col lg:flex-row gap-6 items-center">
                        <Image src="/images/food.png" alt="food" className="w-full lg:w-1/3" width={569} height={630} />
                        <div className="w-full lg:w-1/2 px-7 py-7 flex flex-col gap-4">
                            <h1 className="text-2xl font-medium font-mono uppercase text-[#DCCF90] tracking-[5px] text-start"
                                style={{
                                    fontFamily: "'Marcellus SC', serif"
                                }} >
                                Food</h1>
                            <p className="lg:max-w-[350px] font-light text-start text-[#C1B6A6] md:px-0">
                                At Ephesus, we bring the vibrant flavors of Turkish cuisine to life, offering authentic
                                dishes made with fresh ingredients and time-honored recipes.
                            </p>
                            <div className="py-[0.5px] w-full bg-[#DCCF90] h-0 mb-3"></div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col-reverse lg:flex-row gap-6 items-center">
                        <div className="w-full lg:w-1/2 px-7 py-7 flex flex-col gap-4">
                            <h1 className="text-2xl font-medium font-mono uppercase text-[#DCCF90] tracking-[5px] text-start"
                                style={{ fontFamily: "'Marcellus SC' , serif" }} >
                                Drinks</h1>
                            <p className="lg:max-w-[350px] font-light text-start text-[#C1B6A6] md:px-0">
                                We offer a selection of traditional Turkish drinks, including refreshing ayran, rich Turkish
                                coffee, and aromatic teas, to perfectly complement your meal.
                            </p>
                            <div className="py-[0.5px] w-full bg-[#DCCF90] h-0 mb-3"></div>
                        </div>
                        <Image src="/images/drinks.png" alt="food" className="w-full lg:w-1/3 flex lg:justify-end" width={569} height={630} />
                    </div>
                    <div className="w-full flex flex-col lg:flex-row gap-6 items-center">
                        <Image src="/images/atmosphere.png" alt="food" className="w-full lg:w-1/3" width={569} height={630} />
                        <div className="w-full lg:w-1/2 px-7 py-7 flex flex-col gap-4">
                            <h1 className="text-2xl font-medium font-mono uppercase text-[#DCCF90] tracking-[5px] text-start"
                                style={{ fontFamily: "'Marcellus SC' , serif" }} >
                                Atmosphere</h1>
                            <p className="lg:max-w-[350px] font-light text-start text-[#C1B6A6] md:px-0">
                                At Ephesus, you`ll experience a warm and inviting atmosphere, blending modern comfort with
                                the charm of traditional Turkish hospitality.
                            </p>
                            <div className="py-[0.5px] w-full bg-[#DCCF90] h-0 mb-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Experience;