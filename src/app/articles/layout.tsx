import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Kumar Priyanshu - Full Stack Web Developer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0d1117]">{children}</body>
    </html>
  );
}
