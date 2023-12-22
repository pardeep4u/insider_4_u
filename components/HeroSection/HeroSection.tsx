import React from "react";

export function HeroSection({
  setSearchAccount,
}: {
  setSearchAccount: (searchAccount: string) => void;
}) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAccount(e.target.value);
  };

  return (
    <div className="bg-[#078FFD] text-white py-40 gap-5 flex items-center justify-center flex-col">
      <div className="text-5xl font-bold">
        Unlock the Power of{" "}
        <span
          className="bg-gradient-to-r from-[#FF4081] to-[#f1b5c9]
 text-transparent bg-clip-text"
        >
          Insider4u
        </span>
      </div>
      <div className="text-2xl font-medium">
        Elevate Your Profile,Take Your Instagram to New Heights{" "}
      </div>
      <div className="w-1/3">
        <input
          className="w-full py-2 px-4 rounded-lg text-black font-semibold"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
