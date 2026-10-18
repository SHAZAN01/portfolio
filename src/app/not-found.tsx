import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap max-w-2xl">
        <h1 className="h-section">This page didn’t translate.</h1>
        <p className="lede mt-5">The link may be old or mistyped.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-signal px-6 py-3 font-medium text-white">Go to the homepage</Link>
      </div>
    </section>
  );
}
