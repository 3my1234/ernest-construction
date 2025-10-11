import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ernest Building and Construction Enterprise Nigeria LTD",
  description: "Leading construction company in Nigeria specializing in homes, estates, schools, churches, mosques, roads, and bridges.",
  keywords: "construction, building, Nigeria, infrastructure, architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

