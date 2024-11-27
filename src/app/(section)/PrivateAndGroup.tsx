import { Icons } from "@/components/Icon";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PrivateAndGroup = ({ }) => {
    return (
        <section className=" relative flex h-screen w-full items-center justify-center "
            style={{
                backgroundImage: "url(/images/privateandgroupingbg.png)"
            }} >
            <div className="flex h-full w-full items-center justify-center gap-6 py-8 md:py-24 px-6 lg:px-16" >
                <div className="w-0 lg:w-1/2">
                </div>
                <div
                    className="flex h-fit lg:h-full w-full flex-col items-center justify-center gap-6 lg:w-1/2 px-7 py-10 bg-[#040404]">
                    <h3 className="font-mono uppercase flex gap-2 items-center justify-center">
                        <div className="py-[1px] w-14 bg-[#DCCF90] h-0"></div>
                        <span
                            className="text-lg font-thin font-mono uppercase text-[#DCCF90] leading-[80%] tracking-[5px]">Booking</span>
                        <div className="py-[1px] w-14 bg-[#DCCF90] h-0"></div>
                    </h3>
                    <h1 className="text-4xl font-medium font-mono uppercase text-[#DCCF90] leading-[50px] tracking-[5px] text-center"
                        style={{
                            fontFamily: "'Marcellus SC', serif"
                        }} >
                        Private < br /> & Group Dining </h1>
                    <p className="lg:max-w-[600px] px-2 text-center font-light leading-[160%] text-[#C1B6A6] md:px-0">
                        For private and group dining, Ephesus offers the perfect setting for an unforgettable experience,
                        whether it`s a family gathering, celebration, or business event. With our authentic Turkish cuisine,
                        personalized service, and warm ambiance, we ensure your group enjoys a truly remarkable meal
                        together. To book your private or group dining, please visit our Contact Us section for more
                        information and reservations.
                    </p>
                    <Link className=" px-6 py-4 flex w-fit items-center gap-3 bg-primary text-black transition-colors uppercase text-sm tracking-[1.96px] font-[600]"
                        href="/contact">
                        Contact Us
                        <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1" />
                    </Link>
                </div>
            </div >
        </section >
    );
};

export default PrivateAndGroup;