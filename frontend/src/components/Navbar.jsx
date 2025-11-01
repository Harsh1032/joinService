import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavItem = ({ to, children, className = "", onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`text-[15px] md:text-[17px] font-medium text-slate-800 hover:text-blue-600 transition-colors ${className}`}
  >
    {children}
  </Link>
);

const OutlineBtn = ({ to, children }) => (
  <Link
    to={to}
    className="px-4 py-2 md:px-5 md:py-2.5 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-[14px] md:text-[16px] font-medium"
  >
    {children}
  </Link>
);

const SolidBtn = ({ to, children }) => (
  <Link
    to={to}
    className="px-4 py-2 md:px-5 md:py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-[14px] md:text-[16px] font-medium"
  >
    {children}
  </Link>
);

const Navbar = ({ offsetTop = "0px" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // close mobile on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // close mobile when clicking outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (!isMenuOpen) return;
      if (!e.target.closest?.("#navbar")) setIsMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [isMenuOpen]);

  // helper to scroll with offset
  const scrollToSection = (id, offset = 0) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // go to home then scroll
  const goHomeThen = (cb) => {
    // if we are already on /
    if (location.pathname === "/") {
      cb?.();
      return;
    }
    // navigate to home first
    navigate("/");
    // wait for DOM to render home
    setTimeout(() => {
      cb?.();
    }, 120);
  };

  return (
    <header
      className="sticky w-full z-50"
      style={{ top: offsetTop }}
    >
      <nav
        id="navbar"
        className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="h-14 md:h-20 flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                goHomeThen(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                });
              }}
              className="shrink-0 flex items-center gap-2"
            >
              <img
                src="/Logo.png"
                alt="company logo"
                className="h-8 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Home */}
              <NavItem
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  goHomeThen(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  });
                }}
              >
                Home
              </NavItem>

              {/* Asia Pricing (real page) */}
              <NavItem to="/plans">Asia Pricing</NavItem>

              {/* Plans & Pricing -> real pricing badge */}
              <NavItem
                to="/#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  goHomeThen(() => {
                    // your pricing starts at investor-plans
                    scrollToSection("investor-plans", -80);
                  });
                }}
              >
                Plans &amp; Pricing
              </NavItem>

              {/* Find Services (real page) */}
              <NavItem to="/services">Find Services</NavItem>

              {/* Join Services (real page) */}
              <NavItem to="/joinservices">Join Services</NavItem>

              {/* About us */}
              <NavItem
                to="/#aboutUs"
                onClick={(e) => {
                  e.preventDefault();
                  goHomeThen(() => {
                    scrollToSection("aboutUs", -100);
                  });
                }}
              >
                About us
              </NavItem>

              {/* Contact us */}
              <NavItem
                to="/#contactUs"
                onClick={(e) => {
                  e.preventDefault();
                  goHomeThen(() => {
                    scrollToSection("contactUs", -100);
                  });
                }}
              >
                Contact us
              </NavItem>

              <div className="ml-4 h-6 w-px bg-slate-200" />

              <OutlineBtn to="/patientDashboard">Patient</OutlineBtn>
              <SolidBtn to="/serviceProviderDashboard">Clinician</SolidBtn>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-slate-100"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
              {/* Home */}
              <NavItem
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  goHomeThen(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  });
                  setIsMenuOpen(false);
                }}
              >
                Home
              </NavItem>

              {/* Pricing */}
              <NavItem
                to="/#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  goHomeThen(() => {
                    scrollToSection("investor-plans", -80);
                  });
                  setIsMenuOpen(false);
                }}
              >
                Pricing &amp; Plans
              </NavItem>

              {/* Find Services */}
              <NavItem
                to="/services"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Find Services
              </NavItem>

              {/* About us */}
              <NavItem
                to="/#aboutUs"
                onClick={(e) => {
                  e.preventDefault();
                  goHomeThen(() => {
                    scrollToSection("aboutUs", -100);
                  });
                  setIsMenuOpen(false);
                }}
              >
                About us
              </NavItem>

              {/* Contact us */}
              <NavItem
                to="/#contactUs"
                onClick={(e) => {
                  e.preventDefault();
                  goHomeThen(() => {
                    scrollToSection("contactUs", -100);
                  });
                  setIsMenuOpen(false);
                }}
              >
                Contact us
              </NavItem>

              <div className="h-0.5 bg-slate-100 my-1" />

              <OutlineBtn to="/patientDashboard">Patient</OutlineBtn>
              <SolidBtn to="/serviceProviderDashboard">Clinician</SolidBtn>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
