"use client"

import {AnimatedGradientText} from "@/components/magicui/animated-gradient-text";
import {Button} from "@/components/ui/button"
import {useRouter} from "next/navigation";

export default function AdvicePage() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    return (
        <div
            className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-gradient-to-r from-[#d6aaaa] to-[#eb91c2]">
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-pretty text-center font-bold tracking-tighter text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] text-white">
                    Smart
                    <AnimatedGradientText speed={2} colorFrom="#fff143" colorTo="#fff143">
                        Choice
                    </AnimatedGradientText>
                </h2>
                <div
                    className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
                    <h3 className="text-xl font-semibold text-red-600 mb-4">
                        ปรึกษาปัญหาทางเลือกในการคุมกำเนิดได้ที่
                    </h3>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="text-red-600 text-2xl">สายด่วน 1663</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-4 -mt-3.5">
                        ตั้งแต่เวลา 09.00 น. - 21.00 น.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        สนทนากับผู้เชี่ยวชาญ <br/>ตั้งแต่เวลา 09.00 น. - 18.00 น.
                    </p>
                </div>
                <Button variant="outline" onClick={handleClick}>
                    หน้าหลัก
                </Button>
            </div>
        </div>
    );
}