import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import "./Button.css";
import { action } from "@storybook/addon-actions";

// Meta information configuration for Storybook
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered", // Centers the component in Storybook
  },
  tags: ["autodocs"], // Enable auto documentation
  argTypes: {
    theme: {
      control: "select",
      options: [
        "clear",
        "clear-inverted",
        "outline",
        "background",
        "background-inverted",
      ], // Available options for selecting the theme
    },
    size: {
      control: "select",
      options: ["size-m", "size-l", "size-xl"], // Available button sizes
    },
    disabled: {
      control: "boolean", // Controller to check the disabled state
    },
    square: {
      control: "boolean", // Controller to check the square state
    },
    isLoading: {
      control: "boolean",
    },
    isLoadingIconStart: {
      control: "boolean",
    },
    isLoadingIconEnd: {
      control: "boolean",
    },
  },
  args: {
    children: "Button", // Default value for the button text
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Story for a button with the "CLEAR" theme
export const Clear: Story = {
  args: {
    theme: "clear",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "OUTLINE" theme
export const Outline: Story = {
  args: {
    theme: "outline",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "BACKGROUND" theme
export const Background: Story = {
  args: {
    theme: "background",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "CLEAR_INVERTED" theme
export const ClearInverted: Story = {
  args: {
    theme: "background-inverted",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "BACKGROUND_INVERTED" theme
export const BackgroundInverted: Story = {
  args: {
    theme: "background-inverted",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "M" size
export const Medium: Story = {
  args: {
    size: "size-m",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "L" size
export const Large: Story = {
  args: {
    size: "size-l",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "XL" size
export const XLL: Story = {
  args: {
    size: "size-xl",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "disabled" flag
export const Disabled: Story = {
  args: {
    isDisabled: true,
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "square" flag
export const Square: Story = {
  args: {
    square: true,
    children: "<",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with a theme, size, and the "square" flag
export const ClearLargeSquare: Story = {
  args: {
    theme: "clear",
    size: "size-l",
    square: true,
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "XL" size and "BACKGROUND" theme
export const BackgroundXL: Story = {
  args: {
    size: "size-xl",
    theme: "background",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with the "CLEAR_INVERTED" theme and is disabled
export const ClearInvertedDisabled: Story = {
  args: {
    theme: "background-inverted",
    isDisabled: true,
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with start and end icons
export const ButtonWithIcons: Story = {
  args: {
    startButtonIcon: "<",
    endButtonIcon: ">",
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with loading icon end
export const ButtonWithisLoadingIconEnd: Story = {
  args: {
    theme: "background-inverted",
    isLoadingIconEnd: true,
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with loading icon end
export const ButtonWithisLoadingIconStart: Story = {
  args: {
    theme: "background-inverted",
    isLoadingIconStart: true,
    onClick: () => action("Button is clicked")(),
  },
};

// Story for a button with custom aria-label
export const ButtonWithAriaLabel: Story = {
  args: {
    ariaLabel: "Custom aria label",
    onClick: () => action("Button is clicked")(),
  },
};
