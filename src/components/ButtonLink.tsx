import Link from "next/link";

type Props = { href: string; children: React.ReactNode; external?: boolean };

export default function ButtonLink({ href, children, external }: Props) {
  const common =
    "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm " +
    "transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-sm " +
    "focus:outline-none focus:ring-2 focus:ring-slate-700";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={common}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={common}>
      {children}
    </Link>
  );
}
