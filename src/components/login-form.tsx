"use client"

import {useRouter} from 'next/navigation'
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useState} from "react";

export function LoginForm({
                              className,
                              ...props
                          }: React.ComponentProps<"div">) {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();

        // Validate credentials
        if (userId === "01" && password === "123") {
            // Set expiration time to 10 minutes from now
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000)); // 10 minutes in milliseconds

            // Set the cookie 'verify' to true with expiration
            document.cookie = `verify=true; path=/; expires=${expirationDate.toUTCString()}`;

            // Redirect to another page or handle success
            router.push("/");
        } else {
            setError("Invalid user ID or password.");
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your ID below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="ID">User ID</Label>
                                <Input
                                    id="ID"
                                    type="text"
                                    required
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <div className="flex flex-col gap-3">
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
