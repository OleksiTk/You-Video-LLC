import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isBlue?: boolean;
  width?: string | number;
  height?: string | number;
}

export default function Button({
  text,
  onClick,
  isBlue,
  width,
  height,
}: ButtonProps) {
  return (
    <>
      {isBlue ? (
        <button
          onClick={onClick}
          className="w-full  sm:w-auto px-12 py-5 bg-[#24f4fa] text-black font-black rounded-full text-lg hover:shadow-[0_0_30px_rgba(36,244,250,0.6)] hover:-translate-y-1 transition-all duration-300"
          style={{ width, height }}
        >
          {text}
        </button>
      ) : (
        <button
          onClick={onClick}
          className="w-full  sm:w-auto px-12 py-5 border-2 border-[#24f4fa] text-[#24f4fa] font-black rounded-full text-lg hover:bg-[#24f4fa] hover:text-black transition-all duration-300"
          style={{ width, height }}
        >
          {text}
        </button>
      )}
    </>
  );
}
