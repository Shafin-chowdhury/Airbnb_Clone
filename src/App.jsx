/* eslint-disable no-undef */
import Header from "./Components/Header";
import { listingsData } from "./data/Listing";
import CategoryRow from "./Components/CategoryRow";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Inspirational from "./Components/Inspiration";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-6 md:px-10 pt-[180px] md:pt-[160px] pb-20">
        {listingsData.map((section, index) => (
          <CategoryRow
            key={index}
            title={section.title}
            listings={section.listings}
          />
        ))}
      </main>
      <Inspirational />
      <Hero />
      <Footer />
      
    </div>
  );
}

export default App;
