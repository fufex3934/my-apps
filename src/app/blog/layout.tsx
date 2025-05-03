import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-grow">
      <h1>Blog Layout</h1>
      {children}
    </section>
  );
}
