import "./globals.css";
import { Space_Mono } from "next/font/google";
import Providers from "./providers";

const space_Mono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Github-User Search App",
  description: "Finding github user",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={space_Mono.className}>
        <Providers>
          <main className="flex justify-center items-center h-screen bg-primary-bg1 dark:bg-dark-bg1 text-primary-text1 ">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
