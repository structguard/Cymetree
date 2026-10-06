import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Leaf,
    Sun,
    Droplets,
    Recycle,
    Wind,
    Factory,
    TreePine,
    Building2,
    BadgeCheck,
    BarChart3,
    ShieldCheck,
    Lightbulb,
    ChevronDown,
    CheckCircle2,
    Globe2,
    Layers3,
    ThermometerSun,
} from "lucide-react";

import Header from "../screens/Header";
import Footer from "../screens/Footer";

const COLORS = {
    bg: "#07110D",
    bgSoft: "#0B1712",
    card: "#101E17",
    cardLight: "#14251C",
    lime: "#B8F34A",
    limeSoft: "#D9FF8E",
    white: "#F5F8F2",
    muted: "#9DAAA2",
    mutedLight: "#C2CCC5",
    border: "rgba(184,243,74,0.17)",
    borderWhite: "rgba(255,255,255,0.09)",
};

const reveal = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.09,
        },
    },
};

const sustainabilityAreas = [
    {
        number: "01",
        icon: Sun,
        title: "Energy-Efficient Building Systems",
        text: "HVAC, lighting and building management systems considered from the design stage to improve energy performance, reduce operating costs and lower carbon emissions.",
        tag: "ENERGY",
    },
    {
        number: "02",
        icon: BadgeCheck,
        title: "Green Building Certification",
        text: "Design and documentation support aligned with recognised green building frameworks including LEED, GRIHA, IGBC and BREEAM.",
        tag: "CERTIFICATION",
    },
    {
        number: "03",
        icon: Layers3,
        title: "Sustainable Material Sourcing",
        text: "Material decisions consider embodied carbon, environmental impact, supply-chain integrity and responsible sourcing.",
        tag: "MATERIALS",
    },
    {
        number: "04",
        icon: Recycle,
        title: "Waste Management",
        text: "Construction waste reduction and integrated waste management strategies designed to minimise landfill impact and support circular resource use.",
        tag: "WASTE",
    },
    {
        number: "05",
        icon: Droplets,
        title: "Water Conservation",
        text: "Rainwater harvesting, greywater recycling, efficient fixtures and integrated water management systems help reduce consumption.",
        tag: "WATER",
    },
    {
        number: "06",
        icon: BarChart3,
        title: "Whole-Life Cost Analysis",
        text: "Lifecycle thinking helps project owners evaluate capital investment against long-term operating, maintenance and renewal costs.",
        tag: "LIFECYCLE",
    },
];

const principles = [
    {
        icon: ThermometerSun,
        title: "Climate Performance",
        text: "Energy, emissions and thermal performance are considered as part of the building's overall engineering strategy.",
    },
    {
        icon: Droplets,
        title: "Resource Efficiency",
        text: "Water, materials and energy are managed with an emphasis on efficient use throughout the asset lifecycle.",
    },
    {
        icon: Recycle,
        title: "Circular Thinking",
        text: "Waste reduction, responsible sourcing and material reuse support more resource-conscious construction.",
    },
    {
        icon: ShieldCheck,
        title: "Long-Term Resilience",
        text: "Sustainable infrastructure must continue performing under changing environmental and operational conditions.",
    },
    {
        icon: BarChart3,
        title: "Economic Sustainability",
        text: "Environmental performance is connected with operating cost, maintenance requirements and lifecycle economics.",
    },
    {
        icon: Globe2,
        title: "Institutional Responsibility",
        text: "Governance, compliance and measurable sustainability goals help institutions create more responsible assets.",
    },
];

