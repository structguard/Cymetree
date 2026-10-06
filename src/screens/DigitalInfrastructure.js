import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Database,
    Factory,
    Server,
    Boxes,
    Zap,
    ShieldCheck,
    Activity,
    Gauge,
    Cpu,
    Network,
    CheckCircle2,
    ChevronDown,
    Layers3,
    Settings2,
    HardHat,
    Leaf,
} from "lucide-react";

import Header from "../screens/Header";
import Footer from "../screens/Footer";

const COLORS = {
    bg: "#07100D",
    bgSoft: "#0C1713",
    card: "#101D18",
    card2: "#13231D",
    lime: "#B8F34A",
    limeSoft: "#D5FF83",
    white: "#F5F7F2",
    muted: "#9DAAA3",
    border: "rgba(184,243,74,0.16)",
    borderLight: "rgba(255,255,255,0.09)",
};

const reveal = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: "easeOut" },
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
        icon: Server,
        title: "Data Centres",
        text: "High-performance environments engineered around availability, resilience, security and continuous operation.",
        tags: ["Mission Critical", "High Availability"],
    },
    {
        number: "02",
        icon: Factory,
        title: "Industrial Facilities",
        text: "Functional industrial buildings designed around production workflows, equipment requirements and long-term operational efficiency.",
        tags: ["Manufacturing", "Production"],
    },
    {
        number: "03",
        icon: Boxes,
        title: "Warehousing & Logistics",
        text: "Scalable logistics facilities planned for material flow, storage efficiency, movement and future expansion.",
        tags: ["Logistics", "Distribution"],
    },
    {
        number: "04",
        icon: Cpu,
        title: "Technology Infrastructure",
        text: "Infrastructure environments supporting digital operations, technology systems and high-performance computing requirements.",
        tags: ["Digital", "Technology"],
    },
    {
        number: "05",
        icon: Zap,
        title: "Power & Utility Infrastructure",
        text: "Integrated electrical, mechanical and utility systems designed to support dependable facility performance.",
        tags: ["Power", "Utilities"],
    },
    {
        number: "06",
        icon: Layers3,
        title: "Specialised Industrial Works",
        text: "Complex civil, structural and building systems coordinated around specialised equipment and operational requirements.",
        tags: ["Specialised", "Engineering"],
    },
];

const systems = [
    {
        icon: Network,
        title: "Integrated Engineering",
        text: "Civil, structural, architectural, MEP and specialist systems coordinated through one delivery platform.",
    },
    {
        icon: Gauge,
        title: "Performance Engineering",
        text: "Design decisions are driven by operational performance, reliability and long-term asset requirements.",
    },
    {
        icon: ShieldCheck,
        title: "Reliability & Resilience",
        text: "Critical infrastructure requires systems that continue performing under demanding operating conditions.",
    },
    {
        icon: Activity,
        title: "Operational Continuity",
        text: "Planning considers uptime, maintainability, access, redundancy and future operational changes.",
    },
    {
        icon: Settings2,
        title: "Equipment Integration",
        text: "Building infrastructure is coordinated around the equipment and technology that ultimately drive operations.",
    },
    {
        icon: Leaf,
        title: "Energy Efficiency",
        text: "Efficient systems and lifecycle thinking are integrated from design through execution.",
    },
];

const industries = [
    "Data Centre & Digital Infrastructure",
    "Manufacturing & Industrial Facilities",
    "Warehousing & Logistics",
    "Technology & High-Performance Facilities",
    "Research & Development Facilities",
    "Institutional & Specialised Buildings",
];

const process = [
    {
        step: "01",
        title: "Requirement Mapping",
        text: "Understanding operational requirements, capacity, equipment, programme and performance objectives.",
    },
    {
        step: "02",
        title: "Engineering & Design Coordination",
        text: "Coordinating architectural, structural, MEP and specialist requirements into one buildable solution.",
    },
    {
        step: "03",
        title: "Procurement Planning",
        text: "Long-lead equipment, materials and specialist packages are integrated into the project programme.",
    },
    {
        step: "04",
        title: "Quality-Controlled Execution",
        text: "Disciplined site execution supported by quality systems, safety governance and technical supervision.",
    },
    {
        step: "05",
        title: "Systems Integration",
        text: "Building systems and specialist equipment are coordinated, tested and prepared for operation.",
    },
    {
        step: "06",
        title: "Commissioning & Handover",
        text: "The facility moves from construction into operational readiness through structured testing and handover.",
    },
];

