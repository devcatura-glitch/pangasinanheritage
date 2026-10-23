import Header from "../components/organisms/header";
import Footer from "../components/organisms/footer";
import HeritageCard from "../components/molecules/heritagecard";

export default function Destinations() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header activePage="destinations" />
      <main className="grow max-w-6xl mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Explore Our Heritage Sites</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HeritageCard imageSrc="/hundredislands.jpg" title="Hundred Islands" location="Alaminos City" description="A National Park scattered with 124 islands at low tide." />
          <HeritageCard imageSrc="/lighthouse.jpg" title="Bolinao Lighthouse" location="Bolinao" description="One of the tallest lighthouses in the Philippines." />
          <HeritageCard imageSrc="/patarbeach.jpg" title="Patar Beach" location="Bolinao" description="Famous for its golden sand and breathtaking sunset views." />
          <HeritageCard imageSrc="/enchantedcave.jpg" title="Enchanted Cave" location="Bolinao" description="A natural cave with a crystal-clear underground pool." />
          <HeritageCard imageSrc="/bolinaofalls.jpg" title="Bolinao Falls" location="Bolinao" description="A refreshing natural waterfall perfect for a cool dip." />
          <HeritageCard imageSrc="/manaoagchurch.jpg" title="Manaoag Church" location="Manaoag" description="A major pilgrimage site and home of the Our Lady of Manaoag." />
          <HeritageCard imageSrc="/tondolbeach.jpg" title="Tondol Beach" location="Anda" description="Known for its shallow, crystal-clear waters and fine white sand." />
          <HeritageCard imageSrc="/tondaliganbeach.jpg" title="Tondaligan Beach" location="Dagupan City" description="A popular urban beach park perfect for family picnics." />
          <HeritageCard imageSrc="/umbrellarocks.jpg" title="Umbrella Rocks" location="Agno" description="Unique mushroom-shaped rock formations along the coast." />
          <HeritageCard imageSrc="/cabongaoanbeach.jpg" title="Cabongaoan Beach" location="Burgos" description="A natural tidal pool carved into the rocks, offering a unique swim." />
        </div>
      </main>
      <Footer />
    </div>
  );
}