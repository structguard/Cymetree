// TransportandCivil.js

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Route,
  GitBranch,
  Construction,
  Layers3,
  Droplets,
  ShieldCheck,
  Gauge,
  HardHat,
  Ruler,
  Building2,
  MapPinned,
  Workflow,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import Header from "../screens/Header";
import Footer from "../screens/Footer";

const colors = {
  bg: "#071014",
  bg2: "#0A1519",
  card: "#0D1B20",
  card2: "#102126",
  white: "#F5F8F6",
  muted: "#9EAFB3",
  soft: "#C7D0D2",
  accent: "#B7D65C",
  line: "rgba(255,255,255,0.09)",
  lineStrong: "rgba(183,214,92,0.28)",
};

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const infrastructureTypes = [
  {
    number: "01",
    icon: Route,
    title: "Roads & Highways",
    description:
      "Urban and inter-urban roads and highways engineered around traffic loading, durability, safety and long-term performance.",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Bridges",
    description:
      "Bridge infrastructure across a range of spans and structural typologies, planned for long service life and reduced maintenance burden.",
  },
  {
    number: "03",
    icon: Construction,
    title: "Flyovers",
    description:
      "Urban flyover construction combining structural engineering, traffic-management considerations and public-realm requirements.",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Civil & Structural Works",
    description:
      "Drainage, retaining walls, earthworks, foundations and associated civil works delivered as one coordinated programme.",
  },
  {
    number: "05",
    icon: Building2,
    title: "Public Realm Infrastructure",
    description:
      "Footpaths, public spaces, street furniture and urban-realm works supporting accessible and liveable environments.",
  },
];

const technicalSystems = [
  {
    icon: Ruler,
    title: "Structural Engineering",
    text: "Engineering coordination focused on structural performance, durability and the demands placed on long-life public assets.",
  },
  {
    icon: Droplets,
    title: "Drainage Infrastructure",
    text: "Integrated drainage and water-management works coordinated with roads, structures and surrounding civil infrastructure.",
  },
  {
    icon: Layers3,
    title: "Earthworks & Foundations",
    text: "Groundworks and foundation systems forming the base for durable roads, structures and associated infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    text: "Quality, safety and regulatory requirements embedded into project execution and site management.",
  },
  {
    icon: Workflow,
    title: "Traffic Integration",
    text: "Transport infrastructure planned with traffic movement, construction interfaces and public mobility in mind.",
  },
  {
    icon: Gauge,
    title: "Lifecycle Performance",
    text: "Engineering decisions considered around durability, maintenance burden and long-term asset performance.",
  },
];

const deliveryStages = [
  {
    number: "01",
    title: "Requirement Mapping",
    text: "Understand mobility, site, structural and programme requirements.",
  },
  {
    number: "02",
    title: "Engineering",
    text: "Translate requirements into coordinated civil and structural solutions.",
  },
  {
    number: "03",
    title: "Design Coordination",
    text: "Align engineering, site and infrastructure interfaces before execution.",
  },
  {
    number: "04",
    title: "Procurement",
    text: "Coordinate materials, resources and specialist requirements.",
  },
  {
    number: "05",
    title: "Construction",
    text: "Execute through structured supervision and quality-controlled processes.",
  },
  {
    number: "06",
    title: "Handover",
    text: "Complete, verify and prepare the infrastructure asset for operation.",
  },
];

const sectors = [
  "State & Central Government Agencies",
  "PPP & Private Concession Projects",
  "National & State Highway Authorities",
  "Municipal Corporations",
  "Public Works Departments",
  "Urban Development Authorities",
];

const advantages = [
  "Single-point project accountability",
  "Structural engineering expertise",
  "Quality-controlled execution",
  "Programme certainty",
  "Integrated civil works",
  "Long-term asset thinking",
];

