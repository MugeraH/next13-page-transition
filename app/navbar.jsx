"use client";

import Link from "next/link";

const links = [
  { href: "/about", text: "About" },
  { href: "/products", text: "Products" },
  { href: "/contact", text: "Contact" },
];

export const Navbar= () => {
  return (
    <>
      <nav>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
