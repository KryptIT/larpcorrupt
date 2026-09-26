import "./globals.css";

export const metadata = {
  title: "larpcorrupt",
  description: "Lua and Luau deobfuscation and analysis tooling by larpcorrupt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
