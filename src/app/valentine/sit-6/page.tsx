"use client";

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import {BlurFade} from "@/components/magicui/blur-fade";
import {Button} from "@/components/ui/button";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.prefetch('/valentine/sit-6/01');
    }, [router]);

    return (
        <div className="h-full w-full bg-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Image
                    src="../valentine/29.png"
                    alt="Background"
                    fill
                    className="object-cover sm:object-contain w-full h-full"
                    unoptimized
                    priority={true}
                />
            </div>
            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4">
                <BlurFade delay={0.3} className="flex flex-col space-y-4" inView>
                    <Button
                        variant="outline"
                        className="text-[18px] px-6 py-3"
                        onClick={() => router.push('/valentine/sit-6/01')}
                    >
                        นับวันปลอดภัย
                    </Button>
                    <Button
                        variant="outline"
                        className="text-[18px] px-6 py-3"
                        onClick={() => router.push('/valentine/sit-6/07')}
                    >
                        ยาคุมฉุกเฉิน
                    </Button>
                </BlurFade>
            </div>
        </div>
    );
}