const sectors = [
    {
        icon: Building2,
        title: "Healthcare & Hospitals",
        text: "Energy, water, indoor environmental quality and resilient building systems for healthcare environments.",
    },
    {
        icon: Building2,
        title: "Government Institutions",
        text: "Long-life public assets designed around efficiency, maintainability and responsible resource use.",
    },
    {
        icon: TreePine,
        title: "Educational Campuses",
        text: "Sustainable institutional environments designed for occupants, operational efficiency and long-term value.",
    },
    {
        icon: Factory,
        title: "Industrial Facilities",
        text: "Efficient industrial buildings with attention to utilities, energy consumption and operational performance.",
    },
    {
        icon: Globe2,
        title: "Commercial Real Estate",
        text: "Sustainability strategies supporting efficient buildings and stronger long-term asset performance.",
    },
    {
        icon: Layers3,
        title: "Infrastructure Development",
        text: "Sustainability integrated across large-scale infrastructure planning, design and execution.",
    },
];

const lifecycle = [
    {
        stage: "01",
        title: "Strategy",
        text: "Define environmental, operational and economic objectives before design decisions are locked.",
    },
    {
        stage: "02",
        title: "Design",
        text: "Translate sustainability goals into building systems, materials, water strategies and energy performance.",
    },
    {
        stage: "03",
        title: "Procurement",
        text: "Evaluate products, suppliers and materials through performance and lifecycle considerations.",
    },
    {
        stage: "04",
        title: "Construction",
        text: "Implement resource-conscious construction practices and waste-management controls.",
    },
    {
        stage: "05",
        title: "Commissioning",
        text: "Verify building systems and prepare the asset for efficient operational performance.",
    },
    {
        stage: "06",
        title: "Operation",
        text: "Long-term performance is considered through maintenance, monitoring and lifecycle economics.",
    },
];

const faqs = [
    {
        q: "What does sustainable infrastructure mean at Cymetree?",
        a: "Cymetree treats sustainability as an engineering principle rather than an additional finishing layer. Energy, water, materials, waste, lifecycle cost and long-term asset performance are considered throughout the project.",
    },
    {
        q: "Which green building standards can Cymetree support?",
        a: "The current Cymetree service positioning includes design and documentation support aligned with LEED, GRIHA, IGBC and BREEAM requirements.",
    },
    {
        q: "Can sustainability be integrated into an existing project?",
        a: "Yes. Sustainability strategies can be introduced at different stages, although earlier integration generally provides greater opportunity to influence systems, materials, procurement and lifecycle performance.",
    },
    {
        q: "Does sustainable construction increase project cost?",
        a: "Not necessarily. Cymetree's whole-life approach considers both capital expenditure and long-term operating economics, allowing project decisions to be evaluated beyond the initial construction cost.",
    },
    {
        q: "Which sectors can benefit from sustainable infrastructure?",
        a: "The capability can support healthcare, government institutions, educational campuses, commercial developments, industrial facilities and broader infrastructure projects.",
    },
];

