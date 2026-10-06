// HealthcareInfrastructure.js

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Building2,
  Stethoscope,
  Activity,
  GraduationCap,
  Microscope,
  Hospital,
  ShieldCheck,
  Wind,
  Droplets,
  Settings2,
  ClipboardCheck,
  HardHat,
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
  soft: "#C6D0D1",
  accent: "#B7D65C",
  accentDark: "#8EA83F",
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

const capabilities = [
  {
    number: "01",
    icon: Hospital,
    title: "OPD & IPD Blocks",
    description:
      "Outpatient and inpatient departments designed around patient flow, clinical adjacency and operational efficiency.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Emergency & Specialty Blocks",
    description:
      "High-acuity environments built to handle critical care demands with speed, functionality and code compliance.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Medical Colleges",
    description:
      "Teaching and academic facilities integrated with clinical environments for learning, simulation and research.",
  },
  {
    number: "04",
    icon: Microscope,
    title: "Skill Labs & Simulation Centres",
    description:
      "Dedicated training environments equipped for clinical skill development and procedural simulation.",
  },
  {
    number: "05",
    icon: Building2,
    title: "Teaching Campuses",
    description:
      "Integrated academic and clinical campuses bringing education, training and patient care together.",
  },
  {
    number: "06",
    icon: Settings2,
    title: "Single-Window Campus Delivery",
    description:
      "End-to-end delivery covering civil, MEP, clinical equipment integration and commissioning under one accountable model.",
  },
];

const systems = [
  {
    icon: Stethoscope,
    title: "Clinical Workflow",
    text: "Planning environments around how patients, clinicians, staff and equipment actually move through a facility.",
  },
  {
    icon: ShieldCheck,
    title: "Infection Control",
    text: "Coordinating spatial planning and technical systems around healthcare infection-control requirements.",
  },
  {
    icon: Wind,
    title: "Critical HVAC",
    text: "Supporting technically demanding environments where ventilation and environmental control are critical.",
  },
  {
    icon: Activity,
    title: "Medical Gas Systems",
    text: "Coordinating essential healthcare infrastructure with the broader building engineering systems.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Compliance",
    text: "Integrating healthcare requirements and applicable regulatory considerations into project delivery.",
  },
  {
    icon: Settings2,
    title: "Equipment Integration",
    text: "Connecting clinical equipment requirements with civil, MEP and operational readiness.",
  },
];

const sectors = [
  "State Government Hospitals",
  "Specialty & Multispecialty Clinics",
  "Teaching & Tertiary Care Hospitals",
  "Private Hospital Groups",
  "Medical & Nursing Colleges",
  "Government Medical Colleges",
];

const process = [
  {
    number: "01",
    title: "Requirement Mapping",
    text: "Understand clinical, operational, academic and technical requirements.",
  },
  {
    number: "02",
    title: "Design Coordination",
    text: "Coordinate architectural, engineering and clinical requirements.",
  },
  {
    number: "03",
    title: "Engineering",
    text: "Translate project requirements into coordinated technical solutions.",
  },
  {
    number: "04",
    title: "Procurement",
    text: "Coordinate materials, systems and equipment required for execution.",
  },
  {
    number: "05",
    title: "Construction",
    text: "Execute with quality-controlled construction and technical coordination.",
  },
  {
    number: "06",
    title: "Commissioning",
    text: "Prepare systems and environments for operational readiness.",
  },
];

