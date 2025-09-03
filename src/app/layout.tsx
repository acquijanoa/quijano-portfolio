import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import Plausible from "@/components/Plausible";
import Link from "next/link"; // 👈 add this

// ... keep metadata etc.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>
          {/* Skip link can stay <a> */}
          <a
            href="#main"
            className={`sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50
                        focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow
                        focus:outline-none focus:ring-2 focus:ring-slate-700`}
          >
            Skip to content
          </a>

          <Plausible />

          <header className="border-b dark:border-slate-800">
            <nav className="mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-6 p-4 text-sm">
              <div className="flex items-center gap-6">
                <Link href="/" className="font-semibold">Home</Link>
                <Link href="/research">Research</Link>
                <Link href="/visualizations">Visualizations</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/cv">CV</Link>
              </div>
              <ThemeToggle />
            </nav>
          </header>

          <main id="main" className="mx-auto max-w-5xl p-6">{children}</main>

          <footer className="border-t dark:border-slate-800 mt-16 p-6 text-center text-xs text-slate-500 dark:text-slate-400">
            © {year} Álvaro Quijano
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