function SustainableInfrastructure() {
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
                {/* =====================================================
            HERO
        ====================================================== */}
                <section
                    style={{
                        minHeight: "93vh",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        padding: "120px 6vw 80px",
                        background:
                            "linear-gradient(105deg, rgba(7,17,13,0.98) 0%, rgba(7,17,13,0.86) 42%, rgba(7,17,13,0.42) 100%), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85') center/cover",
                    }}
                >
                    {/* Grid */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                                "linear-gradient(rgba(184,243,74,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,243,74,0.04) 1px, transparent 1px)",
                            backgroundSize: "70px 70px",
                            pointerEvents: "none",
                        }}
                    />

                    {/* Glow */}
                    <div
                        style={{
                            position: "absolute",
                            width: 500,
                            height: 500,
                            right: "-140px",
                            top: "10%",
                            borderRadius: "50%",
                            background: "rgba(184,243,74,0.09)",
                            filter: "blur(110px)",
                        }}
                    />

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        style={{
                            position: "relative",
                            zIndex: 2,
                            maxWidth: 1100,
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
                                background: "rgba(184,243,74,0.06)",
                                color: COLORS.lime,
                                fontSize: 11,
                                fontWeight: 800,
                                letterSpacing: "0.17em",
                                textTransform: "uppercase",
                                marginBottom: 28,
                            }}
                        >
                            <Leaf size={15} />
                            Green & Sustainable Infrastructure
                        </motion.div>

                        <motion.h1
                            variants={reveal}
                            style={{
                                margin: 0,
                                fontSize: "clamp(50px, 7.5vw, 112px)",
                                lineHeight: 0.91,
                                letterSpacing: "-0.06em",
                                fontWeight: 800,
                                maxWidth: 1050,
                            }}
                        >
                            Better buildings.
                            <br />
                            <span style={{ color: COLORS.lime }}>
                                Longer performance.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={reveal}
                            style={{
                                maxWidth: 720,
                                color: "#C5CEC8",
                                fontSize: "clamp(17px, 2vw, 21px)",
                                lineHeight: 1.7,
                                marginTop: 32,
                            }}
                        >
                            Sustainability built into every project — from energy systems
                            and water management to material choices, lifecycle economics and
                            long-term asset performance.
                        </motion.p>

                        <motion.div
                            variants={reveal}
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 13,
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
                                    color: "#07110D",
                                    borderRadius: 5,
                                    textDecoration: "none",
                                    fontSize: 14,
                                    fontWeight: 800,
                                }}
                            >
                                Start a Sustainability Conversation
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
                                    fontSize: 14,
                                    fontWeight: 700,
                                    background: "rgba(0,0,0,0.15)",
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
                            bottom: 34,
                            left: "6vw",
                            right: "6vw",
                            display: "flex",
                            justifyContent: "space-between",
                            color: "rgba(255,255,255,0.45)",
                            fontSize: 10,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                        }}
                    >
                        <span>Energy • Water • Materials • Lifecycle</span>
                        <span>01 / 06</span>
                    </div>
                </section>

                {/* =====================================================
            INTRO
        ====================================================== */}
                <section
                    style={{
                        padding: "125px 6vw",
                        background: COLORS.bgSoft,
                    }}
                >
                    <div
                        className="sustain-intro-grid"
                        style={{
                            maxWidth: 1250,
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "0.82fr 1.4fr",
                            gap: 90,
                        }}
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
                                    marginBottom: 17,
                                }}
                            >
                                01 — Sustainability Philosophy
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(36px, 5vw, 68px)",
                                    lineHeight: 0.98,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Sustainability
                                <br />
                                is an <span style={{ color: COLORS.lime }}>engineering</span>
                                <br />
                                decision.
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
                                    color: COLORS.mutedLight,
                                    fontSize: 19,
                                    lineHeight: 1.8,
                                    margin: 0,
                                }}
                            >
                                At Cymetree, green building thinking is not something added at
                                the end of a project. It is considered from the first design
                                decision through procurement, construction and operation.
                            </p>

                            <p
                                style={{
                                    color: COLORS.muted,
                                    fontSize: 16,
                                    lineHeight: 1.85,
                                    margin: "25px 0 0",
                                }}
                            >
                                A building that uses less energy, consumes fewer resources,
                                generates less waste and costs less to operate is not only
                                environmentally responsible — it is also a stronger long-term
                                asset.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 9,
                                    marginTop: 30,
                                }}
                            >
                                {[
                                    "Environmental Performance",
                                    "Economic Performance",
                                    "Operational Resilience",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        style={{
                                            padding: "8px 12px",
                                            border: `1px solid ${COLORS.border}`,
                                            color: COLORS.limeSoft,
                                            fontSize: 11,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* =====================================================
            CORE CAPABILITIES
        ====================================================== */}
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
                            className="sustain-heading"
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                                gap: 30,
                                marginBottom: 55,
                            }}
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
                                    02 — Core Capabilities
                                </div>

                                <h2
                                    style={{
                                        margin: 0,
                                        fontSize: "clamp(35px, 5vw, 67px)",
                                        lineHeight: 0.98,
                                        letterSpacing: "-0.05em",
                                    }}
                                >
                                    From foundation
                                    <br />
                                    <span style={{ color: COLORS.lime }}>to finish.</span>
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
                                Sustainability is translated into practical engineering,
                                procurement and delivery decisions across the entire project.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={stagger}
                            className="sustain-capability-grid"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                borderTop: `1px solid ${COLORS.borderWhite}`,
                                borderLeft: `1px solid ${COLORS.borderWhite}`,
                            }}
                        >
                            {sustainabilityAreas.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.number}
                                        variants={reveal}
                                        whileHover={{
                                            y: -5,
                                        }}
                                        style={{
                                            minHeight: 345,
                                            padding: 30,
                                            borderRight: `1px solid ${COLORS.borderWhite}`,
                                            borderBottom: `1px solid ${COLORS.borderWhite}`,
                                            background: "rgba(255,255,255,0.014)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                marginBottom: 42,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 52,
                                                    height: 52,
                                                    display: "grid",
                                                    placeItems: "center",
                                                    color: COLORS.lime,
                                                    border: `1px solid ${COLORS.border}`,
                                                    background: "rgba(184,243,74,0.04)",
                                                }}
                                            >
                                                <Icon size={24} />
                                            </div>

                                            <span
                                                style={{
                                                    color: "rgba(255,255,255,0.24)",
                                                    fontSize: 12,
                                                    fontWeight: 800,
                                                }}
                                            >
                                                {item.number}
                                            </span>
                                        </div>

                                        <div
                                            style={{
                                                color: COLORS.lime,
                                                fontSize: 10,
                                                fontWeight: 800,
                                                letterSpacing: "0.14em",
                                                marginBottom: 10,
                                            }}
                                        >
                                            {item.tag}
                                        </div>

                                        <h3
                                            style={{
                                                margin: "0 0 13px",
                                                fontSize: 21,
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
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* =====================================================
            BIG FEATURE
        ====================================================== */}
                <section
                    style={{
                        padding: "120px 6vw",
                        background: "#0A1711",
                    }}
                >
                    <div
                        className="sustain-feature-grid"
                        style={{
                            maxWidth: 1250,
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            minHeight: 650,
                        }}
                    >
                        <div
                            style={{
                                minHeight: 550,
                                background:
                                    "linear-gradient(145deg, rgba(7,17,13,0.12), rgba(7,17,13,0.78)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85') center/cover",
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
                                border: `1px solid ${COLORS.borderWhite}`,
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
                                    letterSpacing: "0.17em",
                                    textTransform: "uppercase",
                                    marginBottom: 18,
                                }}
                            >
                                Beyond Green Materials
                            </div>

                            <h2
                                style={{
                                    margin: "0 0 22px",
                                    fontSize: "clamp(35px, 4vw, 58px)",
                                    lineHeight: 1,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Sustainability is
                                <br />
                                <span style={{ color: COLORS.lime }}>
                                    a systems problem.
                                </span>
                            </h2>

                            <p
                                style={{
                                    color: COLORS.muted,
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    margin: "0 0 30px",
                                }}
                            >
                                A sustainable building is not created by choosing one
                                environmentally friendly product. Its performance comes from
                                how energy, water, materials, building systems, operations and
                                maintenance work together.
                            </p>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 13,
                                }}
                            >
                                {[
                                    "Energy performance",
                                    "Water efficiency",
                                    "Material impact",
                                    "Waste reduction",
                                    "Lifecycle economics",
                                    "Operational resilience",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 9,
                                            color: "#CED7D1",
                                            fontSize: 13,
                                        }}
                                    >
                                        <CheckCircle2 size={15} color={COLORS.lime} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* =====================================================
            PRINCIPLES
        ====================================================== */}
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
                            style={{
                                maxWidth: 800,
                                marginBottom: 55,
                            }}
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
                                03 — Sustainability Framework
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(35px, 5vw, 67px)",
                                    lineHeight: 0.98,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Six principles.
                                <br />
                                <span style={{ color: COLORS.lime }}>
                                    One better-performing asset.
                                </span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={stagger}
                            className="sustain-principles-grid"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: 14,
                            }}
                        >
                            {principles.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        variants={reveal}
                                        style={{
                                            minHeight: 230,
                                            padding: 28,
                                            background: COLORS.card,
                                            border: `1px solid ${COLORS.borderWhite}`,
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
                                                margin: 0,
                                                color: COLORS.muted,
                                                fontSize: 14,
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

                {/* =====================================================
            WHOLE LIFE
        ====================================================== */}
                <section
                    style={{
                        padding: "120px 6vw",
                        background: COLORS.bg,
                    }}
                >
                    <div
                        className="sustain-lifecycle-grid"
                        style={{
                            maxWidth: 1250,
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "0.72fr 1.28fr",
                            gap: 90,
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
                                    color: COLORS.lime,
                                    fontSize: 12,
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    marginBottom: 17,
                                }}
                            >
                                04 — Whole-Life Thinking
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(38px, 5vw, 70px)",
                                    lineHeight: 0.96,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Don't optimise
                                <br />
                                the build.
                                <br />
                                <span style={{ color: COLORS.lime }}>
                                    Optimise the life.
                                </span>
                            </h2>

                            <p
                                style={{
                                    color: COLORS.muted,
                                    lineHeight: 1.8,
                                    marginTop: 28,
                                    fontSize: 16,
                                }}
                            >
                                A lower upfront cost does not always create a lower-cost
                                building. Lifecycle thinking evaluates how today's decisions
                                influence energy, maintenance, replacement and operating
                                costs over years of use.
                            </p>
                        </motion.div>

                        <div>
                            {lifecycle.map((item, index) => (
                                <motion.div
                                    key={item.stage}
                                    initial={{ opacity: 0, x: 25 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.07,
                                    }}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "65px 0.55fr 1fr",
                                        gap: 25,
                                        alignItems: "center",
                                        padding: "25px 0",
                                        borderTop: `1px solid ${COLORS.borderWhite}`,
                                    }}
                                    className="sustain-lifecycle-row"
                                >
                                    <div
                                        style={{
                                            color: COLORS.lime,
                                            fontWeight: 800,
                                            fontSize: 12,
                                        }}
                                    >
                                        {item.stage}
                                    </div>

                                    <h3
                                        style={{
                                            margin: 0,
                                            fontSize: 18,
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

                {/* =====================================================
            STANDARDS
        ====================================================== */}
                <section
                    style={{
                        padding: "105px 6vw",
                        background: "#0A1711",
                    }}
                >
                    <div
                        className="sustain-standards"
                        style={{
                            maxWidth: 1100,
                            margin: "0 auto",
                            textAlign: "center",
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
                                    color: COLORS.lime,
                                    fontSize: 12,
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    marginBottom: 16,
                                }}
                            >
                                Recognised Green Building Frameworks
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(34px, 5vw, 62px)",
                                    lineHeight: 1,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Designed for recognised
                                <br />
                                <span style={{ color: COLORS.lime }}>
                                    sustainability standards.
                                </span>
                            </h2>

                            <p
                                style={{
                                    maxWidth: 700,
                                    margin: "25px auto 45px",
                                    color: COLORS.muted,
                                    lineHeight: 1.8,
                                }}
                            >
                                Cymetree's current sustainability capability includes design
                                and documentation support aligned with major national and
                                international green building frameworks.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: 12,
                            }}
                            className="sustain-standard-grid"
                        >
                            {["LEED", "GRIHA", "IGBC", "BREEAM"].map((standard) => (
                                <motion.div
                                    key={standard}
                                    variants={reveal}
                                    style={{
                                        minHeight: 120,
                                        display: "grid",
                                        placeItems: "center",
                                        border: `1px solid ${COLORS.borderWhite}`,
                                        background: "rgba(255,255,255,0.02)",
                                        color: COLORS.white,
                                        fontSize: 21,
                                        fontWeight: 800,
                                        letterSpacing: "0.03em",
                                    }}
                                >
                                    {standard}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* =====================================================
            INDUSTRIES
        ====================================================== */}
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
                            style={{ marginBottom: 50 }}
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
                                05 — Industries
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(36px, 5vw, 66px)",
                                    lineHeight: 0.98,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Sustainability across
                                <br />
                                <span style={{ color: COLORS.lime }}>
                                    every sector that matters.
                                </span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={stagger}
                            className="sustain-sector-grid"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: 12,
                            }}
                        >
                            {sectors.map((sector, index) => {
                                const Icon = sector.icon;

                                return (
                                    <motion.div
                                        key={sector.title}
                                        variants={reveal}
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "55px 1fr",
                                            gap: 20,
                                            padding: 27,
                                            border: `1px solid ${COLORS.borderWhite}`,
                                            background: "rgba(255,255,255,0.015)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 44,
                                                height: 44,
                                                display: "grid",
                                                placeItems: "center",
                                                border: `1px solid ${COLORS.border}`,
                                                color: COLORS.lime,
                                            }}
                                        >
                                            <Icon size={21} />
                                        </div>

                                        <div>
                                            <div
                                                style={{
                                                    color: COLORS.lime,
                                                    fontSize: 10,
                                                    fontWeight: 800,
                                                    marginBottom: 8,
                                                }}
                                            >
                                                0{index + 1}
                                            </div>

                                            <h3
                                                style={{
                                                    margin: "0 0 8px",
                                                    fontSize: 18,
                                                }}
                                            >
                                                {sector.title}
                                            </h3>

                                            <p
                                                style={{
                                                    margin: 0,
                                                    color: COLORS.muted,
                                                    lineHeight: 1.7,
                                                    fontSize: 14,
                                                }}
                                            >
                                                {sector.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* =====================================================
            WHY CYMETREE
        ====================================================== */}
                <section
                    style={{
                        padding: "120px 6vw",
                        background: COLORS.bg,
                    }}
                >
                    <div
                        className="sustain-why-grid"
                        style={{
                            maxWidth: 1250,
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "0.75fr 1.25fr",
                            gap: 90,
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
                                    lineHeight: 0.97,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Sustainability
                                <br />
                                without
                                <br />
                                <span style={{ color: COLORS.lime }}>
                                    compromising performance.
                                </span>
                            </h2>
                        </motion.div>

                        <div>
                            {[
                                [
                                    "Integrated engineering",
                                    "Sustainability is coordinated with architecture, structure, MEP and specialist building requirements.",
                                ],
                                [
                                    "Lifecycle perspective",
                                    "Project decisions are evaluated for their long-term operating and maintenance implications.",
                                ],
                                [
                                    "Green certification support",
                                    "Design and documentation can be aligned with recognised green building frameworks.",
                                ],
                                [
                                    "Resource-conscious execution",
                                    "Materials, water and waste are considered during procurement and construction.",
                                ],
                                [
                                    "Operational economics",
                                    "Energy and resource efficiency are treated as contributors to long-term asset value.",
                                ],
                                [
                                    "Single delivery platform",
                                    "Sustainability sits within the broader Cymetree infrastructure delivery model rather than as a separate package.",
                                ],
                            ].map(([title, text], index) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.06,
                                    }}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "44px 1fr",
                                        gap: 20,
                                        padding: "22px 0",
                                        borderTop: `1px solid ${COLORS.borderWhite}`,
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
                                            fontSize: 10,
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

                {/* =====================================================
            FAQ
        ====================================================== */}
                <section
                    style={{
                        padding: "100px 6vw",
                        background: "#0A1711",
                    }}
                >
                    <div
                        style={{
                            maxWidth: 900,
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
                                marginBottom: 50,
                            }}
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
                                    lineHeight: 1,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Sustainability,
                                <br />
                                <span style={{ color: COLORS.lime }}>
                                    made practical.
                                </span>
                            </h2>
                        </motion.div>

                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={faq.q}
                                    style={{
                                        borderTop: `1px solid ${COLORS.borderWhite}`,
                                    }}
                                >
                                    <button
                                        onClick={() =>
                                            setOpenFaq(isOpen ? null : index)
                                        }
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
                                            color={COLORS.lime}
                                            style={{
                                                flexShrink: 0,
                                                transform: isOpen
                                                    ? "rotate(180deg)"
                                                    : "rotate(0deg)",
                                                transition: "transform 0.25s ease",
                                            }}
                                        />
                                    </button>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: isOpen ? "auto" : 0,
                                            opacity: isOpen ? 1 : 0,
                                        }}
                                        style={{
                                            overflow: "hidden",
                                        }}
                                    >
                                        <p
                                            style={{
                                                margin: "0 0 24px",
                                                color: COLORS.muted,
                                                lineHeight: 1.8,
                                                fontSize: 14,
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

                {/* =====================================================
            CTA
        ====================================================== */}
                <section
                    style={{
                        padding: "135px 6vw",
                        textAlign: "center",
                        background:
                            "radial-gradient(circle at 50% 15%, rgba(184,243,74,0.13), transparent 36%), #07110D",
                    }}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        style={{
                            maxWidth: 900,
                            margin: "0 auto",
                        }}
                    >
                        <Leaf
                            size={34}
                            color={COLORS.lime}
                            style={{
                                marginBottom: 20,
                            }}
                        />

                        <div
                            style={{
                                color: COLORS.lime,
                                fontSize: 11,
                                fontWeight: 800,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                marginBottom: 18,
                            }}
                        >
                            Build for the long term
                        </div>

                        <h2
                            style={{
                                margin: 0,
                                fontSize: "clamp(43px, 7vw, 90px)",
                                lineHeight: 0.94,
                                letterSpacing: "-0.06em",
                            }}
                        >
                            Let's build infrastructure
                            <br />
                            that performs
                            <br />
                            <span style={{ color: COLORS.lime }}>
                                for decades.
                            </span>
                        </h2>

                        <p
                            style={{
                                maxWidth: 650,
                                margin: "30px auto 35px",
                                color: COLORS.muted,
                                lineHeight: 1.8,
                                fontSize: 16,
                            }}
                        >
                            Tell us about your project, sustainability objectives or
                            infrastructure requirement and let's explore how environmental
                            performance and long-term economics can work together.
                        </p>

                        <Link
                            to="/contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "16px 25px",
                                background: COLORS.lime,
                                color: "#07110D",
                                borderRadius: 5,
                                textDecoration: "none",
                                fontWeight: 800,
                            }}
                        >
                            Talk to Cymetree
                            <ArrowUpRight size={18} />
                        </Link>
                    </motion.div>
                </section>
            </main>

            <Footer />

            {/* =====================================================
          RESPONSIVE
      ====================================================== */}
            <style>{`
        @media (max-width: 1000px) {
          .sustain-intro-grid,
          .sustain-feature-grid,
          .sustain-lifecycle-grid,
          .sustain-why-grid {
            grid-template-columns: 1fr !important;
          }

          .sustain-capability-grid,
          .sustain-principles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .sustain-heading {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .sustain-standard-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .sustain-intro-grid {
            gap: 45px !important;
          }
        }

        @media (max-width: 680px) {
          .sustain-capability-grid,
          .sustain-principles-grid,
          .sustain-standard-grid,
          .sustain-sector-grid {
            grid-template-columns: 1fr !important;
          }

          .sustain-feature-grid > div:first-child {
            min-height: 380px !important;
          }

          .sustain-lifecycle-row {
            grid-template-columns: 45px 1fr !important;
            gap: 15px !important;
          }

          .sustain-lifecycle-row p {
            grid-column: 2 !important;
          }
        }
      `}</style>
        </>
    );
}

export default SustainableInfrastructure;