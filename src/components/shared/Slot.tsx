import { Slot as SlotRadix } from '@radix-ui/react-slot';

export type SlotProps = React.ComponentProps<typeof SlotRadix>;

export const Slot = ({ children, ...props }: SlotProps) => {
  return <SlotRadix {...props}>{children}</SlotRadix>;
};
