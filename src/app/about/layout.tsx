import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Kumar Priyanshu - Full Stack Web Developer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scrollbar-hide">{children}</body>
    </html>
  );
}
