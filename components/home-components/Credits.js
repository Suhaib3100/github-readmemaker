import React from "react";

export default function Credits() {
  const cc = [
    {
      avatar: "https://avatars.githubusercontent.com/u/109773912?v=4",
      name: "Suhaib S Z",
      creditfor: "Complete Platform",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/169369597?s=100&v=4",
      name: "Anurag R",
      creditfor: "GitHub ReadMe Stats",
    },
    {
      avatar: "https://protool.co.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-27-at-17.01.14_58f9d8ce-scaled.jpg",
      name: "Akash G K",
      creditfor: "GitHub ReadMe Streaks",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/81325730?v=4",
      name: "Rehan GUll",
      creditfor: "Random Memes",
    },
    
  ];
  return (
    <div className="flex flex-col w-full items-center my-10 md:my-14 text-green-300">
      <p className="text-4xl font-semibold">Credits</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        We believe in giving credit where it&apos;s due. To all the OG creators,
        we see you and #thank you for creating these awesome tools!
      </p>
      <div className="w-max-[90vw] w-full md:w-8/12 overflow-x-auto">
        <div className="flex flex-row w-max flex-wrap">
          {/* Card */}
          {cc.map((cc, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-56"
            >
              <img
                src={cc.avatar}
                alt=""
                className="rounded-full w-20 h-20 md:w-28 md:h-28"
              />
              <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
              <p className="text-zinc-500">{cc.creditfor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
