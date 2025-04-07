"use client"

import {Button} from "@/components/ui/button";
import {BlurFade} from "@/components/magicui/blur-fade";
import {AnimatedGradientText} from "@/components/magicui/animated-gradient-text";
import {useRouter} from 'next/navigation'
import {useEffect} from "react";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        router.prefetch('/valentine/01');
    }, [router]);

    const handleValentineClick = () => { // Removed 'event' parameter
        const cookies = document.cookie.split("; ");
        const verifyCookie = cookies.find((cookie) => cookie.startsWith("verify="));
        const isVerified = verifyCookie && verifyCookie.split("=")[1] === "true";

        if (isVerified) {
            router.push("/valentine/01");
        } else {
            router.push("/login");
        }
    };

    const handleLoyKraThongClick = () => { // Removed 'event' parameter
        const cookies = document.cookie.split("; ");
        const verifyCookie = cookies.find((cookie) => cookie.startsWith("verify="));
        const isVerified = verifyCookie && verifyCookie.split("=")[1] === "true";

        if (isVerified) {
            router.push("/loykrathong/01");
        } else {
            router.push("/login");
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-background">
            {/* Background animated grid */}
            <div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#d6aaaa] to-[#eb91c2]">
                <section id="homepage" className="min-h-screen flex flex-col items-center justify-center pb-16">
                    <BlurFade delay={0.3} inView>
                        <h2 className="text-pretty text-center font-bold tracking-tighter text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] text-white">
                            Smart
                            <AnimatedGradientText speed={2} colorFrom="#fff143" colorTo="#fff143">
                                Choice
                            </AnimatedGradientText>
                        </h2>
                    </BlurFade>
                    <BlurFade delay={0.6} className="-mt-4 md:-mt-6 lg:-mt-7" inView>
                        <h2 className="mt-2 text-pretty text-center text-white tracking-tighter text-[1rem] md:text-[1rem] lg:text-[1rem]">
                            เมื่อตกอยู่ในสถานการณ์ดังกล่าวคุณจะเลือกอย่างไรให้ปลอดภัย<br/>โปรดเลือกสถานการณ์จำลอง
                        </h2>
                    </BlurFade>
                    <BlurFade delay={0.9} className="mt-8 flex justify-center" inView>
                        <Button variant="outline"
                                className="px-5 py-5 text-[18px] rounded-2xl relative overflow-hidden mr-4"
                                onClick={handleValentineClick}>
                            <span className="relative z-10 translate-y-[7%]">วันวาเลนไทน์</span>
                        </Button>
                        <Button variant="outline"
                                className="px-5 py-5 text-[18px] rounded-2xl relative overflow-hidden"
                                onClick={handleLoyKraThongClick}>
                            <span className="relative z-10 translate-y-[7%]">วันลอยกระทง</span>
                        </Button>
                    </BlurFade>
                </section>
                <BlurFade delay={1.2} className="absolute bottom-40 left-1/2 transform -translate-x-1/2" inView>
                    <Button variant="link" className=" text-white text-[18px]"
                            onClick={() => router.push('/advice')}>ช่องทางปรึกษา</Button>
                </BlurFade>
                <BlurFade delay={1.2} className="absolute bottom-30 left-1/2 transform -translate-x-1/2" inView>
                    <Button variant="link" className=" text-white text-[18px]"
                            onClick={() => router.push('/methods')}>วิธีการคุมกำเนิด</Button>
                </BlurFade>
            </div>
        </div>
    );
}