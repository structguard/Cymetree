import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Hospital,
  Factory,
  TrainFront,
  Cpu,
  Leaf,
  Play,
  Plus,
} from "lucide-react";

import Header from "../screens/Header";
import Footer from "../screens/Footer";

const colors = {
  bg: "#071014",
  bg2: "#0C171C",
  card: "#102027",
  white: "#F7FAF8",
  muted: "#A8B5B9",
  accent: "#B7D65C",
  line: "rgba(255,255,255,0.10)",
};

const services = [
  {
    title: "Healthcare",
    subtitle: "Infrastructure",
    icon: <Hospital size={24} />,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Building",
    subtitle: "Construction",
    icon: <Building2 size={24} />,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Industrial",
    subtitle: "Infrastructure",
    icon: <Factory size={24} />,
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Transport",
    subtitle: "& Civil",
    icon: <TrainFront size={24} />,
    image:
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Digital",
    subtitle: "Infrastructure",
    icon: <Cpu size={24} />,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sustainable",
    subtitle: "Infrastructure",
    icon: <Leaf size={24} />,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
];

const projects = [
  {
    name: "Healthcare Infrastructure",
    location: "Maharashtra, India",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1500&q=85",
  },
  {
    name: "Critical Care Facility",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Institutional Infrastructure",
    location: "Pune, India",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
];

function LandingScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        background: colors.bg,
        color: colors.white,
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "130px 5vw 80px",
          backgroundImage:
            "linear-gradient(90deg, rgba(7,16,20,0.97) 0%, rgba(7,16,20,0.80) 42%, rgba(7,16,20,0.25) 100%), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=90')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            maxWidth: "1450px",
            width: "100%",
            margin: "auto",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: loaded ? 1 : 0,
              y: loaded ? 0 : 40,
            }}
            transition={{
              duration: 0.9,
            }}
            style={{
              maxWidth: "900px",
            }}
          >
            {/* Eyebrow */}

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "9px",
                padding: "8px 13px",
                borderRadius: "30px",
                border: `1px solid ${colors.line}`,
                background: "rgba(255,255,255,0.06)",
                marginBottom: "25px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: colors.accent,
                  boxShadow: `0 0 14px ${colors.accent}`,
                }}
              />

              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                }}
              >
                Specialised Infrastructure
              </span>
            </div>

            {/* Heading */}

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(52px, 8vw, 110px)",
                lineHeight: 0.88,
                letterSpacing: "-6px",
                fontWeight: 600,
              }}
            >
              Building
              <br />
              <span
                style={{
                  color: colors.accent,
                }}
              >
                what matters.
              </span>
            </h1>

            <p
              style={{
                maxWidth: "650px",
                color: "#C7D0D2",
                fontSize: "18px",
                lineHeight: 1.7,
                marginTop: "30px",
              }}
            >
              Cymetree Projects delivers complex infrastructure with
              engineering precision, construction expertise and a single
              point of accountability.
            </p>

            {/* Buttons */}

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "32px",
                flexWrap: "wrap",
              }}
            >
              <motion.a
                href="/projects"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                style={{
                  background: colors.accent,
                  color: "#10160C",
                  textDecoration: "none",
                  padding: "16px 22px",
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: 900,
                }}
              >
                EXPLORE OUR WORK
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{
                  background: "rgba(255,255,255,0.12)",
                }}
                style={{
                  color: colors.white,
                  textDecoration: "none",
                  padding: "15px 22px",
                  borderRadius: "30px",
                  border: `1px solid rgba(255,255,255,0.25)`,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                START A CONVERSATION
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Hero floating badge */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            right: "6%",
            bottom: "12%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: `1px solid rgba(183,214,92,0.35)`,
            background: "rgba(7,16,20,0.45)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          className="cymetree-hero-badge"
        >
          <div
            style={{
              color: colors.accent,
              fontSize: "27px",
              fontWeight: 700,
            }}
          >
            360°
          </div>

          <div
            style={{
              color: colors.muted,
              fontSize: "9px",
              letterSpacing: "1px",
            }}
          >
            INFRASTRUCTURE
            <br />
            DELIVERY
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        style={{
          padding: "110px 5vw",
          background: colors.bg2,
        }}
      >
        <div
          className="cymetree-intro-grid"
          style={{
            maxWidth: "1350px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "90px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "18px",
              }}
            >
              WHY CYMETREE
            </div>

            <h2
              style={{
                fontSize: "clamp(40px,5vw,70px)",
                lineHeight: 0.96,
                letterSpacing: "-3px",
                margin: 0,
                fontWeight: 600,
              }}
            >
              Complex projects.
              <br />
              <span style={{ color: colors.accent }}>
                Simplified delivery.
              </span>
            </h2>
          </div>

          <div>
            <p
              style={{
                color: colors.muted,
                fontSize: "17px",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              From the first design decision to final commissioning,
              Cymetree brings together planning, engineering, procurement,
              construction and specialist infrastructure delivery.
            </p>

            <motion.a
              href="/about"
              whileHover={{
                x: 5,
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: colors.accent,
                textDecoration: "none",
                marginTop: "25px",
                fontWeight: 800,
                fontSize: "13px",
              }}
            >
              Discover our approach
              <ArrowRight size={17} />
            </motion.a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        style={{
          padding: "110px 5vw",
        }}
      >
        <div
          style={{
            maxWidth: "1450px",
            margin: "auto",
          }}
        >
          <div
            style={{
              maxWidth: "720px",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                letterSpacing: "2px",
                fontWeight: 800,
                marginBottom: "15px",
              }}
            >
              OUR CAPABILITIES
            </div>

            <h2
              style={{
                fontSize: "clamp(40px,5vw,70px)",
                lineHeight: 0.95,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              Infrastructure,
              <br />
              without boundaries.
            </h2>
          </div>

          <div
            className="cymetree-service-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "16px",
            }}
          >
            {services.map((service, index) => (
              <motion.a
                key={service.title}
                href="/services"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -7,
                }}
                style={{
                  minHeight: "340px",
                  position: "relative",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: colors.white,
                }}
              >
                <img
                  src={service.image}
                  alt={`${service.title} ${service.subtitle}`}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(7,16,20,0.15), rgba(7,16,20,0.95))",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: "25px",
                    right: "25px",
                    bottom: "25px",
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "50%",
                      background: "rgba(183,214,92,0.12)",
                      border: "1px solid rgba(183,214,92,0.25)",
                      color: colors.accent,
                      marginBottom: "20px",
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "25px",
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {service.title}
                    <br />
                    <span
                      style={{
                        color: colors.accent,
                      }}
                    >
                      {service.subtitle}
                    </span>
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#C3CDD0",
                      fontSize: "11px",
                      marginTop: "15px",
                    }}
                  >
                    EXPLORE
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        style={{
          padding: "110px 5vw",
          background: colors.bg2,
        }}
      >
        <div
          style={{
            maxWidth: "1450px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              gap: "30px",
              marginBottom: "45px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  color: colors.accent,
                  fontSize: "11px",
                  letterSpacing: "2px",
                  fontWeight: 800,
                  marginBottom: "15px",
                }}
              >
                SELECTED PROJECTS
              </div>

              <h2
                style={{
                  fontSize: "clamp(40px,5vw,70px)",
                  lineHeight: 0.95,
                  letterSpacing: "-3px",
                  margin: 0,
                }}
              >
                Built where
                <br />
                <span style={{ color: colors.accent }}>
                  it matters.
                </span>
              </h2>
            </div>

            <a
              href="/projects"
              style={{
                color: colors.accent,
                textDecoration: "none",
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "13px",
              }}
            >
              VIEW ALL PROJECTS
              <ArrowRight size={17} />
            </a>
          </div>

          <div
            className="cymetree-project-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.35fr 1fr",
              gap: "16px",
            }}
          >
            {/* Main project */}

            <ProjectCard
              project={projects[0]}
              large
            />

            <div
              style={{
                display: "grid",
                gap: "16px",
              }}
            >
              <ProjectCard project={projects[1]} />
              <ProjectCard project={projects[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NUMBERS
      ===================================================== */}

      <section
        style={{
          padding: "80px 5vw",
          borderBottom: `1px solid ${colors.line}`,
        }}
      >
        <div
          className="cymetree-stats"
          style={{
            maxWidth: "1350px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {[
            ["25+", "Years of expertise"],
            ["50+", "Projects delivered"],
            ["06", "Core capabilities"],
            ["01", "Accountable partner"],
          ].map(([number, label]) => (
            <div
              key={label}
              style={{
                padding: "20px 30px",
                borderRight: `1px solid ${colors.line}`,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(38px,5vw,65px)",
                  letterSpacing: "-3px",
                  fontWeight: 600,
                  color: colors.white,
                }}
              >
                {number}
              </div>

              <div
                style={{
                  marginTop: "7px",
                  color: colors.muted,
                  fontSize: "12px",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SUSTAINABILITY
      ===================================================== */}

      <section
        style={{
          padding: "120px 5vw",
          background: "#DDE6C8",
          color: "#11170D",
        }}
      >
        <div
          className="cymetree-sustainability-grid"
          style={{
            maxWidth: "1350px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "90px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              BUILT FOR THE FUTURE
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(45px,6vw,80px)",
                lineHeight: 0.92,
                letterSpacing: "-4px",
              }}
            >
              Better
              <br />
              infrastructure.
              <br />
              <span style={{ opacity: 0.45 }}>
                Better future.
              </span>
            </h2>

            <p
              style={{
                maxWidth: "550px",
                fontSize: "16px",
                lineHeight: 1.8,
                opacity: 0.7,
                marginTop: "25px",
              }}
            >
              We believe infrastructure should perform better for
              people, businesses and the planet. Sustainability is
              therefore integrated into how we design and deliver.
            </p>

            <a
              href="/sustainability"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#11170D",
                fontWeight: 900,
                textDecoration: "none",
                marginTop: "15px",
              }}
            >
              OUR APPROACH
              <ArrowRight size={17} />
            </a>
          </div>

          <div
            style={{
              position: "relative",
              minHeight: "480px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1300&q=85"
              alt="Sustainable infrastructure"
              loading="lazy"
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "20px",
                bottom: "20px",
                background: "rgba(221,230,200,0.92)",
                padding: "20px",
                maxWidth: "240px",
              }}
            >
              <Leaf size={22} />

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  marginTop: "15px",
                }}
              >
                Performance by design.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />

      {/* =====================================================
          RESPONSIVE CSS
      ===================================================== */}

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
          }

          * {
            box-sizing: border-box;
          }

          @media (max-width: 900px) {

            .cymetree-intro-grid,
            .cymetree-sustainability-grid {
              grid-template-columns: 1fr !important;
              gap: 45px !important;
            }

            .cymetree-service-grid {
              grid-template-columns: 1fr 1fr !important;
            }

            .cymetree-project-grid {
              grid-template-columns: 1fr !important;
            }

            .cymetree-stats {
              grid-template-columns: 1fr 1fr !important;
            }

            .cymetree-hero-badge {
              display: none !important;
            }
          }

          @media (max-width: 600px) {

            .cymetree-service-grid {
              grid-template-columns: 1fr !important;
            }

            .cymetree-stats {
              grid-template-columns: 1fr 1fr !important;
            }

            .cymetree-stats > div {
              border-right: 0 !important;
              border-bottom: 1px solid rgba(255,255,255,0.1);
            }

            .cymetree-project-grid {
              grid-template-columns: 1fr !important;
            }

            h1 {
              letter-spacing: -3px !important;
            }
          }

          @media (max-width: 430px) {

            .cymetree-stats {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}

function ProjectCard({ project, large = false }) {
  return (
    <motion.a
      href="/projects"
      whileHover={{
        scale: 0.99,
      }}
      style={{
        minHeight: large ? "620px" : "302px",
        position: "relative",
        overflow: "hidden",
        display: "block",
        textDecoration: "none",
        color: colors.white,
      }}
    >
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent 25%, rgba(7,16,20,0.95))",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "25px",
          bottom: "25px",
          right: "25px",
        }}
      >
        <div
          style={{
            color: colors.accent,
            fontSize: "10px",
            letterSpacing: "1.5px",
            fontWeight: 800,
            marginBottom: "8px",
          }}
        >
          FEATURED PROJECT
        </div>

        <h3
          style={{
            margin: 0,
            fontSize: large ? "34px" : "23px",
            lineHeight: 1,
          }}
        >
          {project.name}
        </h3>

        <div
          style={{
            color: "#C0C9CC",
            fontSize: "11px",
            marginTop: "10px",
          }}
        >
          {project.location}
        </div>
      </div>
    </motion.a>
  );
}

export default LandingScreen;