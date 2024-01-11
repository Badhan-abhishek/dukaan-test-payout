"use client";

import { useParams } from "next/navigation";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  Download,
  HelpCircle,
  Search,
} from "lucide-react";
import { useEffect, useMemo } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[] | undefined;
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const query = useParams();
  const table = useReactTable({
    data: data ? data : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // Manually set page size to 20
  useEffect(() => {
    table.setPageSize(20);
  }, [table]);

  const pages = useMemo(() => {
    return Array(table.getPageCount())
      .fill(0)
      .map((_, i) => i + 1);
  }, [table]);

  return (
    <div className="p-3 bg-white shadow-card flex flex-col gap-3 rounded-4 lg:h-[55vh]">
      <div className="flex items-center justify-between">
        <div className="flex items-center bg-white border border-grayMute rounded-4 max-w-fit px-2 py-[5px] lg:px-4 lg:py-[10px] gap-2">
          <Search size={14} color="#999999" />
          <input
            className="bg-white h-5 text-sm text-black60 focus:outline-none"
            placeholder="Search by order ID..."
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-[6px] px-1 py-[6px] lg:px-3 border border-grayMute rounded-4 text-black30 bg-white">
            <span>Sort</span>
            <ArrowUpDown size={16} />
          </button>
          <button className="flex items-center gap-[6px] px-1 py-[10px] lg:px-3  border border-grayMute rounded-4 text-black30 bg-white h-full">
            <Download size={16} />
          </button>
        </div>
      </div>
      <div className="overflow-scroll">
        <table className="w-full table-fixed py-[10px] px-3">
          <thead className="bg-input text-right [&_th:first-child]:pl-3 [&_th:last-child]:pr-3 [&_th:first-child]:rounded-l-4 [&_th:last-child]:rounded-r-4 text-sm">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, idx) => {
                  const lastIndex = headerGroup.headers.length - 1;
                  return (
                    <th
                      className={`py-[10px] text-black30 text-sm font-normal ${
                        header.index === 0 ? "text-left" : ""
                      }`}
                      key={header.id}
                    >
                      <div
                        className={`flex items-center gap-1 ${
                          header.index === 0 ? "justify-start" : "justify-end"
                        }`}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {lastIndex === idx ? <HelpCircle size={12} /> : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className="overflow-scroll text-right [&_td:first-child]:pl-3 [&_td:last-child]:pr-3 text-sm">
            {table.getRowModel().rows.map((row) => (
              <tr className="w-full border-b border-black90" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className="py-[10px]" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex items-center gap-6">
          <button
            onClick={() => {
              table.setPageIndex((p) => p - 1);
            }}
            disabled={table.getState().pagination.pageIndex === 0}
            className="flex items-center gap-[6px] px-3 py-[6px] border border-grayMute rounded-4 text-black30 bg-white text-sm disabled:opacity-60"
          >
            <ArrowLeft size={14} />
            <span>Previous</span>
          </button>
          <div className="hidden items-center gap-2 lg:flex">
            {pages.map((page, idx) => {
              const currentPage = table.getState().pagination.pageIndex;
              const Blank = () => {
                return (
                  <button
                    key={page}
                    className={`gap-[6px] w-7 h-7 grid place-content-center p-[6px] rounded-4 text-black30 bg-white ${
                      currentPage === idx ? "bg-primary text-white " : ""
                    }`}
                  >
                    ...
                  </button>
                );
              };
              if (pages.length > 5) {
                const mid = pages.length >> 1;
                if (currentPage === 0) {
                  if (idx > 0 && idx < mid) {
                    return;
                  }
                  if (idx === mid) {
                    return Blank();
                  }
                } else if (mid < currentPage) {
                  if (idx > 0 && idx < mid) {
                    return;
                  } else if (idx === mid) {
                    return Blank();
                  }
                } else {
                  if (idx > mid && idx < pages.length - 2) {
                    return;
                  } else if (idx === pages.length - 2) {
                    return Blank();
                  }
                }
              }
              return (
                <button
                  key={page}
                  className={`gap-[6px] w-7 h-7 grid place-content-center p-[6px] rounded-4 text-black30  ${
                    currentPage === idx ? "bg-primary text-white " : "bg-white"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              table.setPageIndex((p) => p + 1);
            }}
            disabled={
              table.getState().pagination.pageIndex === pages.length - 1
            }
            className="flex items-center gap-[6px] px-3 py-[6px] border border-grayMute rounded-4 text-black30 bg-white disabled:opacity-60 text-sm"
          >
            <ArrowRight size={14} />
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
