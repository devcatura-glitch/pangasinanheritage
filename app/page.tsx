import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";
import Button from "./components/atoms/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header activePage="home" />
      <main className="grow flex flex-col items-center justify-center text-center px-4 py-20 bg-white">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Discover the Beauty of <span className="text-blue-700">Pangasinan</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Explore the majestic Hundred Islands, the historic Bolinao Lighthouse, 
          and the refreshing waters of Balungao Hot Spring.
        </p>
        <Button href="/destinations">Explore Destinations</Button>
      </main>
      <Footer />
    </div>
  );
}