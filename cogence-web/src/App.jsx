import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Mail, MapPin, Menu, Phone, X } from "lucide-react"
import "./App.css"

const TRAINING_PROGRAMS = [
  "ISO 13485 Quality Management System Requirements for Medical Devices",
  "ISO 13485 Internal Auditing",
  "ISO 14971 Risk Management for Medical Devices",
  "ISO 14644 Cleanroom and Associated Controlled Environment",
  "Medical Device Manufacturing Process Validation",
  "Medical Device Single Audit Program (MDSAP)",
  "EU Medical Device Regulation (EU MDR 2017/745)",
  "Understanding the US FDA QSR and QMSR Requirements",
  "Understanding the US FDA QMSR Requirements",
  "Introduction to Medical Device Manufacturing",
  "Eight Disciplines of Problem Solving (8D)",
  "The New 7 QC Tools",
  "FMEA for the Medical Device Industry",
  "Principles of Software Validation",
  "The Basic 7 QC Tools",
  "Root Cause Analysis",
  "Principles of Error Proofing",
]

const CONSULTANCY_ITEMS = [
  "Quality Management System development & improvement",
  "Internal Audit support",
  "Management System & Regulatory Compliance Gap Assessment",
  "Corrective Action support",
  "Technical activities support such as development of risk management, and process validation activities",
]

