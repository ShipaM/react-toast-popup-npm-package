import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Notification from "./Notification";

const meta = {
  title: "Example/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Succes: Story = {
  args: {
    type: "success",
    message: "Succes message",
    duration: 3000,
    animation: "fade",
    onClose: () => alert("Success notification message!"),
  },
};
export const Info: Story = {
  args: {
    type: "info",
    message: "Info message",
    duration: 3000,
    animation: "pop",
    onClose: () => alert("Info notification message!"),
  },
};
export const Warning: Story = {
  args: {
    type: "warning",
    message: "Warning message",
    duration: 3000,
    animation: "slide",
    onClose: () => alert("Warning notification message!"),
  },
};
