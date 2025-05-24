import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";

export const metadata = {
  title: "Next.js 15 Boilerplate - Created By Panji Hanum",
  description: "A modern Next.js 15 boilerplate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
