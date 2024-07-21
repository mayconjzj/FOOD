export const DishCardDescription = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <span className="text-center line-clamp-4">{children}</span>;
};
