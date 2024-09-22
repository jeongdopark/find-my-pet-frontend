import { Button } from "../button";

export default function Navigation() {
  return (
    <div className="w-full flex justify-center ">
      <nav className="flex items-center h-16 w-[1280px] bg-blue-300 justify-between">
        <div className="font-bold">Find My Pet</div>
        <div className="flex gap-6">
          <div>Page2</div>
          <div>Page1</div>
          <Button>Login</Button>
        </div>
      </nav>
    </div>
  );
}
