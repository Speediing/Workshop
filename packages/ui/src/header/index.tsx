export function Header({ name }: { name: string }): JSX.Element {
  return (
    <div className="border-b-2 flex flex-row gap-4 justify-between py-8">
      <div className="flex flex-row gap-4">
        <a className="hover:underline" href="/">
          Home
        </a>
        <a className="hover:underline" href="/docs">
          Docs
        </a>
        <a className="hover:underline" href="/pricing">
          Pricing
        </a>
      </div>
      <div>{name}</div>
    </div>
  );
}
