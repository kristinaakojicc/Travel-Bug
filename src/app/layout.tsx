import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Ensure no classes here are adding padding or margins */}
      <body className="m-0 p-0">
        {children}
      </body>
    </html>
  );
}