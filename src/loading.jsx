import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex gap-4 w-full h-screen items-center justify-center bg-black">
      <img
        alt="logo"
        src="https://files.kampunginggrislc.com/2022/06/logo-lc-png-white.png"
        className="w-[100px]"
      />
      <Spinner color="white" />
    </div>
  );
}