const CORE_VALUES = [
  {
    num: "01",
    title: "Simplifying complex processes while maintaining high quality",
    body: "We are committed to simplifying complex processes into clear, actionable solutions for our clients, ensuring ease of implementation while maintaining the highest standards of quality.",
  },
  {
    num: "02",
    title: "Empowering knowledge to drive long-term success",
    body: "We are dedicated to delivering a personalized, engaging, and flexible learning experience that optimizes knowledge retention and effectiveness through continuous feedback and the promotion of practical application for sustained success.",
  },
  {
    num: "03",
    title: "Focused on excellence, providing the highest quality work",
    body: "We are committed to excellence in every project, consistently delivering top-quality work to provide our clients with exceptional value.",
  },
  {
    num: "04",
    title: "Fostering partnerships to drive greater success",
    body: "We view our relationships with clients and industry partners as true collaborations, working together towards shared goals to achieve greater success.",
  },
]

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinkClass =
    "text-sm font-medium text-slate-600 hover:text-[#0b1d3a] transition-colors"

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-shadow ${
          navScrolled
            ? "border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-white/20 bg-white/85 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-6 lg:px-10">
          <a className="flex items-center gap-3" href="#hero" onClick={() => setNavOpen(false)}>
            <img src="/cogence-logo.webp" alt="Cogence Consulting logo" className="h-8 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#about" className={navLinkClass}>
              About
            </a>
            <a href="#values" className={navLinkClass}>
              Values
            </a>
            <a href="#services" className={navLinkClass}>
              Services
            </a>
            <a href="#contact" className={navLinkClass}>
              Contact
            </a>
            <Button size="sm" className="h-9" onClick={() => scrollToId("contact")}>
              Get in Touch
            </Button>
          </nav>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavOpen((o) => !o)}
          >
            {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {navOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-3">
              <a href="#about" className={navLinkClass} onClick={() => setNavOpen(false)}>
                About
              </a>
              <a href="#values" className={navLinkClass} onClick={() => setNavOpen(false)}>
                Values
              </a>
              <a href="#services" className={navLinkClass} onClick={() => setNavOpen(false)}>
                Services
              </a>
              <a href="#contact" className={navLinkClass} onClick={() => setNavOpen(false)}>
                Contact
              </a>
              <Button className="w-full" onClick={() => { setNavOpen(false); scrollToId("contact") }}>
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="https://picsum.photos/id/315/1800/1200"
          alt="Professional consulting team in a collaborative work session"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d3a]/90 via-[#0b1d3a]/72 to-[#0b1d3a]/45" />
        <div className="float-orb absolute -top-20 left-8 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="float-orb absolute bottom-10 right-10 h-80 w-80 rounded-full bg-sky-200/15 blur-3xl [animation-delay:1.5s]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-6 pt-24 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <div className="fade-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-2xl border border-white/35 bg-white/95 px-3 py-3 shadow-xl">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0b1d3a] text-sm font-bold text-white">
                ✓
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-[#0b1d3a]">HRDCorp Approved Training Provider</p>
                <p className="text-xs text-slate-500">
                  Certified partner for claimable, industry-focused programs
                </p>
              </div>
            </div>
            <h1 className="font-['DM_Serif_Display',serif] text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Simplify to <em className="not-italic text-[#69a9ff]">Amplify,</em>
              <br />
              Simplify without Compromise
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-blue-50/90 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="h-12 px-6 text-base"
                onClick={() => scrollToId("services")}
              >
                Explore Services ↓
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="h-12 border-white/50 bg-white/15 px-6 text-base text-white hover:bg-white/25"
                onClick={() => scrollToId("contact")}
              >
                Contact Us
              </Button>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { n: "17+", l: "Training modules" },
                { n: "5", l: "Consultancy pillars" },
                { n: "2025", l: "Founded in Penang" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm"
                >
                  <p className="font-['DM_Serif_Display',serif] text-2xl text-white">{s.n}</p>
                  <p className="text-xs text-blue-100/80">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up relative flex flex-col justify-end gap-4 [animation-delay:0.15s]">
            <div className="ml-auto w-fit rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-semibold text-[#0b1d3a] shadow-md">
              ISO · MDR · QMS
            </div>
            <Card className="border-white/20 bg-[#0b1d3a]/75 text-white backdrop-blur-sm">
              <CardContent className="space-y-2 p-5">
                <p className="text-sm font-medium leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                </p>
                <p className="text-xs text-white/50">Founded 2025 · Penang, Malaysia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2a7ae4]">About Us</p>
          <h2 className="mt-3 max-w-3xl font-['DM_Serif_Display',serif] text-3xl leading-tight text-[#0b1d3a] sm:text-4xl">
            Clarity in compliance.
            <br />
            Confidence in quality.
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-5 text-slate-600">
              <p>
                <strong className="font-semibold text-[#0b1d3a]">Cogence Consulting</strong> is a training
                and consultancy firm founded in 2025, dedicated to helping organizations build robust,
                practical, and sustainable quality and regulatory systems.
              </p>
              <p>
                We specialize in quality management systems, regulatory compliance, and risk-based approaches
                for regulated industries, with a strong focus on{" "}
                <strong className="font-semibold text-[#0b1d3a]">medical devices</strong> as well as the
                others. Our services are designed not just to meet standards and regulations, but to make
                them work effectively within real-world operations.
              </p>
              <p>
                At Cogence Consulting, we believe that compliance should be clear, practical, and
                value-adding. We bridge the gap between regulatory requirements and day-to-day implementation
                by translating complex standards into actionable guidance, hands-on training, and
                fit-for-purpose solutions.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Founded 2025", "HRDCorp Approved", "Penang, Malaysia"].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#e8f0fa] px-4 py-2 text-sm font-medium text-[#0b1d3a]"
                  >
                    <Check className="h-3.5 w-3.5 text-[#2a7ae4]" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://picsum.photos/id/431/800/500"
                  alt="Professionals in a training workshop session"
                  className="h-[260px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1d3a]/75 to-transparent px-6 py-5">
                  <p className="text-sm font-medium text-white/90">Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6">
                <img
                  src="/cogence-logo.webp"
                  alt="Cogence Consulting brand logo"
                  className="mx-auto max-h-24 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <Card className="border-[#e8f0fa] bg-[#e8f0fa]/60">
                  <CardContent className="p-6">
                    <h3 className="font-['DM_Serif_Display',serif] text-xl text-[#0b1d3a]">Vision</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Clarity in compliance. Confidence in quality.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-[#e8f0fa] bg-[#e8f0fa]/60">
                  <CardContent className="p-6">
                    <h3 className="font-['DM_Serif_Display',serif] text-xl text-[#0b1d3a]">Mission</h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Our mission is to provide practical training and consultancy that translates complex
                      standards and regulations into effective, real-world solutions for our clients.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="relative overflow-hidden bg-[#0b1d3a] px-6 py-20 text-white lg:px-10">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full max-w-md opacity-20 lg:w-2/5">
          <img
            src="https://picsum.photos/id/1048/800/1000"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d3a] via-[#0b1d3a]/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4a96f0]">Core Values</p>
          <h2 className="mt-3 max-w-2xl font-['DM_Serif_Display',serif] text-3xl sm:text-4xl">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mt-4 max-w-xl text-sm text-white/60 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {CORE_VALUES.map((v) => (
              <Card
                key={v.num}
                className="border-white/10 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
              >
                <CardContent className="p-8">
                  <p className="font-['DM_Serif_Display',serif] text-3xl text-[#4a96f0]/70">{v.num}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{v.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#f7f8fa] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2a7ae4]">Our Services</p>
          <h2 className="mt-3 max-w-3xl font-['DM_Serif_Display',serif] text-3xl text-[#0b1d3a] sm:text-4xl">
            Lorem ipsum dolor sit amet
            <br />
            consectetur adipiscing
          </h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>

          <div className="relative mt-10 overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/id/1060/1200/600"
              alt="Quality controlled manufacturing environment"
              className="h-[220px] w-full object-cover sm:h-[300px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b1d3a]/80 via-[#0b1d3a]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 z-[1] text-white">
              <h3 className="font-['DM_Serif_Display',serif] text-2xl sm:text-3xl">Lorem ipsum dolor</h3>
              <p className="mt-1 text-sm text-white/70">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Card className="border-slate-200/80 bg-white">
              <CardContent className="p-8 sm:p-10">
                <h3 className="font-['DM_Serif_Display',serif] text-2xl text-[#0b1d3a]">Training Programs</h3>
                <p className="mt-2 text-sm text-slate-400">Lorem ipsum dolor sit amet</p>
                <ul className="mt-6 space-y-0 divide-y divide-slate-100 border-t border-slate-100">
                  {TRAINING_PROGRAMS.map((item) => (
                    <li key={item} className="flex gap-3 py-3 text-sm leading-relaxed text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2a7ae4]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs italic text-slate-400">
                  The list of training programs above are non-exhaustive. All these training programs are
                  HRDCorp claimable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200/80 bg-white">
              <CardContent className="p-8 sm:p-10">
                <h3 className="font-['DM_Serif_Display',serif] text-2xl text-[#0b1d3a]">
                  Consultancy Services
                </h3>
                <p className="mt-2 text-sm text-slate-400">Lorem ipsum dolor sit amet</p>
                <ul className="mt-6 space-y-0 divide-y divide-slate-100 border-t border-slate-100">
                  {CONSULTANCY_ITEMS.map((item) => (
                    <li key={item} className="flex gap-3 py-3 text-sm leading-relaxed text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2a7ae4]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs italic text-slate-400">
                  The list of consultancy programs above are non-exhaustive. At Cogence Consulting, we tailor
                  our services to meet our clients&apos; needs.
                </p>

                <div className="mt-10 rounded-2xl bg-[#e8f0fa] p-7">
                  <h3 className="font-['DM_Serif_Display',serif] text-lg text-[#0b1d3a]">Why Cogence?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    <strong className="font-semibold text-[#0b1d3a]">Cogent</strong> — (of an argument or
                    case) clear, logical, and convincing. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="group relative h-44 overflow-hidden rounded-xl">
                    <img
                      src="https://picsum.photos/id/20/500/400"
                      alt="Compliance documentation review"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1d3a]/80 to-transparent px-4 py-3 text-sm font-medium text-white">
                      Lorem ipsum
                    </div>
                  </div>
                  <div className="group relative h-44 overflow-hidden rounded-xl">
                    <img
                      src="https://picsum.photos/id/180/500/400"
                      alt="Team discussion during an audit session"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1d3a]/80 to-transparent px-4 py-3 text-sm font-medium text-white">
                      Lorem ipsum
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24 text-center text-white lg:px-10 lg:py-32">
        <img
          src="https://picsum.photos/id/1015/1400/600"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1d3a]/92 to-[#1e3f6e]/88" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h2 className="font-['DM_Serif_Display',serif] text-3xl sm:text-4xl">Lorem ipsum dolor sit amet?</h2>
          <p className="mt-4 text-base text-white/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
          </p>
          <Button
            size="lg"
            className="mt-8 h-12 bg-white px-8 text-base text-[#0b1d3a] hover:bg-[#e8f0fa]"
            onClick={() => scrollToId("contact")}
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2a7ae4]">Contact Us</p>
          <h2 className="mt-3 font-['DM_Serif_Display',serif] text-3xl text-[#0b1d3a] sm:text-4xl">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="border-slate-100 bg-[#f7f8fa] text-center transition-transform hover:-translate-y-1">
              <CardContent className="flex flex-col items-center p-9">
                <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#e8f0fa] text-[#2a7ae4]">
                  <Phone className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold text-[#0b1d3a]">Phone</h3>
                <p className="mt-2 text-sm text-slate-600">
                  <a href="tel:+60112627363" className="font-medium text-[#2a7ae4] hover:underline">
                    +6011 - 2627 3638
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-100 bg-[#f7f8fa] text-center transition-transform hover:-translate-y-1">
              <CardContent className="flex flex-col items-center p-9">
                <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#e8f0fa] text-[#2a7ae4]">
                  <Mail className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold text-[#0b1d3a]">Email</h3>
                <p className="mt-2 text-sm text-slate-600">
                  <a
                    href="mailto:enquiry@cogenceconsulting.com"
                    className="font-medium text-[#2a7ae4] hover:underline"
                  >
                    enquiry@cogenceconsulting.com
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card className="border-slate-100 bg-[#f7f8fa] text-center transition-transform hover:-translate-y-1 md:col-span-1">
              <CardContent className="flex flex-col items-center p-9">
                <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#e8f0fa] text-[#2a7ae4]">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold text-[#0b1d3a]">Address</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Settlements Workspace, VO-043,
                  <br />
                  170-08, Livingston Tower,
                  <br />
                  Argyll Road, 10050 George Town,
                  <br />
                  Penang, Malaysia
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 bg-[#0b1d3a] px-6 py-10 text-center sm:flex-row sm:text-left lg:px-10">
        <p className="text-sm text-white/40">© 2025 Cogence Consulting Sdn. Bhd. All rights reserved.</p>
        <p className="font-['DM_Serif_Display',serif] text-sm italic text-white/25">
          &ldquo;Simplify to Amplify, Simplify without Compromise&rdquo;
        </p>
      </footer>
    </div>
  )
}
