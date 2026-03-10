import { useState, useEffect, useRef } from "react";
import { Music, Globe, Barcode, Star, ChevronRight, Menu, X, Play, CheckCircle, Headphones, DollarSign, Upload, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const heroImage = "https://images.unsplash.com/photo-1760780567530-389d8a3fba75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHJlY29yZGluZyUyMGFydGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI3NjE1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const musicImage = "https://images.unsplash.com/photo-1626618016265-26657b08e8e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMGhlYWRwaG9uZXMlMjBtdXNpYyUyMHN0cmVhbWluZ3xlbnwxfHx8fDE3NzI3NjE1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const globalImage = "https://images.unsplash.com/photo-1580665377274-dda7c0bebc22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGRpc3RyaWJ1dGlvbiUyMGRpZ2l0YWwlMjBnbG9iYWwlMjB3b3JsZHxlbnwxfHx8fDE3NzI3NjE1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const platforms = [
  { name: "Apple Music", color: "#fc3c44", icon: "🎵" },
  { name: "Spotify", color: "#1db954", icon: "🎧" },
  { name: "Amazon Music", color: "#00a8e1", icon: "🎼" },
  { name: "Google Play", color: "#4285f4", icon: "▶️" },
  { name: "Pandora", color: "#3668ff", icon: "📻" },
  { name: "Rhapsody", color: "#e6001a", icon: "🎶" },
  { name: "iHeartRadio", color: "#cc2128", icon: "❤️" },
  { name: "SoundCloud", color: "#ff5500", icon: "☁️" },
  { name: "YouTube Music", color: "#ff0000", icon: "🎬" },
  { name: "Deezer", color: "#a238ff", icon: "🎙️" },
  { name: "Tidal", color: "#00d4ff", icon: "🌊" },
  { name: "TikTok", color: "#ff0050", icon: "🎤" },
];

const features = [
  {
    icon: <Star className="w-8 h-8" />,
    title: "VIP Digital Service",
    description: "Only at eSongs Entertainment. Premium distribution tailored for independent artists.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Sell Your Music Worldwide",
    description: "Reach fans across all major digital stores and streaming platforms globally.",
  },
  {
    icon: <Barcode className="w-8 h-8" />,
    title: "UPC Barcode & ISRC Codes",
    description: "We provide all the necessary codes to register and track your music professionally.",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "FREE – No Annual Fee",
    description: "Keep more of what you earn. No hidden charges, no annual subscription costs.",
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Unlimited Releases",
    description: "Upload as many tracks and albums as you want with no restrictions.",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Streaming & Downloads",
    description: "Your catalog available in both download and streaming formats worldwide.",
  },
];

