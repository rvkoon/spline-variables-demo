import Link from "next/link";

export interface TagLinkProps {
  label: string;
  href: string;
}

export function TagLink({ label, href }: TagLinkProps) {
  return (
    <Link
      href={href}
      className="rounded-full border-4 border-purple-400 py-[16px] px-[24px] text-white text-[20px] font-[500] hover:bg-purple-400  bg-primary"
    >
      {label}
    </Link>
  );
}
