import {LoginForm} from "@/components/login-form"
import {AnimatedGradientText} from "@/components/magicui/animated-gradient-text";

export default function Login() {
    return (
        <div
            className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-r from-[#d6aaaa] to-[#eb91c2]">
            <div className="">
                <h2 className="text-pretty text-center font-bold tracking-tighter text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] text-white">
                    Smart
                    <AnimatedGradientText speed={2} colorFrom="#fff143" colorTo="#fff143">
                        Choice
                    </AnimatedGradientText>
                </h2>
                <LoginForm/>
            </div>
        </div>
    );
}