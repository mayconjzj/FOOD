export type DishCardRootProps = {
  favorite?: boolean;
  children: React.ReactNode;
};

export const DishCardRoot = ({ children, favorite }: DishCardRootProps) => {
  return (
    <div className="relative flex flex-col items-center rounded-3xl gap-4 max-w-[300px] sm:w-full md:w-[calc(50%-12px)] p-5 bg-tertiary shadow-lg overflow-hidden">
      {favorite && (
        <div className="absolute bg-secundary flex items-center justify-center text-3xl text-background w-[70px] h-[70px] -right-[10px] -top-[10px] rounded-bl-[37.5px]">
          <i className="fas fa-heart" />
        </div>
      )}
      {children}
    </div>
  );
};