// pages/practice/[practiceId].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const practiceData = {
  "family-succession-law": {
    title: "Family & Succession Law",
    intro: "Legal expertise in divorce, child custody, inheritance, and estate planning.",
    keyPrinciples: [
      "Marriage & Divorce Laws – Grounds for divorce, annulment, and separation.",
      "Child Custody & Support – Determining parental responsibilities and financial support.",
      "Succession & Inheritance – Managing wills and estate distribution.",
    ],
    commonCases: [
      "Divorce settlements and alimony disputes.",
      "Child custody battles and visitation rights.",
      "Estate planning and will execution.",
    ],
    howWeHelp: "We provide expert legal counsel in family disputes, ensuring fair resolutions and protecting your rights.",
  },
  "criminal-law": {
    title: "Criminal Law",
    intro: "Defending individuals accused of crimes and ensuring fair legal representation.",
    keyPrinciples: [
      "Presumption of Innocence – Every accused person is innocent until proven guilty.",
      "Burden of Proof – The prosecution must prove guilt beyond a reasonable doubt.",
      "Legal Defenses – Self-defense, insanity, and duress.",
    ],
    commonCases: [
      "Theft, fraud, and white-collar crimes.",
      "Assault, homicide, and violent offenses.",
      "Drug-related charges and trafficking.",
    ],
    howWeHelp: "We provide strong defense strategies to protect your rights and ensure fair legal proceedings.",
  },
  "commercial-corporate-law": {
    title: "Commercial & Corporate Law",
    intro: "Comprehensive legal support for businesses, commercial transactions, and corporate governance.",
    keyPrinciples: [
      "Business structuring and compliance",
      "Contract drafting and review",
      "Mergers and acquisitions",
      "Corporate governance"
    ],
    commonCases: [
      "Business formation",
      "Shareholder agreements",
      "Regulatory compliance"
    ],
    howWeHelp: "Our firm assists businesses in navigating legal complexities and ensuring smooth operations."
  },
  "tax-law": {
    title: "Tax Law",
    intro: "Expert advice and representation in tax compliance, disputes, and planning.",
    keyPrinciples: [
      "Tax compliance",
      "Tax planning",
      "Tax dispute resolution"
    ],
    commonCases: [
      "Tax audits",
      "Tax appeals",
      "Corporate tax planning"
    ],
    howWeHelp: "We provide comprehensive tax law services for individuals and businesses."
  },
  "litigation": {
    title: "Litigation & Personal Injuries",
    intro: "Representation in litigation matters, including personal injury cases and public interest litigation.",
    keyPrinciples: [
      "Civil litigation",
      "Personal injury claims",
      "Public interest litigation"
    ],
    commonCases: [
      "Breach of contract",
      "Negligence",
      "Personal injury claims"
    ],
    howWeHelp: "We champion justice through strategic litigation and advocacy, including personal injury representation."
  },
  "banking-finance-law": {
    title: "Banking & Finance Law",
    intro: "Legal assistance in financial transactions, loan agreements, and investment law.",
    keyPrinciples: [
      "Financial Regulations – Ensuring banking compliance.",
      "Loan Agreements & Securities – Protecting lenders and borrowers.",
      "Investment Laws – Regulating financial markets.",
    ],
    commonCases: [
      "Loan disputes and debt recovery.",
      "Banking fraud and financial crimes.",
      "Investment regulations and compliance.",
    ],
    howWeHelp: "We assist clients in navigating financial laws and protecting their investments.",
  },
  "planning-environmental-law": {
    title: "Planning & Environmental Law",
    intro: "Legal guidance in urban development, land use, and environmental regulations.",
    keyPrinciples: [
      "Land Use Regulations – Governing zoning and development.",
      "Environmental Protection Laws – Safeguarding natural resources.",
      "Sustainable Development Policies – Promoting eco-friendly practices.",
    ],
    commonCases: [
      "Land disputes and zoning conflicts.",
      "Environmental impact assessments.",
      "Conservation and pollution control.",
    ],
    howWeHelp: "We protect environmental rights and ensure responsible land use.",
  },
  "intellectual-property-law": {
    title: "Intellectual Property Law",
    intro: "Safeguarding copyrights, trademarks, patents, and creative rights.",
    keyPrinciples: [
      "Copyright & Patents – Protecting original creative works.",
      "Trademark Protection – Ensuring brand identity security.",
      "Trade Secrets & Licensing – Regulating confidential business information.",
    ],
    commonCases: [
      "Copyright infringement and piracy.",
      "Patent disputes and licensing agreements.",
      "Trademark registration and brand protection.",
    ],
    howWeHelp: "We secure intellectual property rights and defend against infringement.",
  },
  "conveyancing": {
    title: "Conveyancing",
    intro: "Expert legal guidance in property transactions, title registration, and land transfers to ensure secure ownership.",
    keyPrinciples: [
      "Title Verification – Ensuring authenticity and legal ownership.",
      "Contract Drafting – Preparing sale agreements and transfer documents.",
      "Regulatory Compliance – Navigating land laws and property regulations.",
    ],
    commonCases: [
      "Property sale and purchase transactions.",
      "Land title disputes and ownership verification.",
      "Lease agreements and transfers of property rights.",
    ],
    howWeHelp: "We streamline real estate transactions, ensuring secure and legally sound property dealings.",
  },
};

export default function PracticePage() {
  const router = useRouter();
  const { practiceId } = router.query;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const practice = practiceData[practiceId];

  if (!practice) {
    return (
      <>
        <Header />
        <main>
          <div className="practice-detail-section p-6 max-w-4xl mx-auto">
            <h2 className="text-center text-gray-800 text-2xl font-bold mt-20 mb-10">Practice Area Not Found</h2>
            <div className="text-center mt-8">
              <Link href="/practice" legacyBehavior>
                <a className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Back to Practice Areas</a>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="practice-detail-section min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-2">
          <div className="practice-detail-container max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0d3b66] text-center drop-shadow">{practice.title}</h2>
            <p className="mb-6 text-lg text-gray-700 text-center">{practice.intro}</p>

            <h3 className="text-xl font-semibold mt-8 mb-2 text-[#b22222]">Key Legal Principles</h3>
            <ul className="list-disc list-inside mb-6 text-gray-800">
              {practice.keyPrinciples.map((principle, index) => (
                <li key={index} className="mb-2">{principle}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2 text-[#b22222]">Common Cases & Legal Issues</h3>
            <ul className="list-disc list-inside mb-6 text-gray-800">
              {practice.commonCases.map((caseItem, index) => (
                <li key={index} className="mb-2">{caseItem}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-2 text-[#b22222]">How We Can Help</h3>
            <p className="mb-8 text-gray-700">{practice.howWeHelp}</p>

            <div className="text-center">
              <Link href="/contact" legacyBehavior>
                <a className="bg-[#0d3b66] text-white px-8 py-3 rounded-full hover:bg-[#b22222] transition font-semibold shadow-md">Get Appointment</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
