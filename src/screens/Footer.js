import React from "react";
import {
  ArrowUpRight,

  // Instagram,
  // Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const colors = {
  bg: "#050C0F",
  white: "#F7FAF8",
  muted: "#8D9A9E",
  accent: "#B7D65C",
  line: "rgba(255,255,255,0.09)",
};

function Footer() {
  return (
    <footer
      style={{
        background: colors.bg,
        color: colors.white,
        borderTop: `1px solid ${colors.line}`,
      }}
    >
      {/* ================= CTA ================= */}

      <section
        style={{
          padding: "110px 5vw",
          background:
            "radial-gradient(circle at 80% 50%, rgba(183,214,92,0.08), transparent 35%)",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "50px",
            flexWrap: "wrap",
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
              HAVE A PROJECT IN MIND?
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(42px,6vw,78px)",
                lineHeight: 0.95,
                letterSpacing: "-3px",
                fontWeight: 600,
                maxWidth: "750px",
              }}
            >
              Let's build
              <br />
              something meaningful.
            </h2>
          </div>

          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              rotate: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            style={{
              width: "135px",
              height: "135px",
              borderRadius: "50%",
              background: colors.accent,
              color: "#11170B",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              fontSize: "11px",
              fontWeight: 900,
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            TALK TO
            <br />
            CYMETREE
            <ArrowUpRight size={20} style={{ marginTop: "8px" }} />
          </motion.a>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}

      <div
        style={{
          maxWidth: "1450px",
          margin: "auto",
          padding: "70px 5vw 35px",
        }}
      >
        <div
          className="cymetree-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "50px",
          }}
        >
          {/* Brand */}

          <div>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: colors.white,
                display: "inline-block",
              }}
            >
              <div
                style={{
                  fontSize: "25px",
                  fontWeight: 900,
                  letterSpacing: "-1px",
                }}
              >
                CYMETREE
              </div>

              <div
                style={{
                  color: colors.accent,
                  fontSize: "8px",
                  letterSpacing: "3px",
                  marginTop: "5px",
                }}
              >
                PROJECTS LLP
              </div>
            </a>

            <p
              style={{
                color: colors.muted,
                lineHeight: 1.8,
                fontSize: "13px",
                maxWidth: "360px",
                marginTop: "25px",
              }}
            >
              Building specialised infrastructure for healthcare,
              institutions, industry, transportation, technology and
              a more sustainable future.
            </p>

            {/* Social */}

            <div
              style={{
                display: "flex",
                gap: "9px",
                marginTop: "25px",
              }}
            >
              {[
                {
                  icon: "I",
                  link: "#",
                },
                {
                  icon: "L",
                  link: "#",
                },
                {
                  icon: "F",
                  link: "#",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{
                    y: -4,
                    borderColor: colors.accent,
                    color: colors.accent,
                  }}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    border: `1px solid ${colors.line}`,
                    display: "grid",
                    placeItems: "center",
                    color: colors.white,
                    textDecoration: "none",
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore */}

          <div>
            <FooterTitle title="EXPLORE" />

            <FooterLink text="About Us" href="/about" />
            <FooterLink text="Our Services" href="/services" />
            <FooterLink text="Projects" href="/projects" />
            <FooterLink text="Sustainability" href="/sustainability" />
            <FooterLink text="Insights" href="/insights" />
          </div>

          {/* Services */}

          <div>
            <FooterTitle title="CAPABILITIES" />

            <FooterLink
              text="Healthcare Infrastructure"
              href="/services"
            />

            <FooterLink
              text="Industrial Infrastructure"
              href="/services"
            />

            <FooterLink
              text="Building Construction"
              href="/services"
            />

            <FooterLink
              text="Transport & Civil"
              href="/services"
            />

            <FooterLink
              text="Digital Infrastructure"
              href="/services"
            />
          </div>

          {/* Contact */}

          <div>
            <FooterTitle title="CONTACT" />

            <ContactItem
              icon={<Phone size={15} />}
              text="+91 00000 00000"
            />

            <ContactItem
              icon={<Mail size={15} />}
              text="info@cymetreeprojects.com"
            />

            <ContactItem
              icon={<MapPin size={15} />}
              text="Pune, Maharashtra, India"
            />
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          style={{
            borderTop: `1px solid ${colors.line}`,
            marginTop: "65px",
            paddingTop: "22px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            color: "#637075",
            fontSize: "11px",
          }}
        >
          <div>
            © {new Date().getFullYear()} Cymetree Projects LLP. All
            Rights Reserved.
          </div>

          <div
            style={{
              display: "flex",
              gap: "22px",
            }}
          >
            <a
              href="/privacy-policy"
              style={{
                color: "#637075",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              style={{
                color: "#637075",
                textDecoration: "none",
              }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 850px) {
            .cymetree-footer-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }

          @media (max-width: 550px) {
            .cymetree-footer-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </footer>
  );
}

function FooterTitle({ title }) {
  return (
    <div
      style={{
        color: colors.accent,
        fontSize: "10px",
        fontWeight: 900,
        letterSpacing: "2px",
        marginBottom: "22px",
      }}
    >
      {title}
    </div>
  );
}

function FooterLink({ text, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{
        x: 4,
        color: colors.accent,
      }}
      style={{
        display: "block",
        color: colors.muted,
        textDecoration: "none",
        fontSize: "13px",
        marginBottom: "13px",
        transition: "0.2s",
      }}
    >
      {text}
    </motion.a>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        color: colors.muted,
        fontSize: "13px",
        lineHeight: 1.6,
        marginBottom: "15px",
      }}
    >
      <span
        style={{
          color: colors.accent,
          marginTop: "2px",
        }}
      >
        {icon}
      </span>

      {text}
    </div>
  );
}

export default Footer;