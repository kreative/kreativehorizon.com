export default function SplashContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-mt-[10.3rem]">
      <div className="min-h-[5.2rem] bg-black" />
      <div>{children}</div>
    </div>
  );
}
