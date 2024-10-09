import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";

export function KakaoLoginDialog({ children }: { children: React.ReactElement }) {
  
  const handleKakaoLogin = () => {
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=http://localhost:3000/auth/kakao`;
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
