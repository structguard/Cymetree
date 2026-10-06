import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const colors = {
  bg: "#071014",
  white: "#F7FAF8",
  muted: "#A8B5B9",
  accent: "#B7D65C",
  line: "rgba(255,255,255,0.10)",
  dropdown: "#0C171C",
};

const navItems = [
  {
    label: "About",
    href: "/about",
  },

  {
    label: "Services",
    href: "/services",

    dropdown: [
      {
        label: "Healthcare Infrastructure",
        href: "/healthcare-infrastructure",
      },
      {
        label: "Building Construction",
        href: "/building-construction-development",
      },
      {
        label: "Industrial Infrastructure",
        href: "/industrial-infrastructure",
      },
      {
        label: "Transport & Civil",
        href: "/transport-civil-infrastructure",
      },
      {
        label: "Digital Infrastructure",
        href: "/digital-industrial-infrastructure",
      },
      {
        label: "Sustainable Infrastructure",
        href: "/green-sustainable-infrastructure",
      },
    ],
  },

  {
    label: "Projects",
    href: "/projects",
  },
];

function Header() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  /*
  ============================================================
  ACTIVE PAGE CHECK
  ============================================================
  */

  const isCurrentPage = (href) => {
    return location.pathname === href;
  };

  /*
  ============================================================
  SERVICES ACTIVE CHECK
  ============================================================
  */

  const isServicesActive = () => {
    const servicePaths = [
      "/services",
      "/healthcare-infrastructure",
      "/building-construction-development",
      "/industrial-infrastructure",
      "/transport-civil-infrastructure",
      "/digital-industrial-infrastructure",
      "/green-sustainable-infrastructure",
    ];

    return servicePaths.includes(location.pathname);
  };

  /*
  ============================================================
  CLOSE MOBILE MENU
  ============================================================
  */

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  /*
  ============================================================
  RENDER
  ============================================================
  */

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: "16px 5vw",
          background: "rgba(7,16,20,0.82)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${colors.line}`,
        }}
      >
        <div
          style={{
            maxWidth: "1450px",
            margin: "0 auto",
            height: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >

          {/* =====================================================
              LOGO
          ===================================================== */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
          >
            <Link
              to="/"
              onClick={closeMobileMenu}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "11px",
                textDecoration: "none",
                color: colors.white,
              }}
            >
              {/* Logo Mark */}

              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: `1px solid ${colors.accent}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderLeft: `2px solid ${colors.accent}`,
                    borderBottom: `2px solid ${colors.accent}`,
                    transform: "rotate(-45deg)",
                  }}
                />
              </div>

              <div>
                <div
                  style={{
                    fontSize: "19px",
                    fontWeight: 800,
                    letterSpacing: "-0.6px",
                    lineHeight: 1,
                  }}
                >
                  CYMETREE
                </div>

                <div
                  style={{
                    marginTop: "5px",
                    fontSize: "7px",
                    letterSpacing: "2.5px",
                    color: colors.muted,
                  }}
                >
                  PROJECTS LLP
                </div>
              </div>
            </Link>
          </motion.div>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav
            className="cymetree-desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              height: "100%",
            }}
          >

            {navItems.map((item, index) => {
              const active =
                item.label === "Services"
                  ? isServicesActive()
                  : isCurrentPage(item.href);

              const hovered = hoveredNav === index;

              return (
                <div
                  key={item.label}
                  style={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={() => {
                    setHoveredNav(index);

                    if (item.label === "Services") {
                      setDesktopDropdown(true);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredNav(null);

                    if (item.label === "Services") {
                      setDesktopDropdown(false);
                    }
                  }}
                >

                  {/* =================================================
                      MAIN NAV LINK
                  ================================================= */}

                  <Link
                    to={item.href}
                    style={{
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color:
                        active || hovered
                          ? colors.accent
                          : colors.white,
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight:
                        active || hovered
                          ? 700
                          : 500,
                      opacity:
                        active || hovered
                          ? 1
                          : 0.86,
                      transition:
                        "color 0.25s ease, opacity 0.25s ease",
                    }}
                  >
                    {item.label}

                    {item.dropdown && (
                      <ChevronDown
                        size={13}
                        style={{
                          transition:
                            "transform 0.25s ease",
                          transform:
                            desktopDropdown
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      />
                    )}

                    {/* Active underline */}

                    {active && (
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: "-1px",
                          height: "2px",
                          background:
                            colors.accent,
                          borderRadius: "20px",
                        }}
                      />
                    )}

                    {/* Hover underline */}

                    {!active && hovered && (
                      <motion.span
                        layoutId="headerHoverLine"
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: "-1px",
                          height: "2px",
                          background:
                            colors.accent,
                          borderRadius: "20px",
                        }}
                      />
                    )}
                  </Link>

                  {/* =================================================
                      SERVICES DROPDOWN
                  ================================================= */}

                  {item.label === "Services" && (
                    <AnimatePresence>
                      {desktopDropdown && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 12,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 12,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          style={{
                            position: "absolute",
                            top: "52px",
                            left: "-25px",
                            width: "310px",
                            padding: "10px",
                            background:
                              colors.dropdown,
                            border:
                              `1px solid ${colors.line}`,
                            boxShadow:
                              "0 25px 70px rgba(0,0,0,0.45)",
                            borderRadius: "8px",
                          }}
                        >

                          {/* Small top accent */}

                          <div
                            style={{
                              position:
                                "absolute",
                              top: 0,
                              left: "25px",
                              width: "35px",
                              height: "2px",
                              background:
                                colors.accent,
                            }}
                          />

                          {item.dropdown.map(
                            (service) => {
                              const serviceActive =
                                location.pathname ===
                                service.href;

                              return (
                                <Link
                                  key={
                                    service.href
                                  }
                                  to={
                                    service.href
                                  }
                                  style={{
                                    display: "flex",
                                    alignItems:
                                      "center",
                                    justifyContent:
                                      "space-between",
                                    gap: "15px",
                                    padding:
                                      "13px 14px",
                                    color:
                                      serviceActive
                                        ? colors.accent
                                        : colors.muted,
                                    background:
                                      serviceActive
                                        ? "rgba(183,214,92,0.08)"
                                        : "transparent",
                                    textDecoration:
                                      "none",
                                    fontSize:
                                      "13px",
                                    fontWeight:
                                      serviceActive
                                        ? 700
                                        : 500,
                                    borderRadius:
                                      "5px",
                                    transition:
                                      "all 0.2s ease",
                                  }}
                                  onMouseEnter={(
                                    e
                                  ) => {
                                    e.currentTarget.style.color =
                                      colors.accent;

                                    e.currentTarget.style.background =
                                      "rgba(183,214,92,0.08)";

                                    e.currentTarget.style.paddingLeft =
                                      "18px";
                                  }}
                                  onMouseLeave={(
                                    e
                                  ) => {
                                    e.currentTarget.style.color =
                                      serviceActive
                                        ? colors.accent
                                        : colors.muted;

                                    e.currentTarget.style.background =
                                      serviceActive
                                        ? "rgba(183,214,92,0.08)"
                                        : "transparent";

                                    e.currentTarget.style.paddingLeft =
                                      "14px";
                                  }}
                                >
                                  <span>
                                    {
                                      service.label
                                    }
                                  </span>

                                  <ArrowUpRight
                                    size={14}
                                  />
                                </Link>
                              );
                            }
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            {/* =====================================================
                START PROJECT BUTTON
            ===================================================== */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <Link
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "12px 18px",
                  borderRadius: "30px",
                  background: colors.accent,
                  color: "#10160C",
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: 900,
                  letterSpacing: "0.3px",
                }}
              >
                START A PROJECT
                <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </nav>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <motion.button
            className="cymetree-mobile-button"
            whileTap={{
              scale: 0.9,
            }}
            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }
            style={{
              border: 0,
              background: "transparent",
              color: colors.white,
              cursor: "pointer",
              padding: "8px",
            }}
          >
            {mobileOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </motion.button>
        </div>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              style={{
                overflow: "hidden",
                borderTop:
                  `1px solid ${colors.line}`,
              }}
            >
              <div
                style={{
                  padding:
                    "20px 0 15px",
                }}
              >

                {/* =================================================
                    MOBILE ABOUT
                ================================================= */}

                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "space-between",
                    padding:
                      "15px 5px",
                    color:
                      isCurrentPage(
                        "/about"
                      )
                        ? colors.accent
                        : colors.white,
                    textDecoration:
                      "none",
                    fontSize: "16px",
                    fontWeight:
                      isCurrentPage(
                        "/about"
                      )
                        ? 700
                        : 500,
                    borderBottom:
                      `1px solid ${colors.line}`,
                  }}
                >
                  About

                  {isCurrentPage(
                    "/about"
                  ) && (
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius:
                            "50%",
                          background:
                            colors.accent,
                        }}
                      />
                    )}
                </Link>

                {/* =================================================
                    MOBILE SERVICES
                ================================================= */}

                <button
                  onClick={() =>
                    setMobileServicesOpen(
                      !mobileServicesOpen
                    )
                  }
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "space-between",
                    padding:
                      "15px 5px",
                    color:
                      isServicesActive()
                        ? colors.accent
                        : colors.white,
                    background:
                      "transparent",
                    border: 0,
                    borderBottom:
                      `1px solid ${colors.line}`,
                    fontSize: "16px",
                    fontWeight:
                      isServicesActive()
                        ? 700
                        : 500,
                    cursor: "pointer",
                  }}
                >
                  <span>
                    Services
                  </span>

                  <ChevronDown
                    size={18}
                    style={{
                      transition:
                        "transform 0.25s ease",
                      transform:
                        mobileServicesOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </button>

                {/* MOBILE SERVICES SUBMENU */}

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      style={{
                        overflow:
                          "hidden",
                        background:
                          "rgba(255,255,255,0.025)",
                      }}
                    >
                      {navItems[1].dropdown.map(
                        (service) => {
                          const active =
                            location.pathname ===
                            service.href;

                          return (
                            <Link
                              key={
                                service.href
                              }
                              to={
                                service.href
                              }
                              onClick={
                                closeMobileMenu
                              }
                              style={{
                                display:
                                  "flex",
                                alignItems:
                                  "center",
                                justifyContent:
                                  "space-between",
                                padding:
                                  "13px 15px 13px 20px",
                                color:
                                  active
                                    ? colors.accent
                                    : colors.muted,
                                textDecoration:
                                  "none",
                                fontSize:
                                  "14px",
                                fontWeight:
                                  active
                                    ? 700
                                    : 500,
                                borderBottom:
                                  `1px solid rgba(255,255,255,0.05)`,
                              }}
                            >
                              <span>
                                {
                                  service.label
                                }
                              </span>

                              <ArrowUpRight
                                size={14}
                              />
                            </Link>
                          );
                        }
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* =================================================
                    MOBILE PROJECTS
                ================================================= */}

                <Link
                  to="/projects"
                  onClick={closeMobileMenu}
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "space-between",
                    padding:
                      "15px 5px",
                    color:
                      isCurrentPage(
                        "/projects"
                      )
                        ? colors.accent
                        : colors.white,
                    textDecoration:
                      "none",
                    fontSize: "16px",
                    fontWeight:
                      isCurrentPage(
                        "/projects"
                      )
                        ? 700
                        : 500,
                    borderBottom:
                      `1px solid ${colors.line}`,
                  }}
                >
                  Projects

                  {isCurrentPage(
                    "/projects"
                  ) && (
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius:
                            "50%",
                          background:
                            colors.accent,
                        }}
                      />
                    )}
                </Link>

                {/* =================================================
                    MOBILE CONTACT
                ================================================= */}

                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    gap: "8px",
                    background:
                      colors.accent,
                    color: "#10160C",
                    textDecoration:
                      "none",
                    padding: "14px",
                    borderRadius:
                      "30px",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  START A PROJECT
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =========================================================
          RESPONSIVE CSS
      ========================================================= */}

      <style>
        {`
          .cymetree-mobile-button {
            display: none;
          }

          @media (max-width: 950px) {
            .cymetree-desktop-nav {
              display: none !important;
            }

            .cymetree-mobile-button {
              display: block !important;
            }
          }
        `}
      </style>
    </>
  );
}

export default Header;