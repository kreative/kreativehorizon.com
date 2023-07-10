export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto px-4 md:px-0">{children}</div>;
}
