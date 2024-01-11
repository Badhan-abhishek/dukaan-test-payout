import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dukaan | Payout",
  description: "Payout dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <main className="lg:h-screen flex lg:w-full">
            <section className="hidden lg:block h-full bg-secondary lg:w-60 lg:max-w-lg">
              <Sidebar />
            </section>
            <section className="bg-page w-full lg:flex-1">{children}</section>
          </main>
        </Theme>
      </body>
    </html>
  );
}
