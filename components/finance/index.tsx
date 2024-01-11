import { FormatPrice } from "@/utils/format";
import { Card } from "../ui/card";

const Info = [
  {
    title: "Online orders",
    amount: 231,
  },
  {
    title: "Amount received",
    amount: FormatPrice(2392312.19),
  },
];

export const Cards = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 pt-6">
      {Info.map((item) => {
        return (
          <Card key={item.title} amount={item.amount} title={item.title} />
        );
      })}
    </div>
  );
};
