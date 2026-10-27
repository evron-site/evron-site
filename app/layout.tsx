import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "EVRON — Engineered for the Unknown",
  description: "EVRON Control. Yeni nesil, uzaktan kontrol edilebilir mobil aydınlatma konsepti.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
