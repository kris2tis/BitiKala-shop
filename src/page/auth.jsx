import { useState } from "react";
import { useUsers } from "../Hooks/getData";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Auth() {
    // هوک  انتقال به روت دیگر
    const navigate = useNavigate();
    // uset Hook (custom Hook)
    const { postItem } = useUsers();
    // SignUp state
    let [signUpFildes, setSignUpFildes] = useState({
        userName: "",
        role: "user",
        password: "",
        realName: "",
        isLoggedIn: true,
        hasStory: false,
        email: false,
    });
    const singupHanlder = () => {
        postItem(signUpFildes);

        sessionStorage.setItem(
            "auth",
            JSON.stringify({
                username: signUpFildes.userName,
                role: signUpFildes.role,
                isLoggedIn: signUpFildes.isLoggedIn,
                realName: signUpFildes.realName,
            })
        );
        navigate("/");
    };

    // Log in states
    let [userName, setUserName] = useState();
    let [password, setPassword] = useState();

    const logInHandler = () => {
        axios
            .get(
                `http://localhost:3000/users?userName=${userName}&password=${password}`
            )
            .then((response) => {
                sessionStorage.setItem(
                    "auth",
                    JSON.stringify({
                        username: response.data[0].userName,
                        role: response.data[0].role,
                        isLoggedIn: response.data[0].isLoggedIn,
                        realName: response.data[0].realName,
                    })
                );
                navigate("/");
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <div className="w-full h-screen  column-flex-center flex-row-reverse bg-black px-5 lg:0">
            <div className="w-sm flex-col gap-6">
                <div className="mb-5">
                    <p className="text-[#5d5d5d]">
                        برگشت به صفحه{" "}
                        <Link to="/" className="text-[#ffffff] pr-0.5">
                            اصلی
                        </Link>
                    </p>
                </div>
                <Tabs defaultValue="account" className="">
                    <TabsList>
                        <TabsTrigger value="account">ثبت نام</TabsTrigger>
                        <TabsTrigger value="password">ورود</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        {/* سکشن ثبت نام */}
                        <Card className="flex-col px-5">
                            <CardHeader>
                                <CardTitle>ثبت نام</CardTitle>
                                <CardDescription>
                                    لطفا در وارد کردن اطلاعات خود دقت کنید !
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="realName">نام</Label>
                                    <Input
                                        onChange={(e) =>
                                            setSignUpFildes({
                                                ...signUpFildes,
                                                realName: e.target.value,
                                            })
                                        }
                                        id="realName"
                                        defaultValue="مهدی"
                                        className="text-xs"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="username">نام کاربری</Label>
                                    <Input
                                        onChange={(e) =>
                                            setSignUpFildes({
                                                ...signUpFildes,
                                                userName: e.target.value,
                                            })
                                        }
                                        id="username"
                                        defaultValue="Kris2tis"
                                        className="text-xs"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="username">رمز عبور</Label>
                                    <Input
                                        onChange={(e) =>
                                            setSignUpFildes({
                                                ...signUpFildes,
                                                password: e.target.value,
                                            })
                                        }
                                        id="username"
                                        defaultValue="1234"
                                        className="text-xs"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="email">ایمیل</Label>
                                    <Input
                                        onChange={(e) =>
                                            setSignUpFildes({
                                                ...signUpFildes,
                                                email: e.target.value,
                                            })
                                        }
                                        id="email"
                                        defaultValue="test@gmail.com"
                                        className="text-xs"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="!px-0">
                                <Button
                                    onClick={singupHanlder}
                                    className="border-[1px] border-[#fff]"
                                >
                                    ثبت نام
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        {/* سکشن ورود */}
                        <Card className="flex-col px-5">
                            <CardHeader>
                                <CardDescription>
                                    ورود به حساب کاربری
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="username">نام کاربری</Label>
                                    <Input
                                        onChange={(e) =>
                                            setUserName(e.target.value)
                                        }
                                        id="username"
                                        type="text"
                                        className="text-xs"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="password">رمز عبور</Label>
                                    <Input
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        id="password"
                                        type="password"
                                        className="text-xs"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="!px-0">
                                <Button
                                    onClick={logInHandler}
                                    className="border-[1px] border-[#555]"
                                >
                                    ورود
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
