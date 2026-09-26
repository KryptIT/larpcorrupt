import "./globals.css";

export const metadata = {
  title: "larpcorrupt — OxyEnv",
  description: "larpcorrupt / OxyEnv tooling by claudmor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
