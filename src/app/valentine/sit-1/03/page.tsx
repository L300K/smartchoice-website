"use client"

import Image from 'next/image';
import {BlurFade} from "@/components/magicui/blur-fade";
import {useRouter} from 'next/navigation'
import {useEffect} from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const nextPage = '/valentine/sit-1/04';

        router.prefetch(nextPage);

        const timer = setTimeout(() => {
            router.push(nextPage);
        }, 8000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen w-full bg-gray-100 relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Image
                    src="./public/valentine/04.png"
                    alt="Background"
                    fill
                    className="object-cover sm:object-contain w-full h-full"
                    unoptimized
                    priority={true}
                />
            </div>

            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full space-y-20 p-4">
                <BlurFade delay={0.2} inView>
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-blue-600"></div>
                        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-gray-800">
                            <p>งั้นไปดูหนังที่ 14 cineplex กัน</p>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={0.6} inView>
                    <div className="flex items-center space-x-3 flex-row-reverse">
                        <div className="w-12 h-12 rounded-full bg-pink-600 ml-3"></div>
                        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-gray-800">
                            <p>ดูหนังที่ 14 cineplex ก็ดีเหมือนกัน</p>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={1.0} inView>
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-blue-600"></div>
                        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-gray-800">
                            <p>งั้นเจอกัน 6 โมงนะ</p>
                        </div>
                    </div>
                </BlurFade>

                <BlurFade delay={1.4} inView>
                    <div className="flex items-center space-x-3 flex-row-reverse">
                        <div className="w-12 h-12 rounded-full bg-pink-600 ml-3"></div>
                        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs text-gray-800">
                            <p>โอเคตั้งใจเรียนนะ</p>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </div>
    );
}
