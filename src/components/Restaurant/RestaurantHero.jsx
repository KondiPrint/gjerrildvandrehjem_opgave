import Header from '@/layout/Header';

export default function RestaurantHero() {
  return (
    <>
      <div className='hero relative grid auto-rows-max' /* style={{ backgroundImage: 'url(../../assets/images/Restaurant/restaurantHERO.png)' }} */>
        <div className='col-start-1 col-end-3 place-self-start text-offWhite w-full'>
          <Header />
        </div>
        <img className='row-start-1 row-end-3 row-span-3 col-start-1 col-end-3 col-span-2 w-full place-self-start' src='../../assets/images/Restaurant/restaurantHERO.png' alt='' />
        <div className='row-start-2 row-end-4 place-self-start w-full flex '>
          <img className='size-7/12 object-cover' src='../../assets/images/Restaurant/restaurantHER_asset.png' alt='' />
          <div className='w-full'></div>
        </div>
        <div className='row-start-3 row-end-4 place-content-center justify-center container flex h-full w-full'>
          <h1 className='text-4xl sm:text-6xl lg:text-7xl font-main_font text-right h-full w-full pb-20'>Vores Restaurant</h1>
        </div>
      </div>
    </>
  );
}
