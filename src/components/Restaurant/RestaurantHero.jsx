import Header from '@/layout/Header';

export default function RestaurantHero() {
  return (
    <>
      <div className='hero relative grid auto-rows-max' /* style={{ backgroundImage: 'url(../../assets/images/Restaurant/restaurantHERO.png)' }} */>
        <div className='col-start-1 col-end-3 place-self-start text-offWhite w-full'>
          <Header />
        </div>
        <img className='row-start-1 row-end-3 row-span-3 col-start-1 col-end-3 col-span-2 w-full place-self-start' src='../../assets/images/Restaurant/restaurantHERO.png' alt='' />
        <div className='row-start-2 row-end-4 place-self-start w-full flex'>
          <img className='size-7/12 object-cover' src='../../assets/images/Restaurant/restaurantHER_asset.png' alt='' />
          <div className='w-full self-end container'>
            <h1 className='text-center  text-7xl font-main_font'>Vores Restaurant</h1>
          </div>
        </div>
      </div>
    </>
  );
}
