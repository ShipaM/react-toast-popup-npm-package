import React, { AriaAttributes, ButtonHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import "./Button.css";

export type TButtonProps = {
  theme?:
    | "clear"
    | "clear-inverted"
    | "outline"
    | "background"
    | "background-inverted"; //Theme of the button, determining its colors and shape.
  size?: "size-m" | "size-l" | "size-xl"; //Size of the button.
  startButtonIcon?: string | React.ReactNode; //Start of the button icon.
  children?: string | React.ReactNode; //Button content.
  endButtonIcon?: string | React.ReactNode; //End of the button icon.
  onClick?: (event?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void; //Function that should run when the button is clicked.
  isDisabled?: boolean; //Is this button disabled - if so, it can't be pressed nor focused.
  type?: "button" | "submit" | "reset"; //The default behavior of the button, "button" has no default action, "submit" submits form data and "reset" resets all controls to their initial values.
  ariaLabel?: AriaAttributes["aria-label"]; //The aria-label attribute defines a string value that labels an interactive element. It is recommended to pass it especially when Button consists of only an Icon.
  isLoading?: boolean; //Flag indicating whether the button should have loader.
  isLoadingIconStart?: boolean; //Flag indicating whether the button should have loader.
  isLoadingIconEnd?: boolean; //Flag indicating whether the button should have loader.
  "data-testid"?: string; // data-testId
  className?: string; // custom class
  square?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<TButtonProps> = forwardRef(
  ({
    children,
    isDisabled,
    onClick,
    size = "large",
    theme = "business_primary_filled",
    ariaLabel,
    type = "button",
    isLoading = false,
    isLoadingIconStart = false,
    isLoadingIconEnd = false,
    "data-testid": testId,
    startButtonIcon,
    endButtonIcon,
    className,
    square,
    ...otherProps
  }) => {
    const handleClick = (
      event: React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) => {
      if (!isDisabled && onClick) {
        onClick(event);
      }
    };

    const mods: Record<string, boolean | undefined> = {
      ["square"]: square,
      ["disabled"]: isDisabled,
    };

    return (
      <button
        className={classNames(
          "button",
          { ["square"]: square, ["disabled"]: isDisabled },
          [className, theme, size]
        )}
        onClick={handleClick}
        disabled={isLoading || isDisabled}
        data-testid={testId}
        aria-label={ariaLabel}
        type={type}
        {...otherProps}
      >
        {isLoadingIconStart && <span className="spinner"></span>}
        {startButtonIcon && (
          <span className="start-icon">{startButtonIcon}</span>
        )}
        {children}
        {isLoadingIconEnd && <span className="spinner"></span>}
        {endButtonIcon && <span className="end-icon">{endButtonIcon}</span>}
      </button>
    );
  }
);
