import { Analytics } from "@vercel/analytics/next";
export const metadata = {
  title: "Punjab Board Result 2026",
  description: "Check 11th and 12th Class Result for all 9 Punjab BISE Boards",
  keywords: "bise result 2026, punjab board result, 11th class result, 12th class result"
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  {children}
    <Analytics/>
    </body>
    </html>
  )
}
