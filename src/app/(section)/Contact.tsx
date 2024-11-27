'use client'
// import { Button } from "@/components/ui/button"
// import { ArrowDown } from "lucide-react"
// import Image from "next/image"
import { Icons } from "@/components/Icon"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"


const FormValidation = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits." }),
    reason: z.string(),
    message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({ }) => {
    const form = useForm<FormData>({
        resolver: zodResolver(FormValidation),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            reason: "",
            message: "",
        },
    });

    const onSubmit = (data: FormData) => {
        bookTableMutation.mutate(data);
    };

    const bookTableMutation = useMutation({
        mutationFn: async (values: z.infer<typeof FormValidation>) => {
            return await axios.post("/api/contact", values);
        },
        onSuccess: () => {
            toast.success(
                "Your message has been submitted successfully. We will get back to you soon",
            );
            form.reset();
        },
        onError: () => {
            toast.error(
                "There was an error submitting your message. Please try again later",
            );
        },
    });
    return (
        <section id="contact" className="flex h-full w-full items-center justify-center pt-8"
            style={{
                backgroundImage: "url('/images/contact.png')"
            }}>
            <div className="flex h-full w-full flex-col gap-[2.5rem] px-0 pl-0 md:px-2">
                <div className="flex w-full flex-col lg:flex-row">
                    <div className="flex w-full flex-col  pb-24 pt-5 lg:w-1/2 px-6 lg:px-28 gap-10">
                        <div className="flex flex-col gap-8">
                            <h3 className="font-mono uppercase flex gap-2 items-center">
                                <span
                                    className="text-md font-thin font-mono uppercase text-[#DCCF90] leading-[80%] tracking-[5px]">Contact
                                    us</span>
                                <div className="py-[0.5px] w-14 bg-[#DCCF90] h-0"></div>
                            </h3>
                            <h1 className="text-4xl font-medium font-mono uppercase text-[#DCCF90] leading-[50px] tracking-[5px]"
                                style={{ fontFamily: "'Marcellus SC' , serif" }}>
                                Get in Touch<br /> with Ephesus</h1>
                        </div>
                        <div>
                            <div className="flex gap-6 border-b-[1px] border-b-[#23221b] pb-7">
                                <div>
                                    <div className="h-fit w-fit rounded-full text-[#BC995D] p-2">
                                        <Icons.target />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Link
                                        href="https://www.google.com/maps/place/Ephesus+-+Authentic+Turkish+Cuisine/@53.6126972,-2.1878943,15z/data=!4m2!3m1!1s0x0:0x128b4665d794e81?sa=X&ved=1t:2428&ictx=111">
                                        <p className="text-[#FBEAD2]">
                                            80-82 Preston Street, <br />Brighton BN1 2HG England
                                        </p>
                                    </Link>
                                    <Link
                                        href="https://maps.app.goo.gl/B5Hphbdh2hhN3J6r9">
                                        <p className="flex gap-2 text-sm text-[#BC995D] items-center">
                                            <span>Get Direction</span>
                                            <ArrowRight />
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 border-b-[1px] border-b-[#23221b] pb-7 pt-6">
                                <div>
                                    <div className="h-fit w-fit rounded-full text-[#BC995D] p-2">
                                        <Phone />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Link href="tel:+441273329989" className="text-[#FBEAD2]">+44 1273 329989</Link>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 border-b-[1px] border-b-[#23221b] pb-7 pt-6">
                                <div>
                                    <div className="h-fit w-fit rounded-full text-[#BC995D] p-2">
                                        <Icons.mail />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-[#FBEAD2] border-b-[1px] border-b-[#FBEAD2]">
                                        info@ephesus-brighton.co.uk
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col pb-24 pt-5 lg:w-1/2 lg:items-center lg:justify-center">
                        <div className="w-full px-3 lg:w-3/5 lg:px-0">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                                    <div className="flex gap-4 pt-7">
                                        <div className="flex w-full flex-col gap-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormControl>
                                                            <Input
                                                                placeholder="First Name"
                                                                {...field}
                                                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Phone"
                                                                {...field}
                                                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Email"
                                                                {...field}
                                                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="reason"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Reason for contacting (optional)"
                                                                {...field}
                                                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Your Message"
                                                                {...field}
                                                                className="h-24 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0c0c0c] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-col pt-7 lg:flex-row">
                                        <Button className="w-full py-6" disabled={bookTableMutation.isPending}>Contact US</Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default Contact