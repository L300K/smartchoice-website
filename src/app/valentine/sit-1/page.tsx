"use client"

import Image from 'next/image';
import {BlurFade} from "@/components/magicui/blur-fade";
import {Button} from "@/components/ui/button";
import {useRouter} from 'next/navigation'
import {useEffect} from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.prefetch('/valentine/sit-1/01');
        router.prefetch('/valentine/sit-1/03');
    }, [router]);

    return (
        <div className="h-screen w-full bg-gray-100 relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Image
                    src="./public/valentine/04.png"
                    alt="Background"
                    fill
                    className="object-cover sm:object-contain h-screen w-full"
                    unoptimized
                    priority={true}
                />
            </div>

            <div
                className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full space-y-8 md:space-y-20 p-4">
                <BlurFade delay={0.2} inView>
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-blue-600"></div>
                        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-gray-800">
                            <p>วันนี้วันเล่นไทน์เราหาอะไรทำกันมั้ย</p>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={0.6} inView>
                    <div className="flex items-center space-x-3 flex-row-reverse">
                        <div className="w-12 h-12 rounded-full bg-pink-600 ml-3"></div>
                        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-gray-800">
                            <p>ได้สิทำอะไรกันดี</p>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={1.0} inView>
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-blue-600"></div>
                        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-gray-800">
                            <p>ไปดู Netflix ห้องเรากันมั้ย</p>
                        </div>
                    </div>
                </BlurFade>
            </div>

            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <BlurFade delay={0.3} className="flex space-x-4" inView>
                    <Button
                        variant="outline"
                        className="text-[24px] px-8 py-6"
                        onClick={() => router.push('/valentine/sit-1/01')}
                    >
                        ตอบตกลง
                    </Button>
                    <Button
                        variant="outline"
                        className="text-[24px] px-8 py-6"
                        onClick={() => router.push('/valentine/sit-1/03')}
                    >
                        ไปที่อื่น
                    </Button>
                </BlurFade>
            </div>
        </div>
    );
}