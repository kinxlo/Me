"use client";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`relative max-w-screen overflow-hidden`}>
      <section className="container mx-auto px-4 md:px-10 xl:px-0">{children}</section>
    </main>
  );
}
