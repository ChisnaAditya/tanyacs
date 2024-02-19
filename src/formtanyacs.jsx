import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { UserIcon } from "./icon/UserIcon";
import { ContactIcon } from "./icon/ContactIcon";
import { BookIcon } from "./icon/BookIcon";
import { RocketIcon } from "./icon/RocketIcon";
import Loading from "./loading";
import { programs } from "./data";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [utm_source, setUtmSource] = useState("");
  const [utm_medium, setUtmMedium] = useState("");

  const [cabang, setCabang] = useState("");
  const allCabang = [
    "pare",
    "online",
    "bogor",
    "jogja",
    "bandung",
    "lampung",
    "serang",
  ];
  // const allCS = [
  //   {
  //     nama: "CS NADA",
  //     nomor: "6281231393140",
  //   },
  //   {
  //     nama: "CS CELSY",
  //     nomor: "6281231250390",
  //   },
  //   {
  //     nama: "CS FITA",
  //     nomor: "6285231111117",
  //   },
  //   {
  //     nama: "CS IMEL",
  //     nomor: "6285864144024",
  //   },
  //   {
  //     nama: "CS HANA",
  //     nomor: "628155066203",
  //   },
  // ];

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setIsLoading(!isLoading);
      setTimeout(() => {
        resolve();
        setIsLoading(false);

        let parameters = `utm_source=${utm_source}&utm_medium=${utm_medium}&nama=${data.nama.toUpperCase()}&whatsapp=${
          data.whatsapp
        }&program=${data.program.toUpperCase()}&cabang=${cabang.toUpperCase()}`;
        console.log(parameters);
        console.log(data);

        window.open(
          `https://kampunginggrislc.com/api/wa/konfirmasi/baru.php?${parameters}`
        );

        // window.location.href = `https://kampunginggrislc.com`;
        navigate("/terimakasih");
      }, 1000);
    });
  };

  useEffect(() => {
    setCabang(searchParams.get("cabang"));

    if (searchParams.get("utm_source") !== null) {
      setUtmSource(searchParams.get("utm_source"));
    } else {
      setUtmSource(localStorage.getItem("utm_source"));
    }

    if (searchParams.get("utm_medium")) {
      setUtmMedium(searchParams.get("utm_medium"));
    } else {
      setUtmMedium(localStorage.getItem("utm_medium"));
    }
  }, [searchParams, setUtmSource, setUtmMedium]);

  if (!allCabang.includes(cabang)) {
    return <Loading />;
  }

  if (cabang.length <= 0) {
    return <Loading />;
  }

  return (
    <div className="lg:grid grid-cols-2 items-center justify-center min-h-screen">
      <div className="hidden lg:flex flex-col items-center justify-center w-full h-screen bg-yellow-400 shadow-xl rounded-e-[2rem] custom-bg-shape">
        <article className="prose mb-10 text-center">
          <img
            alt="logo"
            src="https://files.kampunginggrislc.com/2022/06/logoLC.png"
            className="w-1/4 mx-auto"
          />
        </article>
      </div>
      <div className="w-full h-screen p-5 lg:p-20">
        <article className="prose mb-10 text-center">
          <h1>
            {" "}
            Kampung Inggris LC |{" "}
            <span className="px-1 py-0 bg-yellow-400">
              {cabang.toUpperCase()}
            </span>
          </h1>
          <p className="italic">
            Untuk tanya CS by{" "}
            <span className="px-1 py-0 bg-yellow-400 ">Whatsapp</span>, silakan{" "}
            <span className="font-bold">isi form</span> dibawah ini ya, setelah
            ini kamu akan diarahkan ke whatsapp CS!
          </p>
        </article>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 justify-center items-center shadow-2xl rounded-3xl px-10 py-10"
        >
          <Input
            label="Nama"
            radius="lg"
            startContent={<UserIcon />}
            placeholder="Tulis nama kamu di sini..."
            {...register("nama", { required: true, minLength: 3 })}
            errorMessage={errors.nama && "Nama minimal 3 huruf"}
          />
          <Input
            label="No. Whatsapp"
            type="tel"
            // minLength={9}
            maxLength={13}
            radius="lg"
            startContent={<ContactIcon />}
            placeholder="Tulis nomor WA kamu di sini..."
            {...register("whatsapp", { required: true })}
            errorMessage={errors.whatsapp && "Please enter your phone"}
          />
          <Select
            label="Pilihan Program"
            radius="lg"
            placeholder="Pilih program yang kamu inginkan"
            startContent={<BookIcon />}
            {...register("program", { required: true })}
            errorMessage={errors.program && "Please select your program"}
          >
            {programs.map((program) => {
              if (program.cabang === cabang) {
                return (
                  <SelectItem key={program.value} value={program.value}>
                    {program.label}
                  </SelectItem>
                );
              }
            })}
          </Select>
          <Button
            type="submit"
            className="w-full bg-yellow-400"
            isLoading={isLoading}
            startContent={<RocketIcon />}
          >
            Tanya CS
          </Button>
        </form>
        <article className="prose text-center">
          <h1></h1>
          <div className="social">
            Find us on
            <div className="divider border-b-1 w-1/2 mx-auto"></div>
            <div className="flex items-center justify-center gap-4 pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={30}
                height={30}
                className="fill-[#EA1E24] animate-bounce hover:cursor-pointer hover:animate-none"
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
                className="fill-[#EA1E24] animate-bounce-normal hover:cursor-pointer hover:animate-none"
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
                className="fill-[#EA1E24] animate-bounce-fast hover:cursor-pointer hover:animate-none"
                onClick={() =>
                  window.open("https://www.tiktok.com/@kampunginggrislccom")
                }
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </div>
          </div>
          <p className="text-xs">
            {Date().toString()}, {cabang.toUpperCase()}
          </p>
        </article>
      </div>
    </div>
  );
}
