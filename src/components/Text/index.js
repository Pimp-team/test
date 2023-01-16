import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[64px]",
  h2: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "sm:text-[32px] md:text-[34px] text-[36px]",
  h4: "sm:text-[26px] md:text-[28px] text-[30px]",
  h5: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  h6: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  body1: "text-[20px]",
  body2: "text-[18px]",
  body3: "text-[16px]",
  body4: "font-normal text-[15px]",
  body5: "font-normal text-[14px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