const steps = [
  {
    number: "01",
    icon: <Upload className="w-7 h-7" />,
    title: "Upload Your Music",
    description: "Sign up and upload your tracks, album art, and metadata easily through our platform.",
  },
  {
    number: "02",
    icon: <Globe className="w-7 h-7" />,
    title: "We Distribute It",
    description: "We send your music to all major streaming and download platforms worldwide.",
  },
  {
    number: "03",
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "Fans Buy & Stream",
    description: "Your music goes live and fans around the world can buy and stream your songs.",
  },
  {
    number: "04",
    icon: <DollarSign className="w-7 h-7" />,
    title: "You Get Paid",
    description: "Collect your royalties and keep more of what you earn with our competitive rates.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/50" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5c842] flex items-center justify-center shadow-lg shadow-[#d4af37]/30">
                <Music className="w-5 h-5 text-black" />
              </div>
              <span className="text-[#d4af37] tracking-widest uppercase" style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                eSongs
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-200 text-sm tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="text-gray-300 hover:text-[#d4af37] transition-colors duration-200 text-sm tracking-wide"
              >
                Español
              </button>
            </div>

            {/* Login + Mobile menu */}
            <div className="flex items-center gap-3">
              <button className="hidden md:inline-flex items-center gap-2 bg-[#d4af37] text-black px-5 py-2 rounded-full text-sm hover:bg-[#f5c842] transition-colors duration-200" style={{ fontWeight: 600 }}>
                Login
              </button>
              <button
                className="md:hidden text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0a0a0a]/98 border-t border-[#d4af37]/20 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left py-3 text-gray-300 hover:text-[#d4af37] transition-colors border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <button className="block w-full text-left py-3 text-gray-300 hover:text-[#d4af37] transition-colors border-b border-white/5">
              Español
            </button>
            <button className="mt-4 w-full bg-[#d4af37] text-black py-3 rounded-full text-sm" style={{ fontWeight: 600 }}>
              Login
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Music Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>

        {/* Animated gold particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#d4af37]/20 animate-pulse"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/15 border border-[#d4af37]/30 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-xs tracking-widest uppercase">VIP Digital Service</span>
          </div>

          <h1 className="text-white mb-4 leading-tight" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 800, lineHeight: 1.1 }}>
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f5c842]">
              eSongs
            </span>
          </h1>

          <p className="text-white/90 mb-3" style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 300 }}>
            Make more money with your music
          </p>

          <p className="text-[#d4af37] mb-2 tracking-wide uppercase" style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)", fontWeight: 600 }}>
            Only at eSongs Entertainment
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-4 mb-10">
            {["Sell Worldwide", "UPC & ISRC Codes", "100% FREE", "No Annual Fee"].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white text-sm">
                <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#services")}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#f5c842] text-black px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-xl shadow-[#d4af37]/30"
              style={{ fontWeight: 700, fontSize: "1rem" }}
            >
              Get Started Free
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo("#how-it-works")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
              style={{ fontWeight: 600, fontSize: "1rem" }}
            >
              <Play className="w-5 h-5" />
              How It Works
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-[#d4af37] to-transparent" />
        </div>
      </section>

      {/* PLATFORM STRIP */}
      <div className="bg-[#111111] border-y border-[#d4af37]/20 py-5 overflow-hidden">
        <div className="flex animate-[marquee_25s_linear_infinite] gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...platforms, ...platforms].map((p, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors shrink-0">
              <span className="text-lg">{p.icon}</span>
              <span className="text-sm tracking-wide" style={{ color: p.color, fontWeight: 600 }}>{p.name}</span>
              <span className="mx-2 text-gray-700">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES / SERVICES */}
      <section id="services" className="py-20 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#d4af37] text-xs tracking-widest uppercase">What We Offer</span>
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}>
              Everything You Need to{" "}
              <span className="text-[#d4af37]">Succeed</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              eSongs Entertainment gives independent artists the tools and reach of a major label — without the cost.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-[#111111] border border-white/5 rounded-2xl p-7 hover:border-[#d4af37]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/5"
              >
                <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-5 group-hover:bg-[#d4af37]/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-white mb-2" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#d4af37] mt-8 tracking-wide" style={{ fontWeight: 600 }}>
            ...and many more benefits!
          </p>
        </div>
      </section>

      {/* HOW DOES IT WORK */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#d4af37] text-xs tracking-widest uppercase">The Process</span>
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}>
              How Does It{" "}
              <span className="text-[#d4af37]">Work?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Getting your music on the world's biggest platforms is simple with eSongs Entertainment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-[#d4af37]/40 to-transparent z-0" style={{ width: "calc(100% - 5rem)", left: "calc(50% + 2.5rem)" }} />
                )}
                <div className="relative bg-[#111111] border border-white/5 rounded-2xl p-7 hover:border-[#d4af37]/40 transition-all duration-300 text-center">
                  <div className="text-[#d4af37]/30 absolute top-4 right-4 text-xs tracking-widest" style={{ fontWeight: 700 }}>{step.number}</div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5c842] flex items-center justify-center text-black mx-auto mb-5 shadow-lg shadow-[#d4af37]/30">
                    {step.icon}
                  </div>
                  <h3 className="text-white mb-2" style={{ fontSize: "1rem", fontWeight: 700 }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS SECTION */}
      <section className="py-20 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#d4af37] text-xs tracking-widest uppercase">Our Partners</span>
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}>
              Available on All Major{" "}
              <span className="text-[#d4af37]">Platforms</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your catalog will be available for sale in download &amp; streaming format on Apple Music, Spotify, Amazon Music, Google Play, Pandora, Rhapsody, and many more.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {platforms.map((platform, i) => (
              <div
                key={i}
                className="group bg-[#111111] border border-white/5 rounded-xl p-5 flex flex-col items-center gap-3 hover:border-[#d4af37]/30 hover:bg-[#161616] transition-all duration-300"
              >
                <span className="text-3xl">{platform.icon}</span>
                <span className="text-sm text-center text-gray-300 group-hover:text-white transition-colors" style={{ fontWeight: 600 }}>
                  {platform.name}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-[#d4af37] mt-8 tracking-wide" style={{ fontWeight: 600 }}>
            ...and more platforms added regularly!
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#d4af37] text-xs tracking-widest uppercase">FAQ</span>
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}>
              Frequently Asked{" "}
              <span className="text-[#d4af37]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is eSongs Entertainment really free?",
                a: "Yes! eSongs Entertainment offers a FREE distribution service with no annual fee. You keep more of what you earn.",
              },
              {
                q: "How long does it take for my music to go live?",
                a: "Typically, your music will be live on all platforms within 5–10 business days after submission. Some platforms may take a little longer.",
              },
              {
                q: "Do I keep my rights?",
                a: "Absolutely. eSongs Entertainment is a distributor, not a label. You retain 100% of your rights and ownership of your music.",
              },
              {
                q: "What formats do you accept?",
                a: "We accept WAV and FLAC audio files for the best quality. Cover art should be at least 3000x3000 pixels in JPG or PNG format.",
              },
              {
                q: "Will I receive UPC and ISRC codes?",
                a: "Yes! We provide UPC barcodes and ISRC codes for all your releases at no extra charge.",
              },
              {
                q: "How do I get paid?",
                a: "Royalties are collected from all platforms and paid out to you monthly through your eSongs account.",
              },
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA – ARE YOU READY? */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={globalImage}
            alt="Global Music Distribution"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/15 border border-[#d4af37]/30 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-xs tracking-widest uppercase">Join Us Today</span>
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1 }}>
            Are You Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f5c842]">
              Start?
            </span>
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of independent artists already distributing their music worldwide with eSongs Entertainment. It's free, it's fast, and it's built for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#f5c842] text-black px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-xl shadow-[#d4af37]/30" style={{ fontWeight: 700, fontSize: "1rem" }}>
              Start for Free
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
              style={{ fontWeight: 600, fontSize: "1rem" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#d4af37] text-xs tracking-widest uppercase">Get In Touch</span>
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}>
              Contact <span className="text-[#d4af37]">Us</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Have questions? We're here to help you succeed in your music career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Info */}
            <div className="space-y-6">
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-7">
                <h3 className="text-white mb-4" style={{ fontWeight: 700 }}>eSongs Entertainment</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  We're dedicated to helping independent artists reach their full potential. Our team is always ready to assist you with your music distribution needs.
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-gray-300"><span className="text-[#d4af37]">Email:</span> info@esongsentertainment.com</p>
                  <p className="text-sm text-gray-300"><span className="text-[#d4af37]">Website:</span> esongsentertainment.com</p>
                </div>
              </div>
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-7">
                <h3 className="text-white mb-3 text-sm" style={{ fontWeight: 700 }}>Español / Spanish</h3>
                <p className="text-gray-400 text-sm">
                  eSongs Entertainment también ofrece soporte en español. Contáctenos para más información sobre cómo distribuir su música a nivel mundial.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-7">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    placeholder="Artist or full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]/50 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#d4af37] to-[#f5c842] text-black py-3.5 rounded-xl hover:opacity-90 transition-opacity"
                  style={{ fontWeight: 700 }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/5 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f5c842] flex items-center justify-center">
                <Music className="w-4 h-4 text-black" />
              </div>
              <span className="text-[#d4af37] tracking-widest uppercase" style={{ fontWeight: 700, fontSize: "1rem" }}>
                eSongs Entertainment
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              {navLinks.map((link) => (
                <button key={link.label} onClick={() => scrollTo(link.href)} className="hover:text-[#d4af37] transition-colors">
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-6">
            <p className="text-center text-xs text-gray-600 mb-3">
              Your catalog will be available for sale in download &amp; streaming format on Apple Music, Spotify, Amazon Music, Google Play, Pandora, Rhapsody and many more.
            </p>
            <p className="text-center text-xs text-gray-700">
              Copyright &copy; 2026 esongsentertainment.com | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-[#111111] border rounded-xl overflow-hidden transition-all duration-300 ${open ? "border-[#d4af37]/40" : "border-white/5"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className="text-white text-sm pr-4" style={{ fontWeight: 600 }}>{question}</span>
        <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center border transition-all duration-300 ${open ? "bg-[#d4af37] border-[#d4af37] text-black" : "border-white/20 text-gray-400 group-hover:border-[#d4af37]/40 group-hover:text-[#d4af37]"}`}>
          {open ? <X className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