function HealthcareInfrastructure() {
  return (
    <div
      style={{
        background: colors.bg,
        color: colors.white,
        minHeight: "100vh",
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
          minHeight: "92vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "90px",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(90deg, rgba(7,16,20,0.98) 0%, rgba(7,16,20,0.91) 38%, rgba(7,16,20,0.48) 70%, rgba(7,16,20,0.72) 100%), url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2200&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.13,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 85%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(183,214,92,0.09)",
            filter: "blur(100px)",
            right: "-120px",
            top: "15%",
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
              maxWidth: "820px",
            }}
          >
            <motion.div
              variants={reveal}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "9px 14px",
                border: `1px solid ${colors.lineStrong}`,
                borderRadius: "100px",
                color: colors.accent,
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                background: "rgba(183,214,92,0.06)",
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
              Specialised Healthcare Infrastructure
            </motion.div>

            <motion.h1
              variants={reveal}
              style={{
                fontSize: "clamp(48px, 7vw, 94px)",
                lineHeight: 0.96,
                letterSpacing: "-4px",
                fontWeight: 600,
                margin: 0,
                maxWidth: "850px",
              }}
            >
              Healthcare spaces
              <br />
              <span style={{ color: colors.accent }}>
                built around care.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              style={{
                color: colors.soft,
                fontSize: "18px",
                lineHeight: 1.7,
                maxWidth: "680px",
                marginTop: "30px",
              }}
            >
              Hospitals, medical colleges and tertiary care facilities
              engineered around clinical workflows and built for long-term
              operational performance.
            </motion.p>

            <motion.div
              variants={reveal}
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "38px",
              }}
            >
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "15px 21px",
                  borderRadius: "5px",
                  background: colors.accent,
                  color: "#10180E",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: "14px",
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
                  borderRadius: "5px",
                  border: `1px solid rgba(255,255,255,0.2)`,
                  background: "rgba(255,255,255,0.04)",
                  color: colors.white,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "14px",
                  backdropFilter: "blur(10px)",
                }}
              >
                Explore Projects
                <ArrowRight size={17} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: "28px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            color: colors.muted,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            fontSize: "10px",
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
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.8fr 1.5fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <motion.div variants={reveal}>
            <div
              style={{
                color: colors.accent,
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              01 / Healthcare Thinking
            </div>

            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 62px)",
                lineHeight: 1.02,
                letterSpacing: "-2.5px",
                margin: 0,
                fontWeight: 600,
              }}
            >
              We're built around
              <br />
              <span style={{ color: colors.accent }}>
                how healthcare works.
              </span>
            </h2>
          </motion.div>

          <motion.div variants={reveal}>
            <p
              style={{
                fontSize: "21px",
                lineHeight: 1.65,
                color: colors.white,
                marginTop: 0,
                marginBottom: "25px",
              }}
            >
              Healthcare buildings are among the most complex structures to
              deliver. Every space, every system and every material choice can
              influence clinical outcomes, infection control, staff efficiency
              and patient experience.
            </p>

            <p
              style={{
                color: colors.muted,
                fontSize: "16px",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Cymetree has built its healthcare delivery capability around
              hospitals, medical colleges, teaching campuses and tertiary care
              facilities. Our approach considers clinical workflows, infection
              control zoning, medical gas systems, critical HVAC and the
              regulatory standards governing healthcare environments in India.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginTop: "40px",
              }}
            >
              {[
                ["Clinical", "Workflow"],
                ["Technical", "Coordination"],
                ["Operational", "Readiness"],
              ].map(([top, bottom]) => (
                <div
                  key={top}
                  style={{
                    borderTop: `1px solid ${colors.lineStrong}`,
                    paddingTop: "15px",
                  }}
                >
                  <div
                    style={{
                      color: colors.accent,
                      fontSize: "13px",
                      fontWeight: 800,
                    }}
                  >
                    {top}
                  </div>
                  <div
                    style={{
                      color: colors.soft,
                      fontSize: "13px",
                      marginTop: "3px",
                    }}
                  >
                    {bottom}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
          CAPABILITIES
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
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "40px",
              alignItems: "end",
              marginBottom: "55px",
              flexWrap: "wrap",
            }}
          >
            <motion.div variants={reveal}>
              <div
                style={{
                  color: colors.accent,
                  fontSize: "12px",
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
                  fontWeight: 600,
                }}
              >
                From foundation
                <br />
                <span style={{ color: colors.muted }}>to finish.</span>
              </h2>
            </motion.div>

            <motion.p
              variants={reveal}
              style={{
                color: colors.muted,
                maxWidth: "440px",
                lineHeight: 1.7,
                margin: 0,
                fontSize: "15px",
              }}
            >
              Healthcare construction delivered with precision across clinical,
              academic and specialised healthcare environments.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: colors.line,
              border: `1px solid ${colors.line}`,
            }}
          >
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={reveal}
                  whileHover={{
                    backgroundColor: colors.card2,
                    y: -3,
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    background: colors.card,
                    padding: "35px 30px",
                    minHeight: "285px",
                    position: "relative",
                    transition: "background 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(183,214,92,0.08)",
                        color: colors.accent,
                        border: `1px solid ${colors.lineStrong}`,
                      }}
                    >
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <span
                      style={{
                        color: "rgba(255,255,255,0.25)",
                        fontSize: "13px",
                        fontWeight: 800,
                      }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "21px",
                      margin: "35px 0 12px",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: colors.muted,
                      fontSize: "14px",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    style={{
                      position: "absolute",
                      left: "30px",
                      bottom: "25px",
                      width: "35px",
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
          SYSTEMS
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
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(183,214,92,0.06)",
            filter: "blur(110px)",
            left: "-250px",
            top: "15%",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1250px",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            style={{
              maxWidth: "760px",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              03 / Clinical + Technical
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 64px)",
                lineHeight: 1.02,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              Healthcare is more than
              <br />
              <span style={{ color: colors.accent }}>a building.</span>
            </h2>

            <p
              style={{
                color: colors.muted,
                lineHeight: 1.75,
                marginTop: "24px",
                maxWidth: "650px",
              }}
            >
              Successful healthcare environments require multiple disciplines
              to work together. Cymetree's delivery approach connects the
              clinical environment with the building's technical systems.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {systems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={reveal}
                  whileHover={{ y: -5 }}
                  style={{
                    padding: "28px",
                    border: `1px solid ${colors.line}`,
                    background: "rgba(255,255,255,0.025)",
                    borderRadius: "4px",
                  }}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    color={colors.accent}
                  />

                  <h3
                    style={{
                      margin: "22px 0 10px",
                      fontSize: "18px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: colors.muted,
                      fontSize: "14px",
                      lineHeight: 1.7,
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
          PROCESS
      ========================================================= */}
      <section
        style={{
          padding: "125px 6%",
          background: colors.bg2,
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
            viewport={{ once: true }}
            variants={reveal}
            style={{
              marginBottom: "65px",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "12px",
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
              One coordinated path
              <br />
              <span style={{ color: colors.muted }}>
                from requirement to readiness.
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
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "20px",
                position: "relative",
              }}
            >
              {process.map((item) => (
                <motion.div
                  key={item.number}
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
                      margin: "0 auto 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: colors.bg2,
                      border: `1px solid ${colors.accent}`,
                      color: colors.accent,
                      fontSize: "13px",
                      fontWeight: 800,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {item.number}
                  </div>

                  <h3
                    style={{
                      fontSize: "15px",
                      margin: "0 0 9px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: colors.muted,
                      fontSize: "12px",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.text}
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
          padding: "110px 6%",
          background: colors.bg,
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "90px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "12px",
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
              <span style={{ color: colors.accent }}>sector that matters.</span>
            </h2>

            <p
              style={{
                color: colors.muted,
                lineHeight: 1.75,
                fontSize: "15px",
                maxWidth: "430px",
                marginTop: "25px",
              }}
            >
              From public healthcare systems to private institutions and
              medical education environments, our healthcare capability is
              structured around specialised infrastructure requirements.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
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
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "22px",
                  background: colors.card,
                  border: `1px solid ${colors.line}`,
                  minHeight: "80px",
                  transition: "border-color 0.25s ease",
                }}
              >
                <span
                  style={{
                    color: colors.accent,
                    fontSize: "11px",
                    fontWeight: 800,
                    minWidth: "22px",
                  }}
                >
                  0{index + 1}
                </span>

                <span
                  style={{
                    fontSize: "14px",
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
          PROJECTS / VISUAL
      ========================================================= */}
      <section
        style={{
          padding: "0 6% 120px",
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
            viewport={{ once: true }}
            variants={reveal}
            style={{
              position: "relative",
              minHeight: "500px",
              overflow: "hidden",
              backgroundImage:
                "linear-gradient(90deg, rgba(7,16,20,0.94), rgba(7,16,20,0.55)), url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=85')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "end",
              padding: "55px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: `1px solid ${colors.line}`,
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                maxWidth: "700px",
              }}
            >
              <div
                style={{
                  color: colors.accent,
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                Healthcare Projects
              </div>

              <h2
                style={{
                  fontSize: "clamp(35px, 5vw, 60px)",
                  lineHeight: 1,
                  letterSpacing: "-2.5px",
                  margin: 0,
                }}
              >
                Infrastructure that
                <br />
                <span style={{ color: colors.accent }}>
                  supports outcomes.
                </span>
              </h2>

              <p
                style={{
                  color: colors.soft,
                  lineHeight: 1.7,
                  maxWidth: "600px",
                  margin: "22px 0 30px",
                }}
              >
                Explore Cymetree's specialised healthcare and critical
                infrastructure portfolio.
              </p>

              <a
                href="/projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: colors.white,
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: "14px",
                  borderBottom: `1px solid ${colors.accent}`,
                  paddingBottom: "8px",
                }}
              >
                View Healthcare Projects
                <ArrowUpRight size={17} color={colors.accent} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHY CYMETREE
      ========================================================= */}
      <section
        style={{
          padding: "120px 6%",
          background: colors.card,
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
            viewport={{ once: true }}
            variants={reveal}
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 65px",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              06 / Why Cymetree
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 62px)",
                lineHeight: 1,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              One accountable team.
              <br />
              <span style={{ color: colors.accent }}>
                One coordinated outcome.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
            }}
          >
            {[
              "Single-point accountability",
              "Clinical + technical coordination",
              "Quality-controlled execution",
              "Healthcare-grade compliance",
              "Equipment integration",
              "Operational readiness",
            ].map((item) => (
              <motion.div
                key={item}
                variants={reveal}
                style={{
                  padding: "24px",
                  border: `1px solid ${colors.line}`,
                  background: "rgba(255,255,255,0.025)",
                  display: "flex",
                  alignItems: "center",
                  gap: "13px",
                }}
              >
                <CheckCircle2
                  size={20}
                  color={colors.accent}
                  strokeWidth={1.7}
                />

                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
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
          background: colors.bg,
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            border: `1px solid ${colors.lineStrong}`,
            background:
              "radial-gradient(circle at 80% 30%, rgba(183,214,92,0.12), transparent 35%), #0B171B",
            padding: "75px 7%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-70px",
              bottom: "-100px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: `1px solid ${colors.lineStrong}`,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "750px",
            }}
          >
            <div
              style={{
                color: colors.accent,
                fontSize: "12px",
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
              Planning a healthcare
              <br />
              <span style={{ color: colors.accent }}>facility?</span>
            </h2>

            <p
              style={{
                color: colors.muted,
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: "600px",
                margin: "25px 0 35px",
              }}
            >
              Let's discuss the clinical, technical and delivery requirements
              behind your next healthcare infrastructure project.
            </p>

            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: colors.accent,
                color: "#10180E",
                padding: "16px 22px",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "14px",
                borderRadius: "4px",
              }}
            >
              Get Started
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 1000px) {
            section > div[style*="grid-template-columns: 0.8fr 1.5fr"] {
              grid-template-columns: 1fr !important;
              gap: 45px !important;
            }

            section > div[style*="grid-template-columns: 0.8fr 1.2fr"] {
              grid-template-columns: 1fr !important;
              gap: 50px !important;
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

            div[style*="grid-template-columns: repeat(3, 1fr)"],
            div[style*="grid-template-columns: repeat(2, 1fr)"] {
              grid-template-columns: 1fr !important;
            }

            div[style*="grid-template-columns: repeat(6, 1fr)"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }

            div[style*="padding: 75px 7%"] {
              padding: 50px 7% !important;
            }

            div[style*="min-height: 500px"] {
              min-height: 570px !important;
              padding: 35px !important;
            }
          }

          @media (max-width: 480px) {
            div[style*="grid-template-columns: repeat(3, 1fr)"] {
              grid-template-columns: 1fr !important;
            }

            div[style*="grid-template-columns: repeat(6, 1fr)"] {
              grid-template-columns: 1fr !important;
            }

            h2 {
              letter-spacing: -1.8px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default HealthcareInfrastructure;