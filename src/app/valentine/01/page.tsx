"use client";

import {useEffect} from 'react';
import {redirect, useRouter} from 'next/navigation';
import Image from 'next/image';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Prefetch the target route immediately
        router.prefetch('/valentine/02');


        // Set timeout for the actual navigation
        const timer = setTimeout(() => {
            redirect('/valentine/02');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [router]);

    return (
        <div className="min-h-screen w-full bg-white relative overflow-hidden">
            <div className="fixed inset-0 z-0">
                <Image
                    src="./public/valentine/01.png"
                    alt="Background"
                    fill
                    className="object-cover sm:object-contain w-full h-full"
                    priority  // Ensures highest loading priority for current image
                    sizes="100vw"  // Properly handle responsive image sizing
                />
            </div>
        </div>
    );
}
