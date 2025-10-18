"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useIsMobile from "@/components/hooks/useIsMobile";
import salesforceLogo from "@/../Images/salesforcelogo4.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile(820);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // close menu automatically on route change (guarantees scroll unlock)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // close on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Escape key closes
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // prevent body scroll when menu open (with cleanup to always restore)
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Add route-change body overflow reset effect to guarantee scroll restored after navigation.
  useEffect(() => {
    document.body.style.overflow = "";
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        {/* Logo */}
        <div className="navbar-left" style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
          <button
            onClick={() => {
              router.push("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{ cursor: "pointer", background: "none", border: "none", padding: 0 }}
          >
            <Image
              src={salesforceLogo}
              alt="Salesforce101 Logo"
              width={isMobile ? 120 : 150}
              height={isMobile ? 35 : 45}
              style={{
                width: isMobile ? "120px" : "150px",
                height: "auto",
                maxWidth: "150px",
                margin: isMobile ? "8px 12px 0 0" : "12px 16px 0 0",
                objectFit: "contain",
              }}
            />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="navbar-center" style={{ display: "flex", alignItems: "center", flex: "1 1 auto", justifyContent: "center" }}>
          <div className="nav-links" style={{ display: "flex", gap: "48px", alignItems: "center" }}>
            <Link
              href="/"
              className={isActive("/") ? "navbar-link active" : "navbar-link"}
              style={{ textDecoration: "none", color: "#fff", fontWeight: 600, fontSize: "1.1rem" }}
            >
              Home
            </Link>
            <span style={{ fontSize: "22px", color: "#fff", fontWeight: "bold", margin: "0 8px" }}>|</span>
            <Link
              href="/salesforce-releases"
              className={isActive("/salesforce-releases") ? "navbar-link active" : "navbar-link"}
              style={{ textDecoration: "none", color: "#fff", fontWeight: 600, fontSize: "1.1rem" }}
            >
              Salesforce Releases
            </Link>
            <span style={{ fontSize: "22px", color: "#fff", fontWeight: "bold", margin: "0 8px" }}>|</span>
            <Link
              href="/career-paths"
              className={isActive("/career-paths") ? "navbar-link active" : "navbar-link"}
              style={{ textDecoration: "none", color: "#fff", fontWeight: 600, fontSize: "1.1rem" }}
            >
              Career Paths
            </Link>
          </div>
        </div>

        {/* Right social (hide on mobile) */}
        <div className="navbar-right" style={{ display: "flex", alignItems: "center", flex: "0 0 auto", gap: "16px" }}>
          <div className="social-icons" style={{ display: "flex", gap: "10px", marginRight: "40px" }}>
            <a
              href="https://www.linkedin.com/in/samet-yazar-17bb8817b/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/@salesforce101" target="_blank" rel="noopener noreferrer" className="icon-link" title="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://medium.com/@road.to.salesforce" target="_blank" rel="noopener noreferrer" className="icon-link" title="Medium">
              <i className="bi bi-medium"></i>
            </a>
          </div>
        </div>

        {/* Hamburger for mobile (hidden when menu open) */}
        {isMobile && !menuOpen && (
          <button
            className="hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>
      {isMobile && (
        <div ref={menuRef} className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <button type="button" className="menu-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            ×
          </button>
          <Link href="/" onClick={() => onUpdateActiveLink("home")} className={isActive("/") ? "mobile-link active" : "mobile-link"}>
            Home
          </Link>
          <Link href="/salesforce-releases" onClick={() => onUpdateActiveLink("salesforce-releases")} className={isActive("/salesforce-releases") ? "mobile-link active" : "mobile-link"}>
            Salesforce Releases
          </Link>
          <Link href="/career-paths" onClick={() => onUpdateActiveLink("career-paths")} className={isActive("/career-paths") ? "mobile-link active" : "mobile-link"}>
            Career Paths
          </Link>
        </div>
      )}
    </nav>
  );
}
