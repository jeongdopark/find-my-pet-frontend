import { Button } from "../ui/button";

export default function Navigation() {
  return (
    <div className="w-full flex justify-center border-b px-6">
      <nav className="flex items-center h-16 max-w-[1280px] w-full justify-between">
        <div className="font-bold">Find My Pet</div>
        <div className="flex gap-6">
          <Button variant="outline">로그인</Button>
        </div>
      </nav>
    </div>
  );
}