function TransportandCivil() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.bg,
        color: colors.white,
        overflow: "hidden",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Header />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        style={{
          minHeight: "94vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "85px",
        }}
      >
        {/* Hero Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(90deg, rgba(5,13,17,0.98) 0%, rgba(5,13,17,0.91) 35%, rgba(5,13,17,0.52) 70%, rgba(5,13,17,0.75) 100%), url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Engineering Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 88%)",
          }}
        />

        {/* Accent Glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            right: "-200px",
            top: "8%",
            background: "rgba(183,214,92,0.08)",
            filter: "blur(115px)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 6%",
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{
              maxWidth: "880px",
            }}
          >
            <motion.div
              variants={reveal}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "9px 14px",
                borderRadius: "100px",
                border: `1px solid ${colors.lineStrong}`,
                background: "rgba(183,214,92,0.06)",
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1.7px",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: colors.accent,
                  boxShadow: `0 0 15px ${colors.accent}`,
                }}
              />

              Transport & Civil Infrastructure
            </motion.div>

            <motion.h1
              variants={reveal}
              style={{
                margin: 0,
                fontSize: "clamp(50px, 7vw, 96px)",
                lineHeight: 0.94,
                letterSpacing: "-4px",
                fontWeight: 600,
              }}
            >
              Infrastructure
              <br />
              that keeps
              <br />
              <span style={{ color: colors.accent }}>
                India moving.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              style={{
                color: colors.soft,
                maxWidth: "700px",
                fontSize: "18px",
                lineHeight: 1.7,
                marginTop: "30px",
              }}
            >
              Roads, highways, bridges, flyovers and civil infrastructure
              engineered for durability, safety and long-term public value.
            </motion.p>

            <motion.div
              variants={reveal}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                marginTop: "38px",
              }}
            >
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "11px",
                  padding: "15px 21px",
                  background: colors.accent,
                  color: "#11180D",
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 800,
                }}
              >
                Discuss Your Project
                <ArrowUpRight size={17} />
              </a>

              <a
                href="/projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "15px 21px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.04)",
                  color: colors.white,
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 700,
                  backdropFilter: "blur(10px)",
                }}
              >
                Explore Projects
                <ArrowRight size={17} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            bottom: "28px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: colors.muted,
            fontSize: "9px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Scroll
          <ChevronDown size={15} />
        </motion.div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section
        style={{
          padding: "120px 6%",
          background: colors.bg2,
          borderTop: `1px solid ${colors.line}`,
          borderBottom: `1px solid ${colors.line}`,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={stagger}
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "90px",
            alignItems: "start",
          }}
        >
          <motion.div variants={reveal}>
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "17px",
              }}
            >
              01 / Public Infrastructure
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 64px)",
                lineHeight: 1,
                letterSpacing: "-3px",
                margin: 0,
                fontWeight: 600,
              }}
            >
              Built for
              <br />
              <span style={{ color: colors.accent }}>
                long service life.
              </span>
            </h2>
          </motion.div>

          <motion.div variants={reveal}>
            <p
              style={{
                color: colors.white,
                fontSize: "21px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Transport and civil infrastructure forms the backbone of every
              functioning city and region. Roads, highways, bridges and
              flyovers are long-term public assets that need to perform under
              demanding conditions.
            </p>

            <p
              style={{
                color: colors.muted,
                fontSize: "15px",
                lineHeight: 1.8,
                marginTop: "25px",
              }}
            >
              Cymetree brings the same integrated delivery discipline used
              across its building and healthcare capabilities to transport and
              civil infrastructure — combining structural engineering,
              quality-controlled execution and programme certainty.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginTop: "38px",
              }}
            >
              {[
                ["DURABILITY", "Long life"],
                ["SAFETY", "Public value"],
                ["EFFICIENCY", "Lifecycle"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  style={{
                    borderTop: `1px solid ${colors.lineStrong}`,
                    paddingTop: "14px",
                  }}
                >
                  <div
                    style={{
                      color: colors.accent,
                      fontSize: "12px",
                      fontWeight: 900,
                    }}
                  >
                    {a}
                  </div>

                  <div
                    style={{
                      color: colors.muted,
                      fontSize: "12px",
                      marginTop: "3px",
                    }}
                  >
                    {b}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          INFRASTRUCTURE TYPES
      ========================================================= */}

      <section
        style={{
          padding: "125px 6%",
          background: colors.bg,
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={stagger}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              gap: "40px",
              marginBottom: "55px",
              flexWrap: "wrap",
            }}
          >
            <motion.div variants={reveal}>
              <div
                style={{
                  color: colors.accent,
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                02 / Capabilities
              </div>

              <h2
                style={{
                  fontSize: "clamp(38px, 5vw, 65px)",
                  lineHeight: 1,
                  letterSpacing: "-3px",
                  margin: 0,
                }}
              >
                From foundation
                <br />
                <span style={{ color: colors.muted }}>
                  to public realm.
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={reveal}
              style={{
                color: colors.muted,
                maxWidth: "440px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              A complete range of transport and civil infrastructure delivered
              through a coordinated engineering and execution platform.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1px",
              background: colors.line,
              border: `1px solid ${colors.line}`,
            }}
          >
            {infrastructureTypes.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={reveal}
                  whileHover={{
                    backgroundColor: colors.card2,
                    y: -3,
                  }}
                  style={{
                    minHeight: "310px",
                    padding: "38px",
                    background: colors.card,
                    position: "relative",
                    transition: "background 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(183,214,92,0.08)",
                        border: `1px solid ${colors.lineStrong}`,
                        color: colors.accent,
                        borderRadius: "9px",
                      }}
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.5}
                      />
                    </div>

                    <span
                      style={{
                        color: "rgba(255,255,255,0.24)",
                        fontSize: "13px",
                        fontWeight: 900,
                      }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "23px",
                      margin: "35px 0 13px",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: colors.muted,
                      lineHeight: 1.75,
                      fontSize: "14px",
                      maxWidth: "500px",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    style={{
                      position: "absolute",
                      left: "38px",
                      bottom: "27px",
                      width: "38px",
                      height: "1px",
                      background: colors.accent,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL SYSTEMS
      ========================================================= */}

      <section
        style={{
          padding: "120px 6%",
          background: colors.card,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "rgba(183,214,92,0.06)",
            filter: "blur(120px)",
            left: "-250px",
            top: "10%",
          }}
        />

        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={reveal}
            style={{
              maxWidth: "780px",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              03 / Engineering
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 64px)",
                lineHeight: 1,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              The engineering
              <br />
              <span style={{ color: colors.accent }}>
                behind movement.
              </span>
            </h2>

            <p
              style={{
                color: colors.muted,
                lineHeight: 1.75,
                marginTop: "24px",
              }}
            >
              Long-life infrastructure depends on more than the visible
              structure. Drainage, foundations, structural coordination,
              traffic interfaces, safety and maintenance considerations all
              influence the final asset.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
            }}
          >
            {technicalSystems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={reveal}
                  whileHover={{
                    y: -5,
                    borderColor: colors.lineStrong,
                  }}
                  style={{
                    padding: "29px",
                    background: "rgba(255,255,255,0.025)",
                    border: `1px solid ${colors.line}`,
                    borderRadius: "4px",
                    transition: "border-color 0.25s ease",
                  }}
                >
                  <Icon
                    size={25}
                    color={colors.accent}
                    strokeWidth={1.5}
                  />

                  <h3
                    style={{
                      fontSize: "18px",
                      margin: "22px 0 10px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: colors.muted,
                      fontSize: "13px",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          ROADS / HIGHWAYS FEATURE
      ========================================================= */}

      <section
        style={{
          padding: "120px 6%",
          background: colors.bg2,
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            minHeight: "570px",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            style={{
              minHeight: "570px",
              backgroundImage:
                "linear-gradient(90deg, rgba(7,16,20,0.25), rgba(7,16,20,0.05)), url('https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1800&q=85')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            style={{
              padding: "60px",
              background: colors.card,
              border: `1px solid ${colors.line}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Roads & Highways
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 58px)",
                lineHeight: 1,
                letterSpacing: "-2.5px",
                margin: 0,
              }}
            >
              Designed for
              <br />
              <span style={{ color: colors.accent }}>
                daily demand.
              </span>
            </h2>

            <p
              style={{
                color: colors.muted,
                lineHeight: 1.8,
                fontSize: "14px",
                marginTop: "25px",
              }}
            >
              Roads and highways carry continuous traffic loads and connect
              communities, cities and economic centres. Our approach considers
              durability, structural performance, drainage, safety and
              execution requirements together.
            </p>

            <div
              style={{
                marginTop: "30px",
                display: "grid",
                gap: "13px",
              }}
            >
              {[
                "Urban & inter-urban roads",
                "Highway infrastructure",
                "Traffic-load considerations",
                "Long-term performance",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: colors.soft,
                    fontSize: "13px",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    color={colors.accent}
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BRIDGES / FLYOVERS
      ========================================================= */}

      <section
        style={{
          padding: "0 6% 120px",
          background: colors.bg2,
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            minHeight: "570px",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            style={{
              padding: "60px",
              background: colors.card,
              border: `1px solid ${colors.line}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Bridges & Flyovers
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 58px)",
                lineHeight: 1,
                letterSpacing: "-2.5px",
                margin: 0,
              }}
            >
              Structures that
              <br />
              <span style={{ color: colors.accent }}>
                connect.
              </span>
            </h2>

            <p
              style={{
                color: colors.muted,
                lineHeight: 1.8,
                fontSize: "14px",
                marginTop: "25px",
              }}
            >
              Bridge and flyover infrastructure demands structural discipline,
              site coordination and careful consideration of public movement.
              Cymetree's approach brings these requirements together within a
              coordinated delivery programme.
            </p>

            <div
              style={{
                marginTop: "30px",
                display: "grid",
                gap: "13px",
              }}
            >
              {[
                "Multiple structural typologies",
                "Urban flyover construction",
                "Traffic-management integration",
                "Long service-life focus",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: colors.soft,
                    fontSize: "13px",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    color={colors.accent}
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            style={{
              minHeight: "570px",
              backgroundImage:
                "linear-gradient(90deg, rgba(7,16,20,0.08), rgba(7,16,20,0.5)), url('https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=85')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>

      {/* =========================================================
          DELIVERY MODEL
      ========================================================= */}

      <section
        style={{
          padding: "125px 6%",
          background: colors.bg,
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={reveal}
            style={{
              marginBottom: "65px",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              04 / Delivery Model
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 65px)",
                lineHeight: 1,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              From requirement
              <br />
              <span style={{ color: colors.muted }}>
                to public asset.
              </span>
            </h2>
          </motion.div>

          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "31px",
                left: "8%",
                right: "8%",
                height: "1px",
                background: colors.lineStrong,
              }}
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "20px",
                position: "relative",
              }}
            >
              {deliveryStages.map((stage) => (
                <motion.div
                  key={stage.number}
                  variants={reveal}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "63px",
                      height: "63px",
                      borderRadius: "50%",
                      margin: "0 auto 23px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: colors.bg,
                      border: `1px solid ${colors.accent}`,
                      color: colors.accent,
                      fontSize: "12px",
                      fontWeight: 900,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {stage.number}
                  </div>

                  <h3
                    style={{
                      fontSize: "15px",
                      margin: "0 0 9px",
                    }}
                  >
                    {stage.title}
                  </h3>

                  <p
                    style={{
                      color: colors.muted,
                      fontSize: "12px",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {stage.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTORS
      ========================================================= */}

      <section
        style={{
          padding: "115px 6%",
          background: colors.card,
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "90px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={reveal}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              05 / Industries
            </div>

            <h2
              style={{
                fontSize: "clamp(40px, 5vw, 65px)",
                lineHeight: 1,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              Across every
              <br />
              <span style={{ color: colors.accent }}>
                sector that matters.
              </span>
            </h2>

            <p
              style={{
                color: colors.muted,
                fontSize: "15px",
                lineHeight: 1.8,
                maxWidth: "450px",
                marginTop: "25px",
              }}
            >
              Transport and civil infrastructure serves public agencies,
              concession projects and institutions responsible for the
              movement and development of cities and regions.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
            }}
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={sector}
                variants={reveal}
                whileHover={{
                  x: 5,
                  borderColor: colors.lineStrong,
                }}
                style={{
                  minHeight: "85px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "20px",
                  background: colors.bg,
                  border: `1px solid ${colors.line}`,
                  transition: "border-color 0.25s ease",
                }}
              >
                <span
                  style={{
                    color: colors.accent,
                    fontSize: "11px",
                    fontWeight: 900,
                    minWidth: "22px",
                  }}
                >
                  0{index + 1}
                </span>

                <span
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.4,
                    fontWeight: 600,
                  }}
                >
                  {sector}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          LIFECYCLE VALUE
      ========================================================= */}

      <section
        style={{
          padding: "120px 6%",
          background: colors.bg2,
          borderTop: `1px solid ${colors.line}`,
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={reveal}
            style={{
              maxWidth: "800px",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              06 / Lifecycle Thinking
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 64px)",
                lineHeight: 1,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              Build once.
              <br />
              <span style={{ color: colors.accent }}>
                Perform for decades.
              </span>
            </h2>

            <p
              style={{
                color: colors.muted,
                lineHeight: 1.8,
                fontSize: "15px",
                marginTop: "25px",
                maxWidth: "650px",
              }}
            >
              Transport infrastructure is a long-term public asset. Design
              and construction decisions influence durability, maintenance
              requirements, safety and the experience of the communities that
              depend on it.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
            }}
          >
            {[
              {
                icon: Gauge,
                title: "Durability",
                text: "Engineering decisions focused on long-term structural and civil performance.",
              },
              {
                icon: ShieldCheck,
                title: "Safety",
                text: "Quality and safety requirements embedded throughout project execution.",
              },
              {
                icon: MapPinned,
                title: "Public Value",
                text: "Infrastructure designed around mobility, accessibility and community needs.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={reveal}
                  whileHover={{
                    y: -5,
                  }}
                  style={{
                    padding: "32px",
                    background: colors.card,
                    border: `1px solid ${colors.line}`,
                  }}
                >
                  <Icon
                    size={27}
                    color={colors.accent}
                    strokeWidth={1.5}
                  />

                  <h3
                    style={{
                      fontSize: "19px",
                      margin: "22px 0 10px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: colors.muted,
                      fontSize: "13px",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHY CYMETREE
      ========================================================= */}

      <section
        style={{
          padding: "120px 6%",
          background: colors.bg,
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={reveal}
            style={{
              maxWidth: "780px",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              07 / Why Cymetree
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 64px)",
                lineHeight: 1,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              Engineering discipline.
              <br />
              <span style={{ color: colors.accent }}>
                Execution certainty.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
            }}
          >
            {advantages.map((item) => (
              <motion.div
                key={item}
                variants={reveal}
                style={{
                  padding: "25px",
                  border: `1px solid ${colors.line}`,
                  background: colors.card,
                  display: "flex",
                  alignItems: "center",
                  gap: "13px",
                }}
              >
                <CheckCircle2
                  size={19}
                  color={colors.accent}
                  strokeWidth={1.7}
                />

                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section
        style={{
          padding: "120px 6%",
          background: colors.bg2,
        }}
      >
        <motion.div
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
            duration: 0.8,
            ease,
          }}
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
            padding: "75px 7%",
            border: `1px solid ${colors.lineStrong}`,
            background:
              "radial-gradient(circle at 80% 30%, rgba(183,214,92,0.12), transparent 35%), #0B171B",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-90px",
              bottom: "-120px",
              width: "330px",
              height: "330px",
              borderRadius: "50%",
              border: `1px solid ${colors.lineStrong}`,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "780px",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Start a Conversation
            </div>

            <h2
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              Planning the next
              <br />
              <span style={{ color: colors.accent }}>
                critical connection?
              </span>
            </h2>

            <p
              style={{
                color: colors.muted,
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "620px",
                margin: "25px 0 35px",
              }}
            >
              Talk to Cymetree about the engineering, execution and
              infrastructure requirements behind your next transport or civil
              infrastructure project.
            </p>

            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "11px",
                padding: "16px 22px",
                background: colors.accent,
                color: "#10180E",
                textDecoration: "none",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 800,
              }}
            >
              Discuss Your Project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* =========================================================
          RESPONSIVE
      ========================================================= */}

      <style>
        {`
          @media (max-width: 1000px) {

            div[style*="grid-template-columns: 0.8fr 1.2fr"],
            div[style*="grid-template-columns: 0.85fr 1.15fr"] {
              grid-template-columns: 1fr !important;
              gap: 50px !important;
            }

            div[style*="grid-template-columns: 1.05fr 0.95fr"],
            div[style*="grid-template-columns: 0.95fr 1.05fr"] {
              grid-template-columns: 1fr !important;
            }

            div[style*="grid-template-columns: repeat(6, 1fr)"] {
              grid-template-columns: repeat(3, 1fr) !important;
              row-gap: 45px !important;
            }

            div[style*="grid-template-columns: repeat(3, 1fr)"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 700px) {

            section {
              padding-left: 5% !important;
              padding-right: 5% !important;
            }

            h1 {
              letter-spacing: -2px !important;
            }

            div[style*="grid-template-columns: repeat(2, 1fr)"],
            div[style*="grid-template-columns: repeat(3, 1fr)"] {
              grid-template-columns: 1fr !important;
            }

            div[style*="grid-template-columns: repeat(6, 1fr)"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }

            div[style*="padding: 60px"] {
              padding: 42px 30px !important;
            }

            div[style*="min-height: 570px"] {
              min-height: 480px !important;
            }

            div[style*="padding: 75px 7%"] {
              padding: 50px 7% !important;
            }
          }

          @media (max-width: 480px) {

            div[style*="grid-template-columns: repeat(6, 1fr)"] {
              grid-template-columns: 1fr !important;
            }

            h2 {
              letter-spacing: -2px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default TransportandCivil;