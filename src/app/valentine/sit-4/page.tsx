"use client";

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import {BlurFade} from "@/components/magicui/blur-fade";
import {Button} from "@/components/ui/button";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.prefetch('/valentine/sit-3/01');
    }, [router]);

    return (
        <div className="min-h-screen w-full bg-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Image
                    src="/valentine/13.png"
                    alt="Background"
                    fill
                    className="object-cover sm:object-contain w-full h-full"
                    unoptimized
                    priority={true}
                />
            </div>
            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <BlurFade delay={0.3} className="flex space-x-4" inView>
                    <Button
                        variant="outline"
                        className="text-[24px] px-8 py-6"
                        onClick={() => router.push('/valentine/sit-3/01')}
                    >
                        ขอตัวกลับ
                    </Button>
                    <Button
                        variant="outline"
                        className="text-[24px] px-8 py-6"
                        onClick={() => router.push('/valentine/sit-3/02')}
                    >
                        นอนที่นี่
                    </Button>
                </BlurFade>
            </div>
        </div>
    );
}