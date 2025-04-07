"use client";

import {useRouter} from 'next/navigation';
import Image from 'next/image';
import {BlurFade} from "@/components/magicui/blur-fade";
import {Button} from "@/components/ui/button";

export default function Home() {
    const router = useRouter();

    return (
        <div className="h-full w-full bg-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Image
                    src="../loykrathong/24.png"
                    alt="Background"
                    fill
                    className="object-cover sm:object-contain w-full h-full"
                    unoptimized
                    priority={true}
                />
            </div>
            <div className="fixed bottom-90 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4">
                <BlurFade delay={0.3} className="flex flex-col space-y-4" inView>
                    <Button
                        variant="outline"
                        className="text-[24px] px-8 py-6"
                        onClick={() => router.push('/')}
                    >
                        เริ่มใหม่
                    </Button>
                    <Button
                        variant="outline"
                        className="text-[24px] px-8 py-6"
                        onClick={() => router.push('/advice')}
                    >
                        ให้คำปรึกษา
                    </Button>
                </BlurFade>
            </div>
        </div>
    );
}