"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../ui/table";
import { TableHeading } from "../ui/table/table-heading";
import { ReactNode, useMemo } from "react";
import { Transcation } from "@/types/transaction";
import { FormatPrice } from "@/utils/format";
import Link from "next/link";

export const Transactions = () => {
  const transactions = useMemo(() => {
    const makeTransactionData = (): Transcation[] => {
      return Array(150).fill({
        orderId: `#1737544`,
        orderDate: "7 July, 2023",
        orderAmount: 1278.23,
        transactionFee: 22,
      });
    };
    return makeTransactionData();
  }, []);

  const columns: ColumnDef<Transcation>[] = [
    {
      accessorKey: "orderId",
      header: "Order ID",
      cell: ({ getValue }) => {
        return (
          <span className="float-left">
            <Link href={{}} className="text-blue-500">
              {getValue() as ReactNode}
            </Link>
          </span>
        );
      },
    },
    {
      accessorKey: "orderDate",
      header: "Order Date",
    },
    {
      accessorKey: "orderAmount",
      header: "Order Amount",
      cell: ({ getValue }) => {
        return (
          <span className="float-right">
            {FormatPrice(getValue() as number)}
          </span>
        );
      },
    },
    {
      accessorKey: "transactionFee",
      header: "Transaction Fee",
      cell: ({ getValue }) => {
        return (
          <span className="float-right">
            {FormatPrice(getValue() as number)}
          </span>
        );
      },
    },
  ];

  return (
    <div className="pt-8 flex flex-col gap-5">
      <TableHeading />
      <DataTable data={transactions} columns={columns} />
    </div>
  );
};
