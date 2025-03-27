import React from "react";

const Button = ({
  children,
  variant,
  classes,
  clickFn
}: {
  children: React.ReactNode;
  variant: "primary" | "outline";
  classes?: string;
  clickFn?: () => void
}) => {
  const v = {
    primary: "bg-[#46a358] text-white font-medium border-2 border-[#46a358]",
    outline: "bg-[#fff] text-[#46a358] border-2 border-[#46a358] font-medium",
  };
  return (
    <button
    onClick={clickFn}
      className={`py-[7px] px-[17px] rounded-[6px] flex items-center gap-1 ${v[variant]} ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
