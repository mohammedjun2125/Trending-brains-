import Image from 'next/image';

export function CustomLogo() {
  return (
    <Image
      src="/logo.png"
      alt="Trending Brains Logo"
      width={36}
      height={36}
      className="h-9 w-9"
      priority
    />
  );
}
