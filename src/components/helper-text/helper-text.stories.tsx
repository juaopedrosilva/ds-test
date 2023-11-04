import * as React from "react";

import { HelperText } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Helper Text",
  component: HelperText,
  tags: ["autodocs"]
} satisfies Meta<typeof HelperText>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Description: Story = {
  render: () => <HelperText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</HelperText>
};

export const Error: Story = {
  render: () => (
    <HelperText type="error">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</HelperText>
  )
};
