import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export const runtime = 'edge' // 'nodejs' (default) | 'edge'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased  overflow-x-hidden sm:overflow-x-hidden`}>{children}</body>
    </html>
  );
}
