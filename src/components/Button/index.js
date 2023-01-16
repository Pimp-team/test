import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  RoundedBorder22: "rounded-radius225",
  RoundedBorder13: "rounded-radius135",
};
const variants = {
  OutlinePinkA40090: "border border-pink_A400_90 border-solid text-pink_A400",
  FillDeeppurple600: "bg-deep_purple_600 text-white_A700",
  FillPink20063: "bg-pink_200_63 text-pink_200",
  FillDeeppurple700: "bg-deep_purple_700 text-pink_200",
  FillPinkA400: "bg-pink_A400 text-white_A700",
};
const sizes = {
  sm: "sm:p-[3px] md:p-[4px] p-[7px]",
  md: "p-[12px] sm:p-[6px] md:p-[8px]",
  lg: "md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px]",
  xl: "md:p-[15px] p-[22px] sm:px-[15px] sm:py-[11px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "RoundedBorder22",
    "RoundedBorder13",
  ]),
  variant: PropTypes.oneOf([
    "OutlinePinkA40090",
    "FillDeeppurple600",
    "FillPink20063",
    "FillDeeppurple700",
    "FillPinkA400",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder22",
  variant: "FillPink20063",
  size: "md",
};

export { Button };
