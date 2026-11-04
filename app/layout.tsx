import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "EVRON — Engineered for the Unknown",
  description: "EVRON Control. Yeni nesil, uzaktan kontrol edilebilir mobil aydınlatma konsepti.",
  verification: {
    google: "<meta name="google-site-verification" content="YllYWReQcy0-GHey3__O8upIOFPo020cf7RiPMyiC-Q" />",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
