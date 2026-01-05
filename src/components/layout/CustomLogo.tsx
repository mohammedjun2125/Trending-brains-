
// You can replace the content of this file with your own SVG logo.
// Make sure to keep the width and height attributes for proper sizing.
export function CustomLogo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 125 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 w-9"
    >
      <path
        d="M31.25 62.5C31.25 45.1142 45.1142 31.25 62.5 31.25C79.8858 31.25 93.75 45.1142 93.75 62.5C93.75 79.8858 79.8858 93.75 62.5 93.75"
        stroke="hsl(var(--accent))"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62.5 62.5L31.25 93.75"
        stroke="hsl(var(--accent))"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62.5 31.25L93.75 62.5"
        stroke="hsl(var(--foreground))"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
