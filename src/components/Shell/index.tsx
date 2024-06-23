export default function Shell({ children }: React.PropsWithChildren<{}>) {
  return (
    <main className="p-6 bg-white w-full h-full rounded-3xl">{children}</main>
  );
}
