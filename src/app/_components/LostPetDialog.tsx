import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { LostPetForm } from "./LostPetForm";

export function LostPetDialog({ children }: { children: React.ReactElement }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>실종 동물 등록</DialogTitle>
        </DialogHeader>
        <LostPetForm />
        <DialogFooter className="sm:justify-start">
          <Button type="button">등록</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
