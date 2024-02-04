import RestaurantHero from '@/components/Restaurant/RestaurantHero';
import Header from '@/layout/Header';

export default function restaurant() {
  return (
    <>
      <RestaurantHero />

      <article className='container mx-auto px-4 font-main_font'>
        <p>
          På Gjerrild Vandrerhjem er vi utroligt glade for mad! Hvad end du har af ønsker, så kan vi kreere det. Vi går op i den gode smag og de gode råvarer og tager ofte verden rundt på vores
          buffeter. Vi går op i at så meget som muligt er hjemmelavet og er glade for hjemmebag og at sylte.
        </p>
        <p>
          Vi bruger mange grøntsager og krydderier og du vil derfor opleve en buffet med rigtig mange forskellige og velsmagende retter. Der er altid gode salater på buffeten og du vil helt sikkert
          blive præsenteret for noget, du ikke har prøvet før.
        </p>
        <p>
          Vi kører i højsæsonen buffetkoncept, hvor buffetbordet bugner af kolde og varme retter. Det er dog altid muligt at bestille bord til 6+ personer, også til en enkelt ret eller kaffe/kage.
          Ring til os på 40224199, hvis du vil høre mere. Vi laver morgenmad, brunch, frokost, aftensmad, kage/konfekt og snacks til alle lejligheder.
        </p>
        <p>Vi tager altid gerne hensyn til allergier.</p>
      </article>
    </>
  );
}