const faqs = [
    {
        q: "What types of digital infrastructure does Cymetree support?",
        a: "Cymetree's digital infrastructure capability is positioned around mission-critical and high-performance facilities, including data centres and technology-oriented infrastructure where uptime, reliability and efficiency are central requirements.",
    },
    {
        q: "Does Cymetree undertake industrial building projects?",
        a: "Yes. The platform includes industrial infrastructure covering manufacturing, specialised industrial buildings and logistics-oriented facilities.",
    },
    {
        q: "Can civil, structural and MEP works be coordinated together?",
        a: "Yes. Cymetree's integrated delivery model is designed to coordinate civil, structural, building services and specialist requirements under a single accountable delivery platform.",
    },
    {
        q: "How does Cymetree approach mission-critical projects?",
        a: "Mission-critical projects are approached around reliability, operational continuity, equipment integration, quality control, programme certainty and long-term performance.",
    },
    {
        q: "Does sustainability apply to industrial and digital infrastructure?",
        a: "Yes. Cymetree positions sustainability as an engineering principle, including energy efficiency, responsible material choices, water conservation and lifecycle thinking.",
    },
];

function DigitalInfrastructure() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <Header />

            <main
                style={{
                    background: COLORS.bg,
                    color: COLORS.white,
                    overflow: "hidden",
                    fontFamily:
                        "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
            >
                {/* HERO */}
                <section
                    style={{
                        minHeight: "92vh",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        padding: "120px 6vw 80px",
                        background:
                            "linear-gradient(110deg, rgba(7,16,13,0.98) 0%, rgba(7,16,13,0.88) 45%, rgba(7,16,13,0.48) 100%), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=85') center/cover",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                                "linear-gradient(rgba(184,243,74,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(184,243,74,0.045) 1px, transparent 1px)",
                            backgroundSize: "70px 70px",
                            pointerEvents: "none",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            width: 420,
                            height: 420,
                            right: "-100px",
                            top: "15%",
                            borderRadius: "50%",
                            background: "rgba(184,243,74,0.08)",
                            filter: "blur(90px)",
                        }}
                    />

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        style={{
                            position: "relative",
                            zIndex: 2,
                            maxWidth: 1050,
                        }}
                    >
                        <motion.div
                            variants={reveal}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "9px 15px",
                                border: `1px solid ${COLORS.border}`,
                                borderRadius: 999,
                                color: COLORS.lime,
                                background: "rgba(184,243,74,0.06)",
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                marginBottom: 28,
                            }}
                        >
                            <span
                                style={{
                                    width: 7,
                                    height: 7,
                                    borderRadius: "50%",
                                    background: COLORS.lime,
                                    boxShadow: `0 0 15px ${COLORS.lime}`,
                                }}
                            />
                            Digital & Industrial Infrastructure
                        </motion.div>

                        <motion.h1
                            variants={reveal}
                            style={{
                                margin: 0,
                                fontSize: "clamp(48px, 7vw, 105px)",
                                lineHeight: 0.94,
                                letterSpacing: "-0.055em",
                                fontWeight: 800,
                                maxWidth: 1000,
                            }}
                        >
                            Infrastructure
                            <br />
                            built for{" "}
                            <span style={{ color: COLORS.lime }}>performance.</span>
                        </motion.h1>

                        <motion.p
                            variants={reveal}
                            style={{
                                maxWidth: 720,
                                color: "#C4CDC8",
                                fontSize: "clamp(17px, 2vw, 21px)",
                                lineHeight: 1.7,
                                marginTop: 30,
                            }}
                        >
                            Mission-critical and high-performance buildings for data,
                            manufacturing and logistics — engineered for uptime, scale and
                            efficiency.
                        </motion.p>

                        <motion.div
                            variants={reveal}
                            style={{
                                display: "flex",
                                gap: 14,
                                flexWrap: "wrap",
                                marginTop: 38,
                            }}
                        >
                            <Link
                                to="/contact"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "15px 22px",
                                    background: COLORS.lime,
                                    color: "#07100D",
                                    borderRadius: 5,
                                    textDecoration: "none",
                                    fontWeight: 800,
                                    fontSize: 14,
                                }}
                            >
                                Discuss Your Project
                                <ArrowUpRight size={18} />
                            </Link>

                            <Link
                                to="/projects"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "15px 22px",
                                    border: "1px solid rgba(255,255,255,0.22)",
                                    color: COLORS.white,
                                    borderRadius: 5,
                                    textDecoration: "none",
                                    fontWeight: 700,
                                    fontSize: 14,
                                    background: "rgba(0,0,0,0.16)",
                                }}
                            >
                                Explore Projects
                                <ArrowUpRight size={18} />
                            </Link>
                        </motion.div>
                    </motion.div>

                    <div
                        style={{
                            position: "absolute",
                            bottom: 35,
                            left: "6vw",
                            right: "6vw",
                            display: "flex",
                            justifyContent: "space-between",
                            color: "rgba(255,255,255,0.48)",
                            fontSize: 11,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                        }}
                    >
                        <span>Data • Industrial • Logistics</span>
                        <span>01 / 06</span>
                    </div>
                </section>

                {/* INTRO */}
                <section
                    style={{
                        padding: "120px 6vw",
                        background: COLORS.bgSoft,
                    }}
                >
                    <div
                        style={{
                            maxWidth: 1250,
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "0.85fr 1.4fr",
                            gap: 90,
                            alignItems: "start",
                        }}
                        className="digital-intro-grid"
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={reveal}
                        >
                            <div
                                style={{
                                    color: COLORS.lime,
                                    fontSize: 12,
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    marginBottom: 18,
                                }}
                            >
                                01 — The Infrastructure
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(34px, 4.4vw, 65px)",
                                    lineHeight: 1,
                                    letterSpacing: "-0.045em",
                                }}
                            >
                                Built around
                                <br />
                                <span style={{ color: COLORS.lime }}>what operates.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={reveal}
                        >
                            <p
                                style={{
                                    color: "#C2CCC6",
                                    fontSize: 19,
                                    lineHeight: 1.8,
                                    margin: "0 0 25px",
                                }}
                            >
                                Digital and industrial facilities are more than buildings.
                                Their architecture, structure, utilities, equipment and
                                operating environment must work together as one system.
                            </p>

                            <p
                                style={{
                                    color: COLORS.muted,
                                    fontSize: 16,
                                    lineHeight: 1.85,
                                    margin: 0,
                                }}
                            >
                                Cymetree brings an integrated delivery approach to these
                                environments — coordinating engineering, construction,
                                procurement, equipment requirements and commissioning so that
                                the completed asset is ready to perform from day one.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* CAPABILITIES */}
                <section
                    style={{
                        padding: "120px 6vw",
                        background: COLORS.bg,
                    }}
                >
                    <div style={{ maxWidth: 1250, margin: "0 auto" }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                                gap: 30,
                                marginBottom: 55,
                            }}
                            className="digital-section-heading"
                        >
                            <div>
                                <div
                                    style={{
                                        color: COLORS.lime,
                                        fontSize: 12,
                                        fontWeight: 800,
                                        letterSpacing: "0.18em",
                                        textTransform: "uppercase",
                                        marginBottom: 16,
                                    }}
                                >
                                    02 — Capability Platform
                                </div>

                                <h2
                                    style={{
                                        margin: 0,
                                        fontSize: "clamp(34px, 5vw, 68px)",
                                        letterSpacing: "-0.05em",
                                        lineHeight: 0.98,
                                    }}
                                >
                                    Built for demanding
                                    <br />
                                    <span style={{ color: COLORS.lime }}>operating environments.</span>
                                </h2>
                            </div>

                            <p
                                style={{
                                    maxWidth: 390,
                                    color: COLORS.muted,
                                    lineHeight: 1.7,
                                    margin: 0,
                                }}
                            >
                                From digital infrastructure to industrial and logistics
                                facilities, each project is approached around its operational
                                requirements.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={stagger}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                borderTop: `1px solid ${COLORS.borderLight}`,
                                borderLeft: `1px solid ${COLORS.borderLight}`,
                            }}
                            className="digital-capability-grid"
                        >
                            {capabilities.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.number}
                                        variants={reveal}
                                        whileHover={{ y: -5 }}
                                        style={{
                                            minHeight: 320,
                                            padding: 30,
                                            borderRight: `1px solid ${COLORS.borderLight}`,
                                            borderBottom: `1px solid ${COLORS.borderLight}`,
                                            background: "rgba(255,255,255,0.015)",
                                            transition: "background 0.25s ease",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                marginBottom: 45,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    display: "grid",
                                                    placeItems: "center",
                                                    border: `1px solid ${COLORS.border}`,
                                                    color: COLORS.lime,
                                                    background: "rgba(184,243,74,0.04)",
                                                }}
                                            >
                                                <Icon size={23} />
                                            </div>

                                            <span
                                                style={{
                                                    color: "rgba(255,255,255,0.25)",
                                                    fontSize: 12,
                                                    fontWeight: 800,
                                                }}
                                            >
                                                {item.number}
                                            </span>
                                        </div>

                                        <h3
                                            style={{
                                                margin: "0 0 13px",
                                                fontSize: 23,
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            style={{
                                                color: COLORS.muted,
                                                fontSize: 14,
                                                lineHeight: 1.75,
                                                margin: 0,
                                            }}
                                        >
                                            {item.text}
                                        </p>

                                        <div
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 7,
                                                marginTop: 22,
                                            }}
                                        >
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    style={{
                                                        padding: "6px 9px",
                                                        border: `1px solid ${COLORS.borderLight}`,
                                                        color: "#AEB9B3",
                                                        fontSize: 10,
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.08em",
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* DATA CENTRE FEATURE */}
                <section
                    style={{
                        padding: "120px 6vw",
                        background: "#0A1511",
                    }}
                >
                    <div
                        style={{
                            maxWidth: 1250,
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            minHeight: 650,
                        }}
                        className="digital-feature-grid"
                    >
                        <div
                            style={{
                                background:
                                    "linear-gradient(145deg, rgba(7,16,13,0.12), rgba(7,16,13,0.82)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1500&q=85') center/cover",
                                minHeight: 500,
                            }}
                        />

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            variants={reveal}
                            style={{
                                padding: "70px clamp(30px, 6vw, 80px)",
                                background: COLORS.card,
                                border: `1px solid ${COLORS.borderLight}`,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    color: COLORS.lime,
                                    fontSize: 11,
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    marginBottom: 18,
                                }}
                            >
                                Mission-Critical Environments
                            </div>

                            <h2
                                style={{
                                    margin: "0 0 22px",
                                    fontSize: "clamp(34px, 4vw, 57px)",
                                    lineHeight: 1,
                                    letterSpacing: "-0.045em",
                                }}
                            >
                                When downtime
                                <br />
                                is not an option.
                            </h2>

                            <p
                                style={{
                                    color: COLORS.muted,
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    marginBottom: 30,
                                }}
                            >
                                Digital infrastructure demands a different level of
                                coordination. Power, cooling, connectivity, structural
                                requirements, fire protection, security and operational
                                resilience must work together.
                            </p>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 12,
                                }}
                            >
                                {[
                                    "Power continuity",
                                    "Cooling systems",
                                    "Redundancy planning",
                                    "Fire & life safety",
                                    "Equipment integration",
                                    "Operational readiness",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 9,
                                            color: "#CBD4CF",
                                            fontSize: 13,
                                        }}
                                    >
                                        <CheckCircle2 size={16} color={COLORS.lime} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ENGINEERING SYSTEMS */}
                <section
                    style={{
                        padding: "120px 6vw",
                        background: COLORS.bgSoft,
                    }}
                >
                    <div style={{ maxWidth: 1250, margin: "0 auto" }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            style={{ maxWidth: 800, marginBottom: 55 }}
                        >
                            <div
                                style={{
                                    color: COLORS.lime,
                                    fontSize: 12,
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    marginBottom: 15,
                                }}
                            >
                                03 — Engineering Thinking
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(34px, 5vw, 68px)",
                                    lineHeight: 1,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Every system has to
                                <br />
                                <span style={{ color: COLORS.lime }}>work together.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={stagger}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: 14,
                            }}
                            className="digital-systems-grid"
                        >
                            {systems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        variants={reveal}
                                        style={{
                                            padding: 28,
                                            minHeight: 220,
                                            background: COLORS.card,
                                            border: `1px solid ${COLORS.borderLight}`,
                                        }}
                                    >
                                        <Icon
                                            size={28}
                                            color={COLORS.lime}
                                            style={{ marginBottom: 35 }}
                                        />

                                        <h3
                                            style={{
                                                margin: "0 0 10px",
                                                fontSize: 19,
                                            }}
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            style={{
                                                color: COLORS.muted,
                                                lineHeight: 1.7,
                                                fontSize: 14,
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

                {/* INDUSTRIAL FEATURE */}
                <section
                    style={{
                        padding: "120px 6vw",
                        background: COLORS.bg,
                    }}
                >
                    <div
                        style={{
                            maxWidth: 1250,
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "1fr 0.85fr",
                            gap: 70,
                            alignItems: "center",
                        }}
                        className="digital-industrial-grid"
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            variants={reveal}
                        >
                            <div
                                style={{
                                    color: COLORS.lime,
                                    fontSize: 12,
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    marginBottom: 18,
                                }}
                            >
                                Industrial Infrastructure
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(36px, 5vw, 70px)",
                                    lineHeight: 0.98,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                The building is part of
                                <br />
                                <span style={{ color: COLORS.lime }}>the operation.</span>
                            </h2>

                            <p
                                style={{
                                    color: COLORS.muted,
                                    fontSize: 17,
                                    lineHeight: 1.8,
                                    maxWidth: 650,
                                    marginTop: 28,
                                }}
                            >
                                Industrial facilities must support the way people, materials,
                                equipment and processes move through them. We therefore
                                approach planning around the operational workflow — not simply
                                the physical structure.
                            </p>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 12,
                                    marginTop: 35,
                                }}
                            >
                                {[
                                    "Production workflow",
                                    "Material movement",
                                    "Equipment loads",
                                    "Utility requirements",
                                    "Future expansion",
                                    "Maintenance access",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 9,
                                            color: "#CBD4CF",
                                            fontSize: 13,
                                        }}
                                    >
                                        <CheckCircle2 size={15} color={COLORS.lime} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            style={{
                                minHeight: 600,
                                position: "relative",
                                background:
                                    "linear-gradient(145deg, rgba(7,16,13,0.08), rgba(7,16,13,0.7)), url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1500&q=85') center/cover",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    left: 20,
                                    bottom: 20,
                                    right: 20,
                                    padding: 20,
                                    background: "rgba(7,16,13,0.88)",
                                    border: `1px solid ${COLORS.border}`,
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                <div
                                    style={{
                                        color: COLORS.lime,
                                        fontSize: 11,
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        fontWeight: 800,
                                    }}
                                >
                                    Operational Design
                                </div>

                                <div
                                    style={{
                                        color: COLORS.white,
                                        fontSize: 18,
                                        fontWeight: 700,
                                        marginTop: 7,
                                    }}
                                >
                                    Structure around the process.
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* DELIVERY MODEL */}
                <section
                    style={{
                        padding: "120px 6vw",
                        background: "#0A1511",
                    }}
                >
                    <div style={{ maxWidth: 1250, margin: "0 auto" }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "0.8fr 1.4fr",
                                gap: 80,
                                marginBottom: 65,
                            }}
                            className="digital-process-heading"
                        >
                            <div>
                                <div
                                    style={{
                                        color: COLORS.lime,
                                        fontSize: 12,
                                        fontWeight: 800,
                                        letterSpacing: "0.18em",
                                        textTransform: "uppercase",
                                        marginBottom: 16,
                                    }}
                                >
                                    04 — Delivery Model
                                </div>

                                <h2
                                    style={{
                                        margin: 0,
                                        fontSize: "clamp(35px, 5vw, 67px)",
                                        lineHeight: 1,
                                        letterSpacing: "-0.05em",
                                    }}
                                >
                                    From technical
                                    <br />
                                    brief to <span style={{ color: COLORS.lime }}>operation.</span>
                                </h2>
                            </div>

                            <p
                                style={{
                                    alignSelf: "end",
                                    color: COLORS.muted,
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    margin: 0,
                                    maxWidth: 550,
                                }}
                            >
                                A structured delivery process reduces interface risk between
                                design, procurement, construction, equipment and commissioning.
                            </p>
                        </motion.div>

                        <div>
                            {process.map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, x: -25 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.07,
                                    }}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "90px 0.75fr 1.25fr",
                                        gap: 30,
                                        alignItems: "center",
                                        padding: "25px 0",
                                        borderTop: `1px solid ${COLORS.borderLight}`,
                                    }}
                                    className="digital-process-row"
                                >
                                    <div
                                        style={{
                                            color: COLORS.lime,
                                            fontSize: 13,
                                            fontWeight: 800,
                                        }}
                                    >
                                        {item.step}
                                    </div>

                                    <h3
                                        style={{
                                            margin: 0,
                                            fontSize: 20,
                                        }}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        style={{
                                            margin: 0,
                                            color: COLORS.muted,
                                            fontSize: 14,
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INDUSTRIES */}
                <section
                    style={{
                        padding: "110px 6vw",
                        background: COLORS.bgSoft,
                    }}
                >
                    <div style={{ maxWidth: 1250, margin: "0 auto" }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            style={{ marginBottom: 45 }}
                        >
                            <div
                                style={{
                                    color: COLORS.lime,
                                    fontSize: 12,
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    marginBottom: 16,
                                }}
                            >
                                05 — Sectors
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(35px, 5vw, 65px)",
                                    lineHeight: 1,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Environments where
                                <br />
                                <span style={{ color: COLORS.lime }}>performance matters.</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: 10,
                            }}
                            className="digital-industries-grid"
                        >
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={industry}
                                    variants={reveal}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "23px 25px",
                                        border: `1px solid ${COLORS.borderLight}`,
                                        background: "rgba(255,255,255,0.015)",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 16,
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: COLORS.lime,
                                                fontSize: 11,
                                                fontWeight: 800,
                                            }}
                                        >
                                            0{index + 1}
                                        </span>

                                        <span
                                            style={{
                                                color: "#D7DED9",
                                                fontSize: 15,
                                                fontWeight: 600,
                                            }}
                                        >
                                            {industry}
                                        </span>
                                    </div>

                                    <ArrowUpRight
                                        size={17}
                                        color="rgba(255,255,255,0.4)"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* WHY CYMETREE */}
                <section
                    style={{
                        padding: "120px 6vw",
                        background: COLORS.bg,
                    }}
                >
                    <div
                        style={{
                            maxWidth: 1250,
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "0.8fr 1.2fr",
                            gap: 90,
                        }}
                        className="digital-why-grid"
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                        >
                            <div
                                style={{
                                    color: COLORS.lime,
                                    fontSize: 12,
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    marginBottom: 17,
                                }}
                            >
                                06 — Why Cymetree
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(38px, 5vw, 70px)",
                                    lineHeight: 0.98,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                One team.
                                <br />
                                One platform.
                                <br />
                                <span style={{ color: COLORS.lime }}>One outcome.</span>
                            </h2>

                            <p
                                style={{
                                    color: COLORS.muted,
                                    lineHeight: 1.8,
                                    marginTop: 28,
                                    maxWidth: 470,
                                }}
                            >
                                Cymetree's integrated model brings engineering, construction,
                                procurement and specialist coordination together under one
                                accountable delivery structure.
                            </p>
                        </motion.div>

                        <div>
                            {[
                                [
                                    "Integrated delivery",
                                    "Civil, structural, architectural, MEP and specialist requirements coordinated through one platform.",
                                ],
                                [
                                    "Mission-critical thinking",
                                    "Infrastructure planned around reliability, continuity and operational performance.",
                                ],
                                [
                                    "Quality & safety governance",
                                    "Structured site execution supported by quality and EHS controls.",
                                ],
                                [
                                    "Equipment integration",
                                    "Building systems are coordinated around the operational equipment they support.",
                                ],
                                [
                                    "Programme certainty",
                                    "Procurement and construction planning are aligned to reduce avoidable interface delays.",
                                ],
                                [
                                    "Lifecycle perspective",
                                    "Design and material decisions consider maintenance, efficiency and long-term asset performance.",
                                ],
                            ].map(([title, text], index) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.06 }}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "45px 1fr",
                                        gap: 20,
                                        padding: "23px 0",
                                        borderTop: `1px solid ${COLORS.borderLight}`,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 34,
                                            height: 34,
                                            display: "grid",
                                            placeItems: "center",
                                            border: `1px solid ${COLORS.border}`,
                                            color: COLORS.lime,
                                            fontSize: 11,
                                            fontWeight: 800,
                                        }}
                                    >
                                        0{index + 1}
                                    </div>

                                    <div>
                                        <h3
                                            style={{
                                                margin: "0 0 7px",
                                                fontSize: 18,
                                            }}
                                        >
                                            {title}
                                        </h3>

                                        <p
                                            style={{
                                                margin: 0,
                                                color: COLORS.muted,
                                                fontSize: 14,
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section
                    style={{
                        padding: "100px 6vw",
                        background: "#0A1511",
                    }}
                >
                    <div style={{ maxWidth: 900, margin: "0 auto" }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                            style={{ textAlign: "center", marginBottom: 50 }}
                        >
                            <div
                                style={{
                                    color: COLORS.lime,
                                    fontSize: 12,
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    marginBottom: 15,
                                }}
                            >
                                Frequently Asked Questions
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(35px, 5vw, 60px)",
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Built around the
                                <br />
                                <span style={{ color: COLORS.lime }}>questions that matter.</span>
                            </h2>
                        </motion.div>

                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={faq.q}
                                    style={{
                                        borderTop: `1px solid ${COLORS.borderLight}`,
                                    }}
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: 20,
                                            padding: "23px 0",
                                            border: 0,
                                            background: "transparent",
                                            color: COLORS.white,
                                            textAlign: "left",
                                            cursor: "pointer",
                                            fontSize: 16,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {faq.q}

                                        <ChevronDown
                                            size={19}
                                            style={{
                                                flexShrink: 0,
                                                transform: isOpen
                                                    ? "rotate(180deg)"
                                                    : "rotate(0deg)",
                                                transition: "transform 0.25s ease",
                                                color: COLORS.lime,
                                            }}
                                        />
                                    </button>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: isOpen ? "auto" : 0,
                                            opacity: isOpen ? 1 : 0,
                                        }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <p
                                            style={{
                                                margin: "0 0 24px",
                                                color: COLORS.muted,
                                                lineHeight: 1.8,
                                                fontSize: 14,
                                                maxWidth: 800,
                                            }}
                                        >
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA */}
                <section
                    style={{
                        padding: "130px 6vw",
                        background:
                            "radial-gradient(circle at 50% 20%, rgba(184,243,74,0.12), transparent 35%), #07100D",
                        textAlign: "center",
                    }}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        style={{ maxWidth: 900, margin: "0 auto" }}
                    >
                        <div
                            style={{
                                color: COLORS.lime,
                                fontSize: 12,
                                fontWeight: 800,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                marginBottom: 20,
                            }}
                        >
                            Start a Conversation
                        </div>

                        <h2
                            style={{
                                margin: 0,
                                fontSize: "clamp(42px, 7vw, 90px)",
                                lineHeight: 0.95,
                                letterSpacing: "-0.06em",
                            }}
                        >
                            Building the infrastructure
                            <br />
                            behind <span style={{ color: COLORS.lime }}>what's next.</span>
                        </h2>

                        <p
                            style={{
                                maxWidth: 650,
                                margin: "28px auto 35px",
                                color: COLORS.muted,
                                lineHeight: 1.75,
                                fontSize: 16,
                            }}
                        >
                            Tell us about your digital, industrial or logistics
                            infrastructure requirement and let us explore the right
                            delivery approach together.
                        </p>

                        <Link
                            to="/contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "16px 24px",
                                background: COLORS.lime,
                                color: "#07100D",
                                textDecoration: "none",
                                borderRadius: 5,
                                fontWeight: 800,
                            }}
                        >
                            Get Started
                            <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>
                </section>
            </main>

            <Footer />

            <style>{`
        @media (max-width: 1000px) {
          .digital-intro-grid,
          .digital-feature-grid,
          .digital-industrial-grid,
          .digital-process-heading,
          .digital-why-grid {
            grid-template-columns: 1fr !important;
          }

          .digital-capability-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .digital-systems-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .digital-intro-grid {
            gap: 45px !important;
          }

          .digital-feature-grid {
            min-height: auto !important;
          }

          .digital-process-heading {
            gap: 30px !important;
          }
        }

        @media (max-width: 680px) {
          .digital-section-heading {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .digital-capability-grid,
          .digital-systems-grid,
          .digital-industries-grid {
            grid-template-columns: 1fr !important;
          }

          .digital-process-row {
            grid-template-columns: 50px 1fr !important;
            gap: 15px !important;
          }

          .digital-process-row p {
            grid-column: 2 !important;
          }

          .digital-industrial-grid {
            gap: 45px !important;
          }

          .digital-feature-grid > div:first-child {
            min-height: 380px !important;
          }

          .digital-industrial-grid > div:last-child {
            min-height: 430px !important;
          }
        }
      `}</style>
        </>
    );
}

export default DigitalInfrastructure;