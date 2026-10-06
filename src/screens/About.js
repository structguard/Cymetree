import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  HeartPulse,
  Leaf,
  Network,
  ShieldCheck,
  Target,
  TrainFront,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import Header from "../screens/Header";
import Footer from "../screens/Footer";

const C = {
  bg: "#071012",
  bgSoft: "#0B181B",
  panel: "#102124",
  panel2: "#142A2E",
  white: "#F5F7F3",
  muted: "#A8B5B6",
  muted2: "#748486",
  accent: "#C4D96B",
  accentSoft: "rgba(196,217,107,0.12)",
  border: "rgba(255,255,255,0.10)",
  borderStrong: "rgba(196,217,107,0.30)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
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

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

function SectionLabel({ number, children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        color: C.accent,
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
      }}
    >
      <span
        style={{
          width: 34,
          height: 1,
          background: C.accent,
          display: "inline-block",
        }}
      />

      <span>{number}</span>

      <span>{children}</span>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "8px 12px",
        borderRadius: 100,
        background: "rgba(255,255,255,0.06)",
        border: `1px solid ${C.border}`,
        color: C.muted,
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: C.accent,
        }}
      />
      {children}
    </span>
  );
}

function PillarCard({ number, icon: Icon, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -8,
        borderColor: C.borderStrong,
      }}
      style={{
        position: "relative",
        minHeight: 300,
        padding: 30,
        borderRadius: 24,
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025))",
        border: `1px solid ${C.border}`,
        overflow: "hidden",
        transition: "border-color .3s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -25,
          right: -10,
          fontSize: 120,
          lineHeight: 1,
          fontWeight: 900,
          color: "rgba(255,255,255,0.025)",
        }}
      >
        {number}
      </div>

      <div
        style={{
          width: 54,
          height: 54,
          borderRadius: 16,
          background: C.accentSoft,
          border: `1px solid ${C.borderStrong}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        <Icon size={23} color={C.accent} />
      </div>

      <div
        style={{
          color: C.accent,
          fontSize: 11,
          fontWeight: 900,
          letterSpacing: "0.14em",
          marginBottom: 10,
        }}
      >
        {number}
      </div>

      <h3
        style={{
          margin: "0 0 12px",
          color: C.white,
          fontSize: 23,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: C.muted,
          fontSize: 14,
          lineHeight: 1.8,
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}

function AdvantageCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ x: 5 }}
      style={{
        display: "grid",
        gridTemplateColumns: "54px 1fr",
        gap: 18,
        padding: "25px 0",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: C.accentSoft,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={21} color={C.accent} />
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 8px",
            color: C.white,
            fontSize: 17,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            color: C.muted,
            fontSize: 14,
            lineHeight: 1.75,
          }}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}

function SectorCard({ icon: Icon, title, text, number }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -7 }}
      style={{
        position: "relative",
        minHeight: 260,
        padding: 26,
        borderRadius: 22,
        background: C.panel,
        border: `1px solid ${C.border}`,
        overflow: "hidden",
        transition: "transform .3s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 18,
          right: 20,
          color: "rgba(255,255,255,0.12)",
          fontWeight: 900,
          fontSize: 12,
          letterSpacing: "0.12em",
        }}
      >
        {number}
      </div>

      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: C.accentSoft,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 65,
        }}
      >
        <Icon size={21} color={C.accent} />
      </div>

      <h3
        style={{
          color: C.white,
          fontSize: 18,
          margin: "0 0 9px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: C.muted,
          lineHeight: 1.7,
          fontSize: 13,
          margin: 0,
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}

function TeamCard({ name, role, image }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        background: C.panel,
        border: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          height: 280,
          position: "relative",
          overflow: "hidden",
          background: "#172528",
        }}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          style={{
            ...imageStyle,
            filter: "grayscale(20%)",
            transition: "transform .5s ease",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(7,16,18,.85), transparent 60%)",
          }}
        />
      </div>

      <div style={{ padding: 20 }}>
        <h3
          style={{
            color: C.white,
            margin: "0 0 5px",
            fontSize: 17,
          }}
        >
          {name}
        </h3>

        <p
          style={{
            color: C.accent,
            margin: 0,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          {role}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <div
      style={{
        background: C.bg,
        color: C.white,
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          minHeight: "88vh",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=82"
          alt="Modern infrastructure project"
          fetchPriority="high"
          style={{
            position: "absolute",
            inset: 0,
            ...imageStyle,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(5,13,15,.96) 0%, rgba(5,13,15,.78) 42%, rgba(5,13,15,.25) 100%), linear-gradient(0deg, rgba(5,13,15,.92) 0%, transparent 55%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-5%",
            top: "15%",
            fontSize: "clamp(180px, 30vw, 500px)",
            lineHeight: 0.8,
            fontWeight: 900,
            color: "rgba(255,255,255,0.035)",
            userSelect: "none",
          }}
        >
          01
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "130px 7% 90px",
          }}
        >
          <motion.div variants={fadeUp}>
            <Pill>CYMETREE PROJECTS LLP</Pill>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{
              maxWidth: 950,
              margin: "22px 0 25px",
              fontSize: "clamp(52px, 8vw, 112px)",
              lineHeight: 0.91,
              letterSpacing: "-0.055em",
              fontWeight: 800,
            }}
          >
            Built for India's
            <br />
            <span style={{ color: C.accent }}>next decade.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              maxWidth: 650,
              margin: 0,
              color: "#D2DBD9",
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.7,
            }}
          >
            An emerging buildings and specialised infrastructure company
            delivering complex facilities under one accountable delivery
            model.
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{
              marginTop: 35,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "15px 22px",
                borderRadius: 100,
                background: C.accent,
                color: "#11190E",
                textDecoration: "none",
                fontWeight: 900,
                fontSize: 13,
              }}
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#who-we-are"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "15px 22px",
                borderRadius: 100,
                background: "rgba(255,255,255,0.07)",
                color: C.white,
                border: `1px solid ${C.border}`,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              Discover Cymetree
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section
        id="who-we-are"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "125px 7%",
        }}
      >
        <div
          className="about-intro-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.7fr 1.3fr",
            gap: 90,
            alignItems: "start",
          }}
        >
          <div>
            <SectionLabel number="01">Who We Are</SectionLabel>

            <div
              style={{
                marginTop: 40,
                color: C.muted2,
                fontSize: 12,
                letterSpacing: "0.12em",
                lineHeight: 1.8,
                textTransform: "uppercase",
              }}
            >
              Buildings
              <br />
              Infrastructure
              <br />
              Engineering
              <br />
              Sustainability
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2
              style={{
                margin: "0 0 30px",
                fontSize: "clamp(38px, 5vw, 68px)",
                lineHeight: 1,
                letterSpacing: "-0.045em",
              }}
            >
              Complex projects.
              <br />
              <span style={{ color: C.accent }}>One accountable partner.</span>
            </h2>

            <p
              style={{
                color: C.muted,
                fontSize: 17,
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              Cymetree Projects LLP is a specialised infrastructure partner
              delivering complex buildings and critical facilities across
              healthcare, institutional, transport, digital and industrial
              infrastructure.
            </p>

            <p
              style={{
                color: C.muted,
                fontSize: 15,
                lineHeight: 1.9,
                margin: "22px 0 0",
              }}
            >
              We operate at the intersection of structural engineering,
              building services, clinical and technical infrastructure
              planning, procurement, execution and sustainable design. The
              objective is simple: remove the interfaces that create delays,
              uncertainty and diluted accountability.
            </p>

            <div
              style={{
                marginTop: 35,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <Pill>Design Coordination</Pill>
              <Pill>Engineering</Pill>
              <Pill>Procurement</Pill>
              <Pill>Construction</Pill>
              <Pill>Commissioning</Pill>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          IMAGE STORY
      ===================================================== */}

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 7% 130px",
        }}
      >
        <div
          className="about-image-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr .65fr",
            gap: 18,
            minHeight: 650,
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: 500,
              borderRadius: 28,
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1500&q=80"
              alt="Construction team working on infrastructure"
              loading="lazy"
              style={imageStyle}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(0deg, rgba(5,13,15,.9), transparent 55%)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: 30,
                right: 30,
                bottom: 30,
              }}
            >
              <div
                style={{
                  color: C.accent,
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: "0.18em",
                  marginBottom: 10,
                }}
              >
                OUR APPROACH
              </div>

              <h3
                style={{
                  margin: 0,
                  maxWidth: 600,
                  fontSize: "clamp(25px, 4vw, 46px)",
                  lineHeight: 1.05,
                }}
              >
                Engineering-led thinking.
                <br />
                Execution-focused delivery.
              </h3>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gap: 18,
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80"
                alt="Healthcare infrastructure"
                loading="lazy"
                style={imageStyle}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(5,13,15,.48)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 22,
                  bottom: 22,
                  fontWeight: 800,
                  fontSize: 17,
                }}
              >
                Healthcare
                <br />
                Infrastructure
              </div>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80"
                alt="Sustainable infrastructure"
                loading="lazy"
                style={imageStyle}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(5,13,15,.5)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 22,
                  bottom: 22,
                  fontWeight: 800,
                  fontSize: 17,
                }}
              >
                Sustainable
                <br />
                Infrastructure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          THREE PILLARS
      ===================================================== */}

      <section
        style={{
          background: C.bgSoft,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "120px 7%",
          }}
        >
          <SectionLabel number="02">Our Three Pillars</SectionLabel>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              justifyContent: "space-between",
              gap: 40,
              alignItems: "end",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                maxWidth: 650,
                margin: 0,
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1,
                letterSpacing: "-0.045em",
              }}
            >
              How we are
              <br />
              <span style={{ color: C.accent }}>structured to deliver.</span>
            </h2>

            <p
              style={{
                maxWidth: 430,
                color: C.muted,
                lineHeight: 1.8,
                margin: 0,
                fontSize: 14,
              }}
            >
              Our model brings specialist capability and execution discipline
              together under one platform.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="about-three-pillars"
            style={{
              marginTop: 65,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
          >
            <PillarCard
              number="01"
              icon={Workflow}
              title="Integrated Delivery"
              text="Design through handover under one execution platform with single-point accountability."
            />

            <PillarCard
              number="02"
              icon={Building2}
              title="Specialised Focus"
              text="Deep expertise in healthcare, institutional and mission-critical buildings where complexity demands specialist thinking."
            />

            <PillarCard
              number="03"
              icon={Leaf}
              title="Responsible Build"
              text="Sustainability and green building principles embedded into design, procurement and execution."
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VISION / MISSION
      ===================================================== */}

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "130px 7%",
        }}
      >
        <div
          className="mission-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
          }}
        >
          <motion.div
            whileHover={{ y: -5 }}
            style={{
              padding: "50px 45px",
              borderRadius: 28,
              background: C.accent,
              color: "#10160D",
              minHeight: 360,
            }}
          >
            <Target size={30} />

            <div
              style={{
                marginTop: 60,
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.18em",
              }}
            >
              OUR VISION
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 3.4vw, 45px)",
                lineHeight: 1.05,
                margin: "18px 0 0",
                letterSpacing: "-0.04em",
              }}
            >
              To emerge as a nationally recognised leader in specialised and
              sustainable infrastructure development.
            </h2>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            style={{
              padding: "50px 45px",
              borderRadius: 28,
              background: C.panel,
              border: `1px solid ${C.border}`,
              minHeight: 360,
            }}
          >
            <ShieldCheck size={30} color={C.accent} />

            <div
              style={{
                marginTop: 60,
                color: C.accent,
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.18em",
              }}
            >
              OUR MISSION
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 3.4vw, 45px)",
                lineHeight: 1.05,
                margin: "18px 0 0",
                letterSpacing: "-0.04em",
              }}
            >
              Deliver specialised infrastructure that institutions depend on
              — with engineering rigour and single-point accountability.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTORS
      ===================================================== */}

      <section
        style={{
          background: "#081315",
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "120px 7%",
          }}
        >
          <SectionLabel number="03">Where We Work</SectionLabel>

          <h2
            style={{
              maxWidth: 800,
              margin: "35px 0 60px",
              fontSize: "clamp(38px, 5vw, 68px)",
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
            }}
          >
            Infrastructure that
            <br />
            <span style={{ color: C.accent }}>matters.</span>
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="sector-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
          >
            <SectorCard
              number="01"
              icon={Building2}
              title="Building Construction"
              text="Institutional, commercial, residential and industrial buildings built for performance and durability."
            />

            <SectorCard
              number="02"
              icon={HeartPulse}
              title="Healthcare Infrastructure"
              text="Hospitals, medical colleges and tertiary care environments planned around clinical workflows."
            />

            <SectorCard
              number="03"
              icon={ShieldCheck}
              title="Critical Care & Clinical"
              text="Specialised environments where engineering precision directly impacts operational performance."
            />

            <SectorCard
              number="04"
              icon={TrainFront}
              title="Transport & Civil"
              text="Infrastructure designed for long service life, reliability and lower maintenance burden."
            />

            <SectorCard
              number="05"
              icon={Factory}
              title="Digital & Industrial"
              text="High-performance environments for data, manufacturing and logistics where uptime matters."
            />

            <SectorCard
              number="06"
              icon={Leaf}
              title="Green Infrastructure"
              text="Sustainability integrated into energy, water, materials and long-term asset performance."
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ADVANTAGES
      ===================================================== */}

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "130px 7%",
        }}
      >
        <div
          className="advantage-grid"
          style={{
            display: "grid",
            gridTemplateColumns: ".8fr 1.2fr",
            gap: 100,
          }}
        >
          <div>
            <SectionLabel number="04">Our Advantage</SectionLabel>

            <h2
              style={{
                margin: "35px 0 20px",
                fontSize: "clamp(40px, 5vw, 68px)",
                lineHeight: 0.98,
                letterSpacing: "-0.05em",
              }}
            >
              Why clients
              <br />
              choose <span style={{ color: C.accent }}>Cymetree.</span>
            </h2>

            <p
              style={{
                color: C.muted,
                lineHeight: 1.8,
                fontSize: 15,
                maxWidth: 450,
              }}
            >
              We combine specialist domain knowledge with the discipline of an
              integrated infrastructure delivery firm — creating a stronger
              execution platform for complex projects.
            </p>

            <div
              style={{
                marginTop: 35,
                padding: 24,
                borderRadius: 20,
                background: C.accentSoft,
                border: `1px solid ${C.borderStrong}`,
              }}
            >
              <Network size={22} color={C.accent} />

              <p
                style={{
                  color: C.white,
                  lineHeight: 1.7,
                  fontSize: 14,
                  margin: "15px 0 0",
                }}
              >
                One contract. One team. One accountable outcome.
              </p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <AdvantageCard
              icon={Building2}
              title="Expertise in specialised infrastructure"
              text="Our capability is built around the unique requirements of special and institutional environments rather than general construction alone."
            />

            <AdvantageCard
              icon={ShieldCheck}
              title="Government & public-sector execution"
              text="Experience working within technical specifications, procurement protocols and compliance requirements for complex public infrastructure programmes."
            />

            <AdvantageCard
              icon={Workflow}
              title="Integrated civil, MEP & equipment"
              text="Civil works, building services, equipment integration and specialised environments coordinated through a unified delivery platform."
            />

            <AdvantageCard
              icon={CheckCircle2}
              title="Quality, safety & compliance"
              text="Project governance, EHS protocols and quality systems embedded throughout project execution."
            />

            <AdvantageCard
              icon={Users}
              title="Strong technical ecosystem"
              text="A wider network of OEMs, consultants and specialist partners gives clients access to multidisciplinary expertise through one relationship."
            />

            <AdvantageCard
              icon={Leaf}
              title="Sustainability from the beginning"
              text="Energy efficiency, green building principles and lifecycle thinking integrated from design through execution."
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SUSTAINABILITY
      ===================================================== */}

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: C.accent,
          color: "#10160D",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "120px 7%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            className="sustainability-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 13px",
                  borderRadius: 100,
                  background: "rgba(16,22,13,.1)",
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                }}
              >
                <Leaf size={14} />
                SUSTAINABILITY
              </div>

              <h2
                style={{
                  margin: "30px 0 20px",
                  fontSize: "clamp(42px, 6vw, 76px)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.055em",
                }}
              >
                Build better.
                <br />
                Build responsibly.
              </h2>

              <p
                style={{
                  maxWidth: 580,
                  fontSize: 16,
                  lineHeight: 1.8,
                  opacity: 0.78,
                  margin: 0,
                }}
              >
                Sustainability at Cymetree is an engineering principle, not a
                finishing touch. Green building thinking is integrated into
                design, procurement and project execution from the outset.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {[
                "Energy Efficient HVAC",
                "Rainwater Harvesting",
                "Water Conservation",
                "Waste Management",
                "Sustainable Materials",
                "Low-carbon Systems",
                "Reduced Operating Cost",
                "Long-term Resilience",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "18px 16px",
                    borderRadius: 14,
                    background: "rgba(16,22,13,.08)",
                    border: "1px solid rgba(16,22,13,.13)",
                    fontSize: 13,
                    fontWeight: 750,
                  }}
                >
                  <CheckCircle2
                    size={15}
                    style={{ verticalAlign: "middle", marginRight: 8 }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TEAM
      ===================================================== */}

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "130px 7%",
        }}
      >
        <SectionLabel number="05">Our Team</SectionLabel>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 30,
            alignItems: "end",
            marginTop: 30,
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(38px, 5vw, 65px)",
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
            }}
          >
            Experienced leadership.
            <br />
            <span style={{ color: C.accent }}>Execution-driven teams.</span>
          </h2>

          <p
            style={{
              maxWidth: 400,
              margin: 0,
              color: C.muted,
              fontSize: 14,
              lineHeight: 1.8,
            }}
          >
            Cymetree brings together engineering, design, safety,
            sustainability, finance and project leadership under one
            collaborative ecosystem.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="team-grid"
          style={{
            marginTop: 65,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          <TeamCard
            name="Nitish Beri"
            role="Technical Mentor"
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
          />

          <TeamCard
            name="Binod Kumar"
            role="Project Head"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80"
          />

          <TeamCard
            name="Ar. Parag Kendrekar"
            role="Design Mentor"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
          />

          <TeamCard
            name="Sanket Gaikwad"
            role="Sr. Civil Engineer"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80"
          />
        </motion.div>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {[
            "Atharva Jadhav — Architect / Interior Designer",
            "A. Sudhakaru — EHS & Safety Lead",
            "CA Pritam Mahure — Tax & Regulatory Advisor",
            "CA Moni Bajaj — ESG & Sustainability Advisor",
            "CA Sumit Chandwani — Financial Advisor",
            "Shraddha Chillal — HR Executive",
          ].map((member) => (
            <div
              key={member}
              style={{
                padding: "12px 15px",
                borderRadius: 100,
                background: "rgba(255,255,255,.04)",
                border: `1px solid ${C.border}`,
                color: C.muted,
                fontSize: 12,
              }}
            >
              {member}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          STRATEGIC HORIZON
      ===================================================== */}

      <section
        style={{
          background: C.bgSoft,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "120px 7%",
          }}
        >
          <SectionLabel number="06">Our Strategic Horizon</SectionLabel>

          <h2
            style={{
              maxWidth: 850,
              margin: "35px 0 55px",
              fontSize: "clamp(38px, 5vw, 68px)",
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
            }}
          >
            From a regional base to a
            <span style={{ color: C.accent }}> national platform.</span>
          </h2>

          <div
            className="horizon-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: C.border,
              border: `1px solid ${C.border}`,
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            {[
              "Expansion across India's key special infrastructure clusters",
              "Large-scale government medical college and tertiary hospital programmes",
              "Active participation in healthcare PPP projects",
              "Leadership in sustainable, low-carbon hospital and institutional buildings",
            ].map((item, index) => (
              <div
                key={item}
                style={{
                  padding: 28,
                  background: C.bgSoft,
                  minHeight: 210,
                }}
              >
                <div
                  style={{
                    color: C.accent,
                    fontSize: 12,
                    fontWeight: 900,
                    marginBottom: 60,
                  }}
                >
                  0{index + 1}
                </div>

                <p
                  style={{
                    color: C.white,
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "140px 7%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 32,
            padding: "75px 8%",
            background:
              "linear-gradient(135deg, #162E31 0%, #0C1B1E 55%, #081214 100%)",
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 350,
              height: 350,
              borderRadius: "50%",
              background: "rgba(196,217,107,.12)",
              filter: "blur(70px)",
              right: -120,
              top: -160,
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <div
              style={{
                color: C.accent,
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.18em",
              }}
            >
              LET'S BUILD WHAT'S NEXT
            </div>

            <h2
              style={{
                maxWidth: 800,
                margin: "20px 0",
                fontSize: "clamp(40px, 6vw, 76px)",
                lineHeight: 0.95,
                letterSpacing: "-0.055em",
              }}
            >
              Have a complex project?
              <br />
              <span style={{ color: C.accent }}>Let's talk.</span>
            </h2>

            <p
              style={{
                maxWidth: 560,
                color: C.muted,
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              Whether it is a healthcare facility, institutional campus,
              industrial environment or mission-critical infrastructure,
              Cymetree brings the engineering and execution capability to move
              it forward.
            </p>

            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginTop: 18,
                padding: "16px 23px",
                borderRadius: 100,
                background: C.accent,
                color: "#10160D",
                textDecoration: "none",
                fontWeight: 900,
                fontSize: 13,
              }}
            >
              Start a Conversation
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* =====================================================
          RESPONSIVE
      ===================================================== */}

      <style>{`
        @media (max-width: 1000px) {
          .about-intro-grid,
          .advantage-grid {
            grid-template-columns: 1fr !important;
            gap: 55px !important;
          }

          .about-three-pillars,
          .sector-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .horizon-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .sustainability-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 760px) {
          .about-image-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }

          .about-image-grid > div:first-child {
            min-height: 430px !important;
          }

          .about-image-grid > div:last-child {
            min-height: 520px !important;
          }

          .mission-grid {
            grid-template-columns: 1fr !important;
          }

          .about-three-pillars,
          .sector-grid {
            grid-template-columns: 1fr !important;
          }

          .team-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 560px) {
          .team-grid,
          .horizon-grid {
            grid-template-columns: 1fr !important;
          }

          .about-image-grid > div:first-child {
            min-height: 360px !important;
          }

          .about-image-grid > div:last-child {
            min-height: 450px !important;
          }
        }

        @media (max-width: 430px) {
          .sustainability-grid > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}