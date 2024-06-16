import classNames from "classnames";
import React from "react";

function Button({
  type,
  disabled,
  children,
  className,
  onClick,
}: {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "transition-all duration-300 ease-in-out p-2 block",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
