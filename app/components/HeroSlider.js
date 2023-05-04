

const HeroSlider = ({ offers }) => {
  
    console.log(offers);

    return (
        <ul>
            {offers.map(offer => (
                <li key={offer.id} className='text-center'>
                    <h2>{offer.headline}</h2>
                    <p>{offer.text}</p>
                </li>
            ))}
        </ul>
    );
};

export default HeroSlider;
