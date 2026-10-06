import React from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Building2,
    HardHat,
    Ruler,
    ShieldCheck,
    Clock3,
    Layers3,
    Settings2,
    ClipboardCheck,
    Factory,
    GraduationCap,
    HeartPulse,
    Landmark,
    BriefcaseBusiness,
    Home,
    CheckCircle2,
    MoveRight,
} from "lucide-react";

import Header from "./Header";
import Footer from "./Footer";

const BuildingConstruction = () => {
    const colors = {
        bg: "#071012",
        bgSoft: "#0B181B",
        panel: "#102124",
        panel2: "#142A2E",
        white: "#F5F7F3",
        muted: "#A8B5B6",
        muted2: "#748486",
        accent: "#C4D96B",
        accentSoft: "rgba(196,217,107,0.10)",
        border: "rgba(255,255,255,0.10)",
        borderStrong: "rgba(196,217,107,0.30)",
    };

    const capabilities = [
        {
            number: "01",
            icon: <Building2 size={23} />,
            title: "Turnkey Construction",
            text: "Complete project delivery from design coordination through construction, integration, testing and final handover.",
        },
        {
            number: "02",
            icon: <Layers3 size={23} />,
            title: "New Builds",
            text: "Ground-up construction for institutional, healthcare, commercial, residential and industrial developments.",
        },
        {
            number: "03",
            icon: <Ruler size={23} />,
            title: "Renovation & Fit-Out",
            text: "Transformation of existing assets while carefully managing operational continuity, interfaces and site constraints.",
        },
        {
            number: "04",
            icon: <Settings2 size={23} />,
            title: "Project Management",
            text: "Programme governance, coordination, milestone tracking, stakeholder management and delivery control.",
        },
        {
            number: "05",
            icon: <HardHat size={23} />,
            title: "Site Supervision",
            text: "Structured site teams focused on workmanship, sequencing, productivity, safety and schedule adherence.",
        },
        {
            number: "06",
            icon: <ShieldCheck size={23} />,
            title: "Quality & EHS",
            text: "Embedded quality assurance, material governance, inspection procedures and environment, health & safety controls.",
        },
        {
            number: "07",
            icon: <Clock3 size={23} />,
            title: "Programme & Cost Control",
            text: "Disciplined planning and cost management designed to protect project timelines and commercial outcomes.",
        },
    ];

    const process = [
        {
            no: "01",
            title: "Understand",
            text: "We establish the project brief, site constraints, technical requirements, programme and commercial objectives.",
        },
        {
            no: "02",
            title: "Coordinate",
            text: "Architectural, structural, MEP, specialist and procurement interfaces are coordinated before they become site problems.",
        },
        {
            no: "03",
            title: "Procure",
            text: "Materials, systems, vendors and specialist packages are planned around programme requirements and quality expectations.",
        },
        {
            no: "04",
            title: "Build",
            text: "Site execution follows controlled sequencing, inspection procedures, safety protocols and measurable milestones.",
        },
        {
            no: "05",
            title: "Integrate",
            text: "Building services, specialist systems and finishes are progressively integrated and tested as the asset takes shape.",
        },
        {
            no: "06",
            title: "Handover",
            text: "Testing, documentation, rectification, commissioning and operational readiness complete the delivery cycle.",
        },
    ];

    const sectors = [
        {
            icon: <Landmark size={26} />,
            title: "Government & Public Institutions",
            text: "Complex public assets requiring rigorous compliance, governance and stakeholder coordination.",
        },
        {
            icon: <HeartPulse size={26} />,
            title: "Healthcare Facilities",
            text: "Hospitals, medical facilities and environments where technical performance is critical.",
        },
        {
            icon: <GraduationCap size={26} />,
            title: "Educational Campuses",
            text: "Academic and institutional buildings designed around people, functionality and long-term use.",
        },
        {
            icon: <BriefcaseBusiness size={26} />,
            title: "Commercial & Office",
            text: "Efficient commercial environments delivered with programme and cost discipline.",
        },
        {
            icon: <Factory size={26} />,
            title: "Industrial & Manufacturing",
            text: "Purpose-built industrial environments engineered around operational requirements.",
        },
        {
            icon: <Home size={26} />,
            title: "Residential Developments",
            text: "Residential assets combining build quality, functionality, durability and finish.",
        },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <div
            style={{
                background: colors.bg,
                color: colors.white,
                minHeight: "100vh",
                overflow: "hidden",
            }}
        >
            <Header />

            {/* =========================================================
          HERO
      ========================================================= */}
            <section
                style={{
                    position: "relative",
                    minHeight: "88vh",
                    display: "flex",
                    alignItems: "flex-end",
                    overflow: "hidden",
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85"
                    alt="Building construction project"
                    fetchPriority="high"
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
                            "linear-gradient(90deg, rgba(4,10,11,0.92) 0%, rgba(4,10,11,0.72) 45%, rgba(4,10,11,0.25) 100%)",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(0deg, rgba(7,16,18,1) 0%, rgba(7,16,18,0.10) 65%)",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        maxWidth: "1380px",
                        margin: "0 auto",
                        padding: "110px 6vw 85px",
                    }}
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        style={{
                            maxWidth: "950px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                marginBottom: "25px",
                                color: colors.accent,
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "0.18em",
                            }}
                        >
                            <span
                                style={{
                                    width: "42px",
                                    height: "1px",
                                    background: colors.accent,
                                }}
                            />
                            01 / BUILDING CONSTRUCTION
                        </div>

                        <h1
                            style={{
                                margin: 0,
                                fontSize: "clamp(48px, 7vw, 104px)",
                                lineHeight: 0.94,
                                letterSpacing: "-0.055em",
                                fontWeight: 700,
                            }}
                        >
                            Built from
                            <br />
                            the ground up.
                        </h1>

                        <p
                            style={{
                                marginTop: "32px",
                                maxWidth: "680px",
                                fontSize: "clamp(17px, 2vw, 22px)",
                                lineHeight: 1.6,
                                color: "#D6DEDB",
                            }}
                        >
                            End-to-end building construction engineered around quality,
                            programme certainty and long-term performance.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "14px",
                                marginTop: "38px",
                            }}
                        >
                            <motion.a
                                whileHover={{ y: -3 }}
                                href="/contact/"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    padding: "15px 22px",
                                    background: colors.accent,
                                    color: "#101612",
                                    textDecoration: "none",
                                    fontWeight: 800,
                                    borderRadius: "2px",
                                }}
                            >
                                Start a Project
                                <ArrowUpRight size={18} />
                            </motion.a>

                            <motion.a
                                whileHover={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                                href="/our-portfolio/"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    padding: "15px 22px",
                                    border: `1px solid rgba(255,255,255,0.28)`,
                                    color: colors.white,
                                    textDecoration: "none",
                                    fontWeight: 700,
                                    borderRadius: "2px",
                                    backdropFilter: "blur(8px)",
                                }}
                            >
                                Explore Projects
                                <MoveRight size={18} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        right: "5vw",
                        bottom: "70px",
                        fontSize: "clamp(90px, 16vw, 230px)",
                        fontWeight: 800,
                        lineHeight: 0.8,
                        color: "rgba(255,255,255,0.07)",
                        letterSpacing: "-0.08em",
                        userSelect: "none",
                    }}
                >
                    01
                </div>
            </section>

            {/* =========================================================
          INTRO
      ========================================================= */}
            <section
                style={{
                    padding: "120px 6vw",
                    background: colors.bg,
                }}
            >
                <div
                    style={{
                        maxWidth: "1380px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "0.75fr 1.25fr",
                        gap: "90px",
                        alignItems: "start",
                    }}
                    className="construction-intro-grid"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                    >
                        <div
                            style={{
                                color: colors.accent,
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "0.18em",
                                marginBottom: "18px",
                            }}
                        >
                            THE CYMETREE APPROACH
                        </div>

                        <h2
                            style={{
                                fontSize: "clamp(38px, 5vw, 68px)",
                                lineHeight: 1,
                                letterSpacing: "-0.045em",
                                margin: 0,
                            }}
                        >
                            Construction
                            <br />
                            without the seams.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                    >
                        <p
                            style={{
                                fontSize: "clamp(21px, 2.5vw, 32px)",
                                lineHeight: 1.35,
                                margin: 0,
                                color: colors.white,
                            }}
                        >
                            From first drawing to final handover, Cymetree brings the
                            engineering, construction and project controls together under one
                            accountable delivery platform.
                        </p>

                        <p
                            style={{
                                marginTop: "28px",
                                fontSize: "17px",
                                lineHeight: 1.8,
                                color: colors.muted,
                                maxWidth: "760px",
                            }}
                        >
                            Building construction is treated as an engineered process rather
                            than a collection of disconnected packages. Our teams coordinate
                            planning, procurement, civil and structural works, services,
                            specialist systems, quality and handover around a common project
                            programme.
                        </p>

                        <div
                            style={{
                                marginTop: "38px",
                                display: "flex",
                                alignItems: "center",
                                gap: "13px",
                                color: colors.accent,
                                fontWeight: 800,
                            }}
                        >
                            <CheckCircle2 size={20} />
                            One team. One programme. One accountable outcome.
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
          LIFECYCLE STRIP
      ========================================================= */}
            <section
                style={{
                    padding: "0 6vw 120px",
                    background: colors.bg,
                }}
            >
                <div
                    style={{
                        maxWidth: "1380px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(6, 1fr)",
                        borderTop: `1px solid ${colors.border}`,
                        borderBottom: `1px solid ${colors.border}`,
                    }}
                    className="construction-lifecycle"
                >
                    {[
                        "Brief",
                        "Design",
                        "Procurement",
                        "Construction",
                        "Integration",
                        "Handover",
                    ].map((item, index) => (
                        <div
                            key={item}
                            style={{
                                padding: "25px 15px",
                                borderRight:
                                    index !== 5 ? `1px solid ${colors.border}` : "none",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "11px",
                                    color: colors.accent,
                                    fontWeight: 800,
                                    marginBottom: "9px",
                                }}
                            >
                                0{index + 1}
                            </div>

                            <div
                                style={{
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: colors.white,
                                }}
                            >
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================================================
          CAPABILITIES
      ========================================================= */}
            <section
                style={{
                    padding: "120px 6vw",
                    background: colors.bgSoft,
                }}
            >
                <div
                    style={{
                        maxWidth: "1380px",
                        margin: "0 auto",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "0.8fr 1.2fr",
                            gap: "70px",
                            marginBottom: "65px",
                        }}
                        className="construction-section-heading"
                    >
                        <div>
                            <div
                                style={{
                                    color: colors.accent,
                                    fontSize: "12px",
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                }}
                            >
                                OUR CAPABILITIES
                            </div>
                        </div>

                        <div>
                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(38px, 5vw, 68px)",
                                    lineHeight: 1,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Every part of construction,
                                <br />
                                managed with intent.
                            </h2>

                            <p
                                style={{
                                    marginTop: "25px",
                                    color: colors.muted,
                                    fontSize: "17px",
                                    lineHeight: 1.7,
                                    maxWidth: "700px",
                                }}
                            >
                                The current Cymetree offering spans turnkey construction,
                                ground-up development, refurbishment, project management,
                                supervision and quality governance. :chatgpt-content-reference
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "1px",
                            background: colors.border,
                        }}
                        className="construction-capability-grid"
                    >
                        {capabilities.map((item) => (
                            <motion.div
                                key={item.number}
                                whileHover={{ backgroundColor: colors.panel2 }}
                                style={{
                                    background: colors.panel,
                                    padding: "38px",
                                    minHeight: "245px",
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
                                            width: "48px",
                                            height: "48px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: `1px solid ${colors.borderStrong}`,
                                            color: colors.accent,
                                        }}
                                    >
                                        {item.icon}
                                    </div>

                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: colors.muted2,
                                            fontWeight: 800,
                                        }}
                                    >
                                        {item.number}
                                    </span>
                                </div>

                                <h3
                                    style={{
                                        fontSize: "23px",
                                        margin: "30px 0 12px",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    style={{
                                        color: colors.muted,
                                        lineHeight: 1.7,
                                        margin: 0,
                                        fontSize: "15px",
                                    }}
                                >
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          IMAGE / STATEMENT
      ========================================================= */}
            <section
                style={{
                    position: "relative",
                    minHeight: "650px",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85"
                    alt="Construction site"
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
                            "linear-gradient(90deg, rgba(5,12,13,0.94), rgba(5,12,13,0.55), rgba(5,12,13,0.25))",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        maxWidth: "1380px",
                        margin: "0 auto",
                        padding: "100px 6vw",
                    }}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeUp}
                        style={{
                            maxWidth: "850px",
                        }}
                    >
                        <div
                            style={{
                                color: colors.accent,
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "0.18em",
                                marginBottom: "20px",
                            }}
                        >
                            ENGINEERED EXECUTION
                        </div>

                        <h2
                            style={{
                                fontSize: "clamp(42px, 6vw, 82px)",
                                lineHeight: 0.98,
                                letterSpacing: "-0.055em",
                                margin: 0,
                            }}
                        >
                            The building is the
                            <br />
                            result. Execution is
                            <br />
                            the difference.
                        </h2>

                        <p
                            style={{
                                marginTop: "30px",
                                color: "#D0D8D5",
                                fontSize: "18px",
                                lineHeight: 1.7,
                                maxWidth: "650px",
                            }}
                        >
                            We focus on the interfaces that determine whether a complex
                            building succeeds: design coordination, procurement, sequencing,
                            quality, safety, services integration and commissioning.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
          PROCESS
      ========================================================= */}
            <section
                style={{
                    padding: "125px 6vw",
                    background: colors.bg,
                }}
            >
                <div
                    style={{
                        maxWidth: "1380px",
                        margin: "0 auto",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "780px",
                            marginBottom: "70px",
                        }}
                    >
                        <div
                            style={{
                                color: colors.accent,
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "0.18em",
                                marginBottom: "18px",
                            }}
                        >
                            HOW WE DELIVER
                        </div>

                        <h2
                            style={{
                                fontSize: "clamp(40px, 5vw, 70px)",
                                lineHeight: 1,
                                letterSpacing: "-0.05em",
                                margin: 0,
                            }}
                        >
                            Six stages.
                            <br />
                            One controlled journey.
                        </h2>
                    </div>

                    <div>
                        {process.map((item, index) => (
                            <motion.div
                                key={item.no}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.06 }}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "100px 0.6fr 1fr",
                                    gap: "35px",
                                    alignItems: "center",
                                    padding: "30px 0",
                                    borderTop: `1px solid ${colors.border}`,
                                }}
                                className="construction-process-row"
                            >
                                <div
                                    style={{
                                        color: colors.accent,
                                        fontSize: "13px",
                                        fontWeight: 800,
                                    }}
                                >
                                    {item.no}
                                </div>

                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: "25px",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    style={{
                                        margin: 0,
                                        color: colors.muted,
                                        fontSize: "15px",
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

            {/* =========================================================
          SECTORS
      ========================================================= */}
            <section
                style={{
                    padding: "120px 6vw",
                    background: colors.bgSoft,
                }}
            >
                <div
                    style={{
                        maxWidth: "1380px",
                        margin: "0 auto",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            gap: "30px",
                            marginBottom: "60px",
                        }}
                        className="construction-sector-heading"
                    >
                        <div>
                            <div
                                style={{
                                    color: colors.accent,
                                    fontSize: "12px",
                                    fontWeight: 800,
                                    letterSpacing: "0.18em",
                                    marginBottom: "18px",
                                }}
                            >
                                SECTORS
                            </div>

                            <h2
                                style={{
                                    margin: 0,
                                    fontSize: "clamp(40px, 5vw, 68px)",
                                    lineHeight: 1,
                                    letterSpacing: "-0.05em",
                                }}
                            >
                                Built for different
                                <br />
                                operating environments.
                            </h2>
                        </div>

                        <p
                            style={{
                                maxWidth: "430px",
                                color: colors.muted,
                                lineHeight: 1.7,
                                margin: 0,
                            }}
                        >
                            Cymetree's current building construction offering spans
                            institutional, healthcare, educational, commercial, industrial
                            and residential environments. :chatgpt-content-reference
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "16px",
                        }}
                        className="construction-sector-grid"
                    >
                        {sectors.map((sector) => (
                            <motion.div
                                key={sector.title}
                                whileHover={{ y: -6 }}
                                style={{
                                    padding: "34px",
                                    minHeight: "235px",
                                    border: `1px solid ${colors.border}`,
                                    background: colors.panel,
                                }}
                            >
                                <div
                                    style={{
                                        color: colors.accent,
                                        marginBottom: "32px",
                                    }}
                                >
                                    {sector.icon}
                                </div>

                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: "20px",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {sector.title}
                                </h3>

                                <p
                                    style={{
                                        color: colors.muted,
                                        fontSize: "14px",
                                        lineHeight: 1.65,
                                        marginTop: "14px",
                                    }}
                                >
                                    {sector.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          WHY CYMETREE
      ========================================================= */}
            <section
                style={{
                    padding: "120px 6vw",
                    background: colors.bg,
                }}
            >
                <div
                    style={{
                        maxWidth: "1380px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "0.8fr 1.2fr",
                        gap: "90px",
                    }}
                    className="construction-why-grid"
                >
                    <div>
                        <div
                            style={{
                                color: colors.accent,
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "0.18em",
                                marginBottom: "18px",
                            }}
                        >
                            WHY CYMETREE
                        </div>

                        <h2
                            style={{
                                fontSize: "clamp(40px, 5vw, 68px)",
                                lineHeight: 1,
                                letterSpacing: "-0.05em",
                                margin: 0,
                            }}
                        >
                            More than
                            <br />
                            construction.
                        </h2>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "1px",
                            background: colors.border,
                        }}
                    >
                        {[
                            [
                                "Engineering-led",
                                "Construction decisions are made with engineering performance and lifecycle requirements in mind.",
                            ],
                            [
                                "Integrated delivery",
                                "Civil, structural, MEP, specialist systems and project controls are coordinated through one platform.",
                            ],
                            [
                                "Quality governed",
                                "Inspection, material control, supervision and EHS processes are embedded into execution.",
                            ],
                            [
                                "Programme focused",
                                "Sequencing, procurement and site activities are aligned around measurable project milestones.",
                            ],
                        ].map(([title, text]) => (
                            <div
                                key={title}
                                style={{
                                    background: colors.panel,
                                    padding: "32px",
                                    minHeight: "200px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        background: colors.accent,
                                        marginBottom: "28px",
                                    }}
                                />

                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: "21px",
                                    }}
                                >
                                    {title}
                                </h3>

                                <p
                                    style={{
                                        marginTop: "12px",
                                        color: colors.muted,
                                        lineHeight: 1.65,
                                        fontSize: "14px",
                                    }}
                                >
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          CTA
      ========================================================= */}
            <section
                style={{
                    padding: "110px 6vw",
                    background: colors.accent,
                    color: "#0A1110",
                }}
            >
                <div
                    style={{
                        maxWidth: "1380px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        gap: "50px",
                    }}
                    className="construction-cta"
                >
                    <div>
                        <div
                            style={{
                                fontSize: "12px",
                                fontWeight: 900,
                                letterSpacing: "0.18em",
                                marginBottom: "20px",
                            }}
                        >
                            HAVE A PROJECT IN MIND?
                        </div>

                        <h2
                            style={{
                                margin: 0,
                                fontSize: "clamp(45px, 7vw, 92px)",
                                lineHeight: 0.92,
                                letterSpacing: "-0.06em",
                            }}
                        >
                            Let's build
                            <br />
                            what matters.
                        </h2>
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.03 }}
                        href="/contact/"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            background: "#071012",
                            color: colors.white,
                            textDecoration: "none",
                            padding: "18px 25px",
                            fontWeight: 800,
                            whiteSpace: "nowrap",
                        }}
                    >
                        Discuss Your Project
                        <ArrowUpRight size={19} />
                    </motion.a>
                </div>
            </section>

            <Footer />

            {/* =========================================================
          RESPONSIVE
      ========================================================= */}
            <style>{`
        @media (max-width: 1000px) {
          .construction-intro-grid,
          .construction-section-heading,
          .construction-why-grid {
            grid-template-columns: 1fr !important;
            gap: 45px !important;
          }

          .construction-sector-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .construction-lifecycle {
            grid-template-columns: repeat(3, 1fr) !important;
          }

          .construction-lifecycle > div:nth-child(3) {
            border-right: none !important;
          }
        }

        @media (max-width: 720px) {
          .construction-capability-grid,
          .construction-sector-grid {
            grid-template-columns: 1fr !important;
          }

          .construction-lifecycle {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .construction-lifecycle > div {
            border-bottom: 1px solid ${colors.border};
          }

          .construction-process-row {
            grid-template-columns: 45px 1fr !important;
            gap: 15px !important;
          }

          .construction-process-row p {
            grid-column: 2;
          }

          .construction-sector-heading,
          .construction-cta {
            align-items: flex-start !important;
            flex-direction: column !important;
          }

          .construction-cta a {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .construction-lifecycle {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
        </div>
    );
};

export default BuildingConstruction;