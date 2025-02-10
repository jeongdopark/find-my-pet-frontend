"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { KakaoLoginDialog } from "../KakaoLoginDialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import LocalStorage from "@/lib/localStorage";
import { useEffect } from "react";
import useIsLoginStore from "@/store/loginStore";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();
  const isLogin = useIsLoginStore((state) => state.isLogin)
  const setLogin = useIsLoginStore((state) => state.setLogin)
  const setLogout = useIsLoginStore((state) => state.setLogout)

 useEffect(() => {
  if(LocalStorage.getItem('at')) {
    setLogin()
  }
  else {
    setLogout()
    LocalStorage.removeItem('email')
    LocalStorage.removeItem('name')
    LocalStorage.removeItem('role')
  }
 }, [])
  return (
    <div className="w-full flex justify-center border-b px-6">
      <nav className="flex items-center h-16 max-w-[1280px] w-full justify-between">
        <div className="font-bold hover:cursor-pointer" onClick={() => router.push("/")}>
          Find My Pet
        </div>
        <div className="flex gap-6">
          <Button variant="outline">
            <Link href="/posts">자료실</Link>
          </Button>
          {
              isLogin ? 
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer p-2 border border-b-2">
                    <AvatarImage src="../../favicon.ico" alt="@shadcn" />
                    <AvatarFallback>-</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="border-1 z-50">
                  <div className="w-[120px] p-3 shadow-lg z-50 rounded-md bg-gray-50 flex flex-col gap-3">
                    <Button variant="outline" className="font-bold"><Link href="/profile">마이페이지</Link></Button>
                    <Button variant="outline" className="font-bold" onClick={() => {
                      LocalStorage.removeItem('at')
                      LocalStorage.removeItem('rt')
                      LocalStorage.removeItem('email')
                      LocalStorage.removeItem('name')
                      LocalStorage.removeItem('role')
                      setLogout()
                      router.push('/')
                    }}>로그아웃</Button>
                  </div>
                </PopoverContent>
              </Popover>
                :
              <KakaoLoginDialog>
                <Button variant="outline">로그인</Button>
              </KakaoLoginDialog>
          }
        </div>
      </nav>
    </div>
  );
}
