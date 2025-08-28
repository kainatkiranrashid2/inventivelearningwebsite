"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const navigation = [
    {
      title: "TeenEagle",
      links: [
        { name: "Home", href: "/teeneagle" },
        { name: "Contest Categories", href: "/teeneagle/categories" },
        { name: "Resources & Workshops", href: "/teeneagle/resources" },
        { name: "Registration", href: "/teeneagle/registration" },
      ],
    },
    {
      title: "WAICY",
      links: [
        { name: "Home", href: "/waicy" },
        { name: "Contest Categories", href: "/waicy/categories" },
        { name: "Resources & Workshops", href: "/waicy/resources" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/aboutus" },
        { name: "Why Inventive Learning", href: "/whyinventivelearning" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#003135] text-white pt-12 pb-6">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Logo + Contact */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Inventive_Learning_LOGO.png"
                alt="Inventive Learning"
                width={60}
                height={60}
                className="h-12 w-12"
              />
              <span className="text-xl font-semibold">Inventive Learning</span>
            </Link>
            <div className="mt-4 text-sm leading-relaxed text-gray-300">
              <p>Inventive Learning</p>
              <p>1st Floor, Plaza 114, Main Boulevard</p>
              <p>Phase 06, D.H.A. Lahore</p>
              <p>Email: info@kangaroopakistan.org</p>
              <p>Tel: +92 42 37180505, +92 42 37180506</p>
            </div>
          </div>

          {/* Quick Links (3 columns from header) */}
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#0FA4AF] transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Inventive Learning. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
