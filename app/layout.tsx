
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVRON | Engineered for the Unknown",
  description:
    "EVRON — Yeni nesil uzaktan kontrol edilebilir mobil aydınlatma sistemleri.",
  verification: {
    google: "YllYWReQcy0-GHey3__O8upIOFPo020cf7RiPMyiC-Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
