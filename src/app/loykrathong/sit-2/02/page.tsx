"use client";

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const nextPage = '/loykrathong/sit-2/03';

        router.prefetch(nextPage);

        const timer = setTimeout(() => {
            router.push(nextPage);
        }, 2000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen w-full bg-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Image
                    src="/smartchoice-website/loykrathong/17.gif"
                    alt="Background"
                    fill
                    className="object-cover sm:object-contain w-full h-full"
                    unoptimized
                    priority={true}
                />
            </div>
        </div>
    );
}
