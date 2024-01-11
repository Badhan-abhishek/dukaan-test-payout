interface CardProps {
  title: string;
  amount: string | number;
}

export const Card: React.FC<CardProps> = ({ amount, title }) => {
  return (
    <div className="p-5 flex flex-col gap-4 shadow-card rounded-lg bg-white">
      <span className="text-base">{title}</span>
      <span className="text-amountL">{amount}</span>
    </div>
  );
};
