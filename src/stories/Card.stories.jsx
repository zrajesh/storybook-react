import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Dark = {
  args: {
    backgroundColor: "#000",
    title: "Dark test title"
  },
};

export const Success = {
  args: {
    backgroundColor: "green"
  },
};

export const Warning = {
  args: {
    backgroundColor: "#FA7070"
  },
};
