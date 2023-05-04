import HeroSlider from './HeroSlider';

async function getOffers() {
  const offers = await fetch(`https://swanky-api.onrender.com/offers`);
  return offers.json();
}
  
export default async function Hero() {

  const offers = await getOffers();

  return (
    <div className="hero-container w-screen mb-32">
      <HeroSlider offers={offers}/>
    </div>
  );
};

