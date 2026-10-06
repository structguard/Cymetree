import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
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
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function SectionLabel({ number, children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 11,
        color: C.accent,
        fontSize: 11,
        fontWeight: 900,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
      }}
    >
      <span
        style={{
          width: 32,
          height: 1,
          background: C.accent,
        }}
      />

      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function ContactCard({ icon: Icon, title, text, href }) {
  return (
    <motion.a
      href={href}
      variants={fadeUp}
      whileHover={{
        y: -5,
        borderColor: C.borderStrong,
      }}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 17,
        padding: 22,
        borderRadius: 20,
        background: "rgba(255,255,255,0.035)",
        border: `1px solid ${C.border}`,
        textDecoration: "none",
        transition: "border-color .3s ease",
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          minWidth: 46,
          borderRadius: 14,
          background: C.accentSoft,
          border: `1px solid ${C.borderStrong}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={20} color={C.accent} />
      </div>

      <div>
        <div
          style={{
            color: C.muted2,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 7,
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: C.white,
            fontSize: 14,
            lineHeight: 1.55,
            wordBreak: "break-word",
          }}
        >
          {text}
        </div>
      </div>
    </motion.a>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        style={{
          display: "block",
          color: C.white,
          fontSize: 12,
          fontWeight: 700,
          marginBottom: 9,
        }}
      >
        {label}

        {required && (
          <span
            style={{
              color: C.accent,
              marginLeft: 4,
            }}
          >
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "15px 16px",
          borderRadius: 12,
          border: `1px solid ${C.border}`,
          outline: "none",
          background: "rgba(255,255,255,0.045)",
          color: C.white,
          fontSize: 14,
          fontFamily: "inherit",
          transition: "border-color .25s ease",
        }}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        style={{
          display: "block",
          color: C.white,
          fontSize: 12,
          fontWeight: 700,
          marginBottom: 9,
        }}
      >
        {label}

        {required && (
          <span
            style={{
              color: C.accent,
              marginLeft: 4,
            }}
          >
            *
          </span>
        )}
      </label>

      <div
        style={{
          position: "relative",
        }}
      >
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "15px 45px 15px 16px",
            borderRadius: 12,
            border: `1px solid ${C.border}`,
            outline: "none",
            background: "#101F22",
            color: value ? C.white : C.muted2,
            fontSize: 14,
            fontFamily: "inherit",
            appearance: "none",
            cursor: "pointer",
          }}
        >
          <option value="" disabled>
            Select project type
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          color={C.muted}
          style={{
            position: "absolute",
            right: 15,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      Connect this later with:
      - Formspree
      - Firebase
      - Supabase
      - Resend/API
    */

    console.log("Cymetree enquiry:", form);

    setSubmitted(true);

    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      location: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        color: C.white,
        overflow: "hidden",
      }}
    >
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        style={{
          position: "relative",
          minHeight: "72vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=82"
          alt="Modern infrastructure"
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
              "linear-gradient(90deg, rgba(5,13,15,.97) 0%, rgba(5,13,15,.75) 48%, rgba(5,13,15,.2) 100%), linear-gradient(0deg, rgba(5,13,15,.95), transparent 60%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "-4%",
            top: "8%",
            fontSize: "clamp(180px, 31vw, 500px)",
            lineHeight: 0.8,
            fontWeight: 900,
            color: "rgba(255,255,255,.035)",
            userSelect: "none",
          }}
        >
          07
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
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 13px",
                borderRadius: 100,
                background: "rgba(255,255,255,.07)",
                border: `1px solid ${C.border}`,
                color: C.muted,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.1em",
              }}
            >
              <Sparkles size={13} color={C.accent} />
              PARTNER WITH CYMETREE
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{
              maxWidth: 950,
              margin: "25px 0 22px",
              fontSize: "clamp(52px, 8vw, 108px)",
              lineHeight: 0.9,
              letterSpacing: "-0.06em",
              fontWeight: 800,
            }}
          >
            Let's build
            <br />
            <span style={{ color: C.accent }}>what matters.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              maxWidth: 650,
              color: "#D1D9D7",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Have a complex infrastructure requirement? Tell us about it. Our
            team will help you identify the right path from planning to
            execution.
          </motion.p>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "110px 7% 70px",
        }}
      >
        <div
          className="contact-intro-grid"
          style={{
            display: "grid",
            gridTemplateColumns: ".7fr 1.3fr",
            gap: 90,
          }}
        >
          <div>
            <SectionLabel number="01">Connect</SectionLabel>

            <div
              style={{
                marginTop: 35,
                color: C.muted2,
                fontSize: 12,
                lineHeight: 1.8,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Healthcare
              <br />
              Institutional
              <br />
              Industrial
              <br />
              Infrastructure
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(36px, 5vw, 65px)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
              }}
            >
              One conversation.
              <br />
              <span style={{ color: C.accent }}>Many possibilities.</span>
            </h2>

            <p
              style={{
                maxWidth: 720,
                color: C.muted,
                fontSize: 16,
                lineHeight: 1.85,
                margin: "25px 0 0",
              }}
            >
              Cymetree delivers complex buildings and specialised
              infrastructure across healthcare, institutional, transport,
              digital, industrial and sustainable infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT DETAILS
      ===================================================== */}

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "20px 7% 100px",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="contact-details-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}
        >
          <ContactCard
            icon={Mail}
            title="Our Email"
            text="info@cymetreeprojects.com"
            href="mailto:info@cymetreeprojects.com"
          />

          <ContactCard
            icon={Phone}
            title="Office Number"
            text="+888-807-5000"
            href="tel:+8888075000"
          />

          <ContactCard
            icon={MapPin}
            title="Our Office"
            text="Baner, Pune, Maharashtra"
            href="#location"
          />
        </motion.div>
      </section>

      {/* =====================================================
          PROJECT ENQUIRY
      ===================================================== */}

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 7% 130px",
        }}
      >
        <div
          className="contact-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: ".72fr 1.28fr",
            gap: 22,
            alignItems: "stretch",
          }}
        >
          {/* LEFT */}

          <div
            style={{
              borderRadius: 28,
              background: C.panel,
              border: `1px solid ${C.border}`,
              padding: 32,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                color: C.accent,
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.16em",
              }}
            >
              PROJECT DISCUSSION
            </div>

            <h2
              style={{
                margin: "18px 0 14px",
                fontSize: 31,
                lineHeight: 1.05,
              }}
            >
              Tell us what
              <br />
              you're building.
            </h2>

            <p
              style={{
                color: C.muted,
                fontSize: 14,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Give us a little context about your requirement and our team
              will direct it to the appropriate project specialist.
            </p>

            <div
              style={{
                marginTop: 35,
                display: "grid",
                gap: 11,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 13,
                  padding: "17px 0",
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                <Building2 size={20} color={C.accent} />

                <div>
                  <div
                    style={{
                      color: C.white,
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    Specialised Infrastructure
                  </div>

                  <div
                    style={{
                      color: C.muted,
                      fontSize: 12,
                      marginTop: 4,
                      lineHeight: 1.6,
                    }}
                  >
                    Healthcare, institutional, industrial and critical
                    infrastructure.
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 13,
                  padding: "17px 0",
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                <ShieldCheck size={20} color={C.accent} />

                <div>
                  <div
                    style={{
                      color: C.white,
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    Single-Point Accountability
                  </div>

                  <div
                    style={{
                      color: C.muted,
                      fontSize: 12,
                      marginTop: 4,
                      lineHeight: 1.6,
                    }}
                  >
                    Design coordination, engineering, procurement and execution
                    under one platform.
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 13,
                  padding: "17px 0",
                }}
              >
                <Clock3 size={20} color={C.accent} />

                <div>
                  <div
                    style={{
                      color: C.white,
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    Project Consultation
                  </div>

                  <div
                    style={{
                      color: C.muted,
                      fontSize: 12,
                      marginTop: 4,
                      lineHeight: 1.6,
                    }}
                  >
                    Discuss scope, project stage, technical requirements and
                    delivery approach.
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: 35,
              }}
            >
              <div
                style={{
                  padding: 18,
                  borderRadius: 17,
                  background: C.accentSoft,
                  border: `1px solid ${C.borderStrong}`,
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                <CheckCircle2
                  size={18}
                  color={C.accent}
                  style={{ marginTop: 2 }}
                />

                <div
                  style={{
                    color: C.muted,
                    fontSize: 12,
                    lineHeight: 1.65,
                  }}
                >
                  Every enquiry is reviewed with the aim of connecting you
                  with the right Cymetree capability.
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              borderRadius: 28,
              background:
                "linear-gradient(145deg, #14292D 0%, #0D1B1E 100%)",
              border: `1px solid ${C.border}`,
              padding: 35,
            }}
          >
            {!submitted ? (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 20,
                    alignItems: "flex-start",
                    marginBottom: 30,
                  }}
                >
                  <div>
                    <SectionLabel number="02">Get In Touch</SectionLabel>

                    <h2
                      style={{
                        margin: "17px 0 0",
                        fontSize: 29,
                        lineHeight: 1.05,
                      }}
                    >
                      Project enquiry
                    </h2>
                  </div>

                  <Send size={27} color={C.accent} />
                </div>

                <form onSubmit={handleSubmit}>
                  <div
                    className="contact-form-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 18,
                    }}
                  >
                    <InputField
                      label="Your Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />

                    <InputField
                      label="Company / Organisation"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />

                    <InputField
                      label="Email Address"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      type="email"
                      required
                    />

                    <InputField
                      label="Contact Number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      type="tel"
                      required
                    />

                    <SelectField
                      label="Project Type"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      options={[
                        "Building Construction & Development",
                        "Healthcare Infrastructure",
                        "Critical Care & Clinical Environments",
                        "Transport & Civil Infrastructure",
                        "Digital & Industrial Infrastructure",
                        "Green & Sustainable Infrastructure",
                        "Renovation / Expansion",
                        "Other",
                      ]}
                    />

                    <InputField
                      label="Project Location"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="City / State"
                    />
                  </div>

                  <div style={{ marginTop: 18 }}>
                    <label
                      htmlFor="message"
                      style={{
                        display: "block",
                        color: C.white,
                        fontSize: 12,
                        fontWeight: 700,
                        marginBottom: 9,
                      }}
                    >
                      Message
                      <span
                        style={{
                          color: C.accent,
                          marginLeft: 4,
                        }}
                      >
                        *
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, scope, current stage, location or requirement..."
                      required
                      rows={6}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        resize: "vertical",
                        padding: "15px 16px",
                        borderRadius: 12,
                        border: `1px solid ${C.border}`,
                        outline: "none",
                        background: "rgba(255,255,255,0.045)",
                        color: C.white,
                        fontSize: 14,
                        lineHeight: 1.6,
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 20,
                      marginTop: 20,
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: C.muted2,
                        fontSize: 11,
                      }}
                    >
                      <ShieldCheck size={15} color={C.accent} />
                      Confidential project enquiry
                    </div>

                    <button
                      type="submit"
                      style={{
                        border: "none",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 9,
                        padding: "15px 24px",
                        borderRadius: 100,
                        background: C.accent,
                        color: "#10160D",
                        fontWeight: 900,
                        fontSize: 13,
                        fontFamily: "inherit",
                      }}
                    >
                      Get In Touch
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div
                style={{
                  minHeight: 570,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    background: C.accentSoft,
                    border: `1px solid ${C.borderStrong}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircle2 size={36} color={C.accent} />
                </div>

                <div
                  style={{
                    marginTop: 25,
                    color: C.accent,
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: "0.18em",
                  }}
                >
                  MESSAGE RECEIVED
                </div>

                <h2
                  style={{
                    fontSize: "clamp(34px, 5vw, 52px)",
                    margin: "17px 0 14px",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Thank you.
                </h2>

                <p
                  style={{
                    maxWidth: 480,
                    color: C.muted,
                    fontSize: 14,
                    lineHeight: 1.8,
                  }}
                >
                  Your enquiry has been received. The Cymetree team will
                  review your requirement and get in touch with you.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: 25,
                    padding: "13px 20px",
                    borderRadius: 100,
                    border: `1px solid ${C.border}`,
                    background: "rgba(255,255,255,.05)",
                    color: C.white,
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAP
      ===================================================== */}

      <section
        id="location"
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
          <SectionLabel number="03">Visit Us</SectionLabel>

          <div
            className="map-heading-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr .7fr",
              gap: 50,
              alignItems: "end",
              marginTop: 30,
              marginBottom: 40,
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(40px, 5vw, 70px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.055em",
                }}
              >
                Come meet
                <br />
                <span style={{ color: C.accent }}>Cymetree.</span>
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                gap: 13,
                alignItems: "flex-start",
              }}
            >
              <MapPin size={21} color={C.accent} />

              <div>
                <div
                  style={{
                    color: C.white,
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  Cymetree Projects LLP
                </div>

                <div
                  style={{
                    color: C.muted,
                    fontSize: 13,
                    lineHeight: 1.7,
                    marginTop: 5,
                  }}
                >
                  Baner, Pune, Maharashtra
                </div>
              </div>
            </div>
          </div>

          {/* GOOGLE MAP */}

          <div
            style={{
              position: "relative",
              height: 520,
              borderRadius: 28,
              overflow: "hidden",
              border: `1px solid ${C.border}`,
              background: "#0E191B",
            }}
          >
            <iframe
              title="Cymetree Projects - Baner Pune Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26200.389022989817!2d73.78137100000001!3d18.559971549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becff05dd3cb%3A0xa1911297fb7fab7d!2sBaner%2C%20Pune%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1791209567215!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: "block",
                filter: "grayscale(15%) contrast(1.05)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            <div
              style={{
                position: "absolute",
                left: 22,
                bottom: 22,
                padding: "14px 17px",
                borderRadius: 14,
                background: "rgba(7,16,18,.9)",
                backdropFilter: "blur(12px)",
                border: `1px solid ${C.border}`,
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  color: C.accent,
                  fontSize: 9,
                  fontWeight: 900,
                  letterSpacing: "0.15em",
                }}
              >
                CYMETREE PROJECTS LLP
              </div>

              <div
                style={{
                  color: C.white,
                  fontSize: 13,
                  marginTop: 4,
                }}
              >
                Baner, Pune, Maharashtra
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Baner%2C%20Pune%2C%20Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: C.accent,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 800,
            }}
          >
            Open location in Google Maps
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 7%",
        }}
      >
        <SectionLabel number="04">What We Do</SectionLabel>

        <div
          className="contact-services-grid"
          style={{
            marginTop: 45,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}
        >
          {[
            {
              title: "Building Construction",
              text: "Institutional, commercial, residential and industrial buildings.",
            },
            {
              title: "Healthcare Infrastructure",
              text: "Hospitals, medical colleges and tertiary care facilities.",
            },
            {
              title: "Critical Care Environments",
              text: "Specialised clinical and technical infrastructure.",
            },
            {
              title: "Transport & Civil",
              text: "Roads, bridges, flyovers and associated infrastructure.",
            },
            {
              title: "Digital & Industrial",
              text: "High-performance facilities for data, manufacturing and logistics.",
            },
            {
              title: "Green Infrastructure",
              text: "Sustainable, efficient and lifecycle-focused infrastructure.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -5,
                borderColor: C.borderStrong,
              }}
              style={{
                minHeight: 175,
                padding: 24,
                borderRadius: 20,
                background: C.panel,
                border: `1px solid ${C.border}`,
                transition: "border-color .3s ease",
              }}
            >
              <div
                style={{
                  color: C.accent,
                  fontSize: 11,
                  fontWeight: 900,
                  marginBottom: 55,
                }}
              >
                0{index + 1}
              </div>

              <h3
                style={{
                  margin: "0 0 8px",
                  color: C.white,
                  fontSize: 17,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: C.muted,
                  fontSize: 12,
                  lineHeight: 1.7,
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 7% 130px",
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
            background: C.accent,
            color: "#10160D",
            padding: "70px 8%",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "rgba(255,255,255,.15)",
              right: -120,
              top: -220,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 850,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.17em",
              }}
            >
              READY TO BUILD?
            </div>

            <h2
              style={{
                fontSize: "clamp(38px, 5.5vw, 70px)",
                lineHeight: 0.95,
                letterSpacing: "-0.055em",
                margin: "18px 0 25px",
              }}
            >
              Bring us the complexity.
              <br />
              We'll bring the capability.
            </h2>

            <a
              href="mailto:info@cymetreeprojects.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "15px 22px",
                borderRadius: 100,
                background: "#10160D",
                color: C.white,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 13,
              }}
            >
              Email Cymetree
              <ArrowUpRight size={17} />
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
          .contact-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 45px !important;
          }

          .contact-details-grid {
            grid-template-columns: 1fr !important;
          }

          .contact-main-grid {
            grid-template-columns: 1fr !important;
          }

          .map-heading-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }

          .contact-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 700px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }

          .contact-services-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 560px) {
          .contact-main-grid > div {
            padding: 23px !important;
          }

          .contact-main-grid {
            gap: 14px !important;
          }

          #location iframe {
            height: 400px !important;
          }
        }

        input::placeholder,
        textarea::placeholder {
          color: #657678;
        }

        select option {
          background: #101f22;
          color: #f5f7f3;
        }
      `}</style>
    </div>
  );
}