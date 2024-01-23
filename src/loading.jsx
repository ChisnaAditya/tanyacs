import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex gap-4 w-full h-screen items-center justify-center bg-black">
      <img alt="logo" src="/logo.webp" className="w-[100px] h-[100px]" />
      <Spinner color="white" />
    </div>
  );
}
