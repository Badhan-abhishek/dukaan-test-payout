import { Transcation } from "@/types/transaction";

export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 999999) + 100000;
};

export const makeTransactionData = (): Transcation[] => {
  return Array(300)
    .fill(0)
    .map((_) => ({
      orderId: `#${getRandomNumber()}`,
      orderDate: "7 July, 2023",
      orderAmount: 1278.23,
      transactionFee: 22,
    }));
};
