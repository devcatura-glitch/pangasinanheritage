import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import InfoSection from "../components/molecules/infosection";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header activePage="about" />
      
      <main className="grow max-w-5xl mx-auto px-4 py-16 w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About the Pangasinan Heritage Showcase
        </h1>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
            <Image src="/manaoagchurch.jpg" alt="Manaoag Church" fill className="object-cover" />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
            <Image src="/umbrellarocks.jpg" alt="Umbrella Rocks" fill className="object-cover" />
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
            <Image src="/tondolbeach.jpg" alt="Tondol Beach" fill className="object-cover" />
          </div>
        </div>

        {/* Text Sections using our new Molecule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <InfoSection title="Our Mission">
            <p>
              To promote and preserve the rich cultural heritage and natural wonders of Pangasinan by providing a fast, accessible, and highly informative digital platform. We aim to empower local communities through sustainable tourism while ensuring every traveler has the information they need, even on limited mobile data.
            </p>
          </InfoSection>

          <InfoSection title="Our Vision">
            <p>
              To establish Pangasinan as a premier, globally recognized heritage and eco-tourism destination. We envision a future where the provincial iconic sites—from the Hundred Islands to the Bolinao Lighthouse—are celebrated and protected for generations to come.
            </p>
          </InfoSection>

          <InfoSection title="Our Goals">
            <ul className="list-disc pl-5 space-y-2">
              <li>Showcase the top heritage and tourist destinations.</li>
              <li>Provide a seamless, mobile-first user experience.</li>
              <li>Educate visitors on the historical significance of each site.</li>
              <li>Support the local tourism economy in Pangasinan.</li>
            </ul>
          </InfoSection>

          <InfoSection title="Why Choose Our Showcase?">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Lightning Fast:</strong> Optimized for 3G/4G mobile networks.</li>
              <li><strong>Accessible:</strong> Designed to follow WCAG 2.1 AA principles for inclusivity.</li>
              <li><strong>Accurate:</strong> Curated directly in partnership with the Provincial Tourism Office.</li>
              <li><strong>Free:</strong> A public service for all tourists and locals.</li>
            </ul>
          </InfoSection>

        </div>

        {/* Rules and Regulations */}
        <div className="mt-8">
          <InfoSection title="Tourism Guidelines & Regulations">
            <p>To ensure the safety, preservation, and enjoyment of our sites for everyone, we ask all visitors to abide by the following rules:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Leave No Trace:</strong> Always dispose of your trash properly. Do not leave any waste behind at beaches or islands.</li>
              <li><strong>Protect the Environment:</strong> Do not touch, break, or remove coral reefs, rocks, or local flora.</li>
              <li><strong>Respect Local Culture:</strong> Dress appropriately when visiting churches and historical sites.</li>
              <li><strong>Follow Local Guidelines:</strong> Always listen to tour guides and local government officials regarding swimming boundaries and safety warnings.</li>
            </ul>
          </InfoSection>
        </div>

      </main>

      <Footer />
    </div>
  );
}