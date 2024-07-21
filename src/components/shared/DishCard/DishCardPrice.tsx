import { Button } from '../Button';

export const DishCardPrice = ({ price }: { price: number }) => {
  return (
    <div className="flex items-center gap-5">
      <h4>R${price.toFixed(2).replace('.', ',')}</h4>
      <Button>
        <i className="fas fa-basket-shopping" />
      </Button>
    </div>
  );
};
