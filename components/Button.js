import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-gradient-to-r from-[#ff3131] via-[#ff4343] to-[#ff5b5b] text-white shadow-[0_18px_40px_rgba(255,49,49,0.35)] hover:from-[#ff3a3a] hover:via-[#ff4d4d] hover:to-[#ff6666] active:from-[#e62828] active:to-[#ff4a4a] border border-white/10",
  secondary:
    "border border-[#ff3131]/50 text-white hover:bg-[#ff3131]/10 hover:border-[#ff3131]/70 active:bg-[#ff3131]/15 backdrop-blur",
  ghost: "text-white/70 hover:text-white hover:bg-white/5",
};

export default function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
  external = false,
  ...props
}) {
  const variantClasses = VARIANTS[variant] ?? VARIANTS.primary;
  const baseClasses =
    "heading-font inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 backdrop-blur-lg";

  const composedClassName = `${baseClasses} ${variantClasses} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={composedClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={composedClassName} {...props}>
      {children}
    </Link>
  );
}
