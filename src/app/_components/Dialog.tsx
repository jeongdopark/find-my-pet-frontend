import { Copy } from "lucide-react";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";

export function BasicDialog({ children }: { children: React.ReactElement }) {
  const handleKakaoLogin = () => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=970edb7ddb56fe95881fe5ad38de1ee7&redirect_uri=http://localhost:3000/auth/kakao`;
    window.location.href = kakaoAuthURL;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Find My Pet</DialogTitle>
          <DialogDescription>Find My Pet에 오신 것을 환영합니다.</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button type="button" onClick={handleKakaoLogin}>
            Kakao
          </Button>
          <Button type="button">Google</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
