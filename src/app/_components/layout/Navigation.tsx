"use client";
import { BasicDialog } from "../Dialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  return (
    <div className="w-full flex justify-center border-b px-6">
      <nav className="flex items-center h-16 max-w-[1280px] w-full justify-between">
        <div className="font-bold hover:cursor-pointer" onClick={() => router.push("/")}>
          Find My Pet
        </div>
        <div className="flex gap-6">
          <BasicDialog>
            <Button variant="outline">로그인</Button>
          </BasicDialog>
        </div>
      </nav>
    </div>
  );
}
