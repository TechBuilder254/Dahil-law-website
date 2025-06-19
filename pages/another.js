export default function AboutUsPage() {
  return (
    <main className="font-sans text-white bg-[#0b1437]">

      {/* =========================== */}
      {/* Section 1: Hero Banner */}
      {/* =========================== */}
      <header
        className="relative w-full bg-cover bg-center h-[60vh] flex items-center justify-center px-4 text-center"
        style={{ backgroundImage: 'url(/images/law-hero.jpg)' }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Our Law Firm</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">Experienced. Trusted. Committed to Justice.</p>
        </div>
      </header>

      {/* =========================== */}
      {/* Section 2: Firm Overview / History / Mission / Vision */}
      {/* =========================== */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          [Firm introduction, mission statement, vision, and short history...]
        </p>
      </section>

      {/* =========================== */}
      {/* Section 3: Why Choose Us (Trust Factors) */}
      {/* =========================== */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto bg-[#111b44]">
        <h2 className="text-3xl font-semibold mb-10">Why Clients Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300">
          {/* Example cards; we’ll replace these with real features */}
          <div className="bg-[#0f1a3b] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
            <p>We have helped thousands of clients win justice and compensation.</p>
          </div>
          <div className="bg-[#0f1a3b] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Client-First Focus</h3>
            <p>Your case and rights are our top priority at every step.</p>
          </div>
          <div className="bg-[#0f1a3b] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Experienced Legal Team</h3>
            <p>Our attorneys bring decades of combined experience across practice areas.</p>
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* Section 4: Our Attorneys (Team Bios) */}
      {/* =========================== */}
      {/* We'll create team cards with images and bios here */}

      {/* =========================== */}
      {/* Section 5: Practice Areas Overview */}
      {/* =========================== */}
      {/* Grid or list of legal services offered, maybe with icons */}

      {/* =========================== */}
      {/* Section 6: Awards, Recognition & Media */}
      {/* =========================== */}
      {/* Logos or cards for bar associations, press, honors */}

      {/* =========================== */}
      {/* Section 7: Our Core Values & Client Promise */}
      {/* =========================== */}
      {/* List or text block highlighting your values (integrity, advocacy, etc.) */}

      {/* =========================== */}
      {/* Section 8: Success Stories / Case Results */}
      {/* =========================== */}
      {/* Highlight major wins or positive client outcomes */}

      {/* =========================== */}
      {/* Section 9: Testimonials (Social Proof) */}
      {/* =========================== */}
      {/* Slideshow or stacked quotes from happy clients */}

      {/* =========================== */}
      {/* Section 10: Community Involvement / Philanthropy */}
      {/* =========================== */}
      {/* If applicable: show your outreach efforts, charity, pro bono */}

      {/* =========================== */}
      {/* Section 11: Law Firm Timeline or Milestones */}
      {/* =========================== */}
      {/* Optional: Timeline component showing key years and events */}

      {/* =========================== */}
      {/* Section 12: Final Call to Action (CTA) */}
      {/* =========================== */}
      <section className="py-12 px-6 md:px-20 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Speak with a Trusted Attorney?</h2>
        <p className="text-gray-300 mb-6">Contact us for a free initial consultation today.</p>
        <a href="/contact" className="inline-block bg-[#5bd613] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#6be525] transition">
          Get a Free Consultation
        </a>
      </section>
    </main>
  );
}
