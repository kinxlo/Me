"use client";

// You'll need this since we're using client-side effects

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`max-w-screen overflow-hidden`}>
      <section className="grid min-h-[100dvh] grid-cols-[1rem_minmax(0,80rem)_1rem] justify-center md:-mx-4 md:grid-cols-[2.5rem_minmax(0,80rem)_2.5rem] lg:mx-0">
        <div className="border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/10 md:block dark:[--pattern-fg:var(--color-white)]/10" />
        <section className="h-fit gap-[4rem] self-center p-0 lg:gap-[10rem]">{children}</section>
        <div className="border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/10 md:block dark:[--pattern-fg:var(--color-white)]/10" />
      </section>
    </main>
  );
}
