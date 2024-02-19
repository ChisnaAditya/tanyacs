import { useNavigate } from "react-router-dom";

export default function Konfirmasi() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-[#FCCF00]">
      <div className="basis-1/2 p-2 lg:p-10 flex flex-col justify-between h-full custom-bg-shape">
        <article className="prose text-center text-black">
          <h1>TERIMAKASIH</h1>
          <p className="font-bold italic ">
            Setelah ini kamu akan diarahkan ke customer service kami. Cek
            Whatsapp kamu sekarang untuk tanya-tanya CS by Whatsapp.
          </p>
        </article>
        <img
          alt="logo"
          src="https://kampunginggrislc.com/wp-content/uploads/2023/11/logo-lc-landing-page.webp"
          className="w-[100px] lg:w-[150px] mx-auto"
        />
        <div className="social">
          <p className="text-center font-bold">Find us on</p>
          <div className="divider border-b-1 border-black w-1/3 my-2 mx-auto"></div>
          <div className="flex items-center justify-center gap-4 pt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={30}
              height={30}
              className="fill-[#000000] animate-bounce hover:cursor-pointer hover:animate-none"
              onClick={() =>
                window.open("https://www.instagram.com/kampunginggrislc")
              }
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width={30}
              height={30}
              className="fill-[#000000] animate-bounce-normal hover:cursor-pointer hover:animate-none"
              onClick={() =>
                window.open("https://www.youtube.com/@kampunginggrislc")
              }
            >
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={30}
              height={30}
              className="fill-[#000000] animate-bounce-fast hover:cursor-pointer hover:animate-none"
              onClick={() =>
                window.open("https://www.tiktok.com/@kampunginggrislccom")
              }
            >
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="basis-1/2 hero custom-bg-terimakasih w-full h-screen"></div>
    </div>
  );
}
