type IconProps = { className?: string };

const base = "h-6 w-6";

export function IconShield({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconDrop({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3s6 6.5 6 10.5A6 6 0 016 13.5C6 9.5 12 3 12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 14a2.5 2.5 0 002.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconWaves({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 8c1.5 0 1.5-1.5 3-1.5S8.5 8 10 8s1.5-1.5 3-1.5S15.5 8 17 8s1.5-1.5 3-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 13c1.5 0 1.5-1.5 3-1.5S8.5 13 10 13s1.5-1.5 3-1.5S15.5 13 17 13s1.5-1.5 3-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 18c1.5 0 1.5-1.5 3-1.5S8.5 18 10 18s1.5-1.5 3-1.5S15.5 18 17 18s1.5-1.5 3-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBuildings({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 21V7l6-3v17M14 21V9l6-3v15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M3 21h18M7 9v.01M7 12v.01M7 15v.01"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconStar({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.9 5.9 6.6.9-4.8 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.5 9.8l6.6-.9L12 2.5z" />
    </svg>
  );
}

export function IconArrow({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconWhatsApp({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.348.68 4.538 1.86 6.39L4 29l7.79-1.83A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-2.02 0-3.9-.58-5.49-1.58l-.394-.24-4.62 1.086 1.116-4.49-.258-.406A9.71 9.71 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.75 9.07 26.75 15 21.934 24.75 16.004 24.75Zm5.9-8.03c-.323-.162-1.91-.943-2.206-1.05-.296-.108-.512-.162-.728.162-.216.323-.836 1.05-1.026 1.266-.19.216-.378.243-.7.081-.324-.162-1.365-.503-2.6-1.605-.961-.858-1.61-1.918-1.8-2.242-.19-.324-.02-.5.142-.66.145-.145.324-.378.486-.567.162-.19.216-.323.324-.54.108-.216.054-.405-.027-.567-.081-.162-.728-1.755-.998-2.404-.263-.632-.53-.546-.728-.556l-.62-.011c-.216 0-.567.081-.864.405-.297.324-1.134 1.108-1.134 2.702s1.161 3.134 1.323 3.35c.162.216 2.286 3.49 5.539 4.895.774.334 1.377.534 1.847.683.776.247 1.482.212 2.04.129.622-.093 1.91-.78 2.18-1.534.27-.755.27-1.402.19-1.534-.081-.13-.297-.21-.62-.373Z" />
    </svg>
  );
}
