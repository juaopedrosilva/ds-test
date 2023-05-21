import * as React from "react";

import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

import { IconBolt, IconCurrencyDollar } from "../../icons";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    as: {
      control: "text"
    },
    children: {
      control: "text"
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
  args: {
    children: "Label"
  },
  parameters: { pseudo: { hover: true } }
};

export const Basic: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button variant="text" {...args}>
        TEXT
      </Button>
      <Button variant="contained" {...args}>
        CONTAINED
      </Button>
      <Button variant="outlined" {...args}>
        OUTLINED
      </Button>
    </div>
  )
};

export const Text: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args}>PRIMARY</Button>
      <Button {...args} disabled>
        DISABLED
      </Button>
      <Button as="a" href="" {...args}>
        LINK
      </Button>
      <Button as="a" href="" disabled {...args}>
        LINK DISABLED
      </Button>
    </div>
  ),
  args: {}
};

export const Outlined: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args}>PRIMARY</Button>
      <Button {...args} disabled>
        DISABLED
      </Button>
      <Button as="a" href="" {...args}>
        LINK
      </Button>
      <Button as="a" href="" disabled {...args}>
        LINK DISABLED
      </Button>
    </div>
  ),
  args: {
    variant: "outlined"
  }
};

export const Contained: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args}>PRIMARY</Button>
      <Button {...args} disabled>
        DISABLED
      </Button>
      <Button as="a" href="" {...args}>
        LINK
      </Button>
      <Button as="a" href="" disabled {...args}>
        LINK DISABLED
      </Button>
    </div>
  ),
  args: {
    variant: "contained"
  }
};

export const Color: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Button color="neutral" {...args}>
        NEUTRAL
      </Button>
      <Button color="primary" {...args}>
        PRIMARY
      </Button>
      <Button color="success" {...args}>
        SUCCESS
      </Button>
      <Button color="warning" {...args}>
        WARNING
      </Button>
      <Button color="error" {...args}>
        ERROR
      </Button>
    </div>
  ),
  args: {
    variant: "contained"
  }
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex flex-row items-center gap-x-4">
        <Button variant="text" size="sm" {...args}>
          SMALL
        </Button>
        <Button variant="text">MEDIUM</Button>
        <Button size="lg" {...args}>
          LARGE
        </Button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <Button size="sm" variant="outlined">
          SMALL
        </Button>
        <Button variant="outlined">MEDIUM</Button>
        <Button size="lg" variant="outlined">
          LARGE
        </Button>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <Button size="sm" variant="contained">
          SMALL
        </Button>
        <Button variant="contained">MEDIUM</Button>
        <Button size="lg" variant="contained">
          LARGE
        </Button>
      </div>
    </div>
  )
};

export const Block: Story = {
  render: () => (
    <div className="w-52">
      <Button block variant="contained">
        BLOCK
      </Button>
    </div>
  )
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button color="error" variant="contained" startIcon={<IconBolt />}>
        LEFT ICON
      </Button>
      <Button color="primary" endIcon={<IconCurrencyDollar />}>
        RIGHT ICON
      </Button>
    </div>
  )
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button color="error" variant="contained" loading>
        LEFT LOADING
      </Button>
      <Button color="primary" loading loadingPosition="end">
        RIGHT LOADING
      </Button>
    </div>
  )
};
