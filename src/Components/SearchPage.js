import React from 'react';
import '../Components_css/SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stays • 26 august to 30 august • 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>

      <SearchResult
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
        location='Private room in central London'
        title='Stay at this spacious Edwardian House'
        description='1 guest • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing machine'
        star={4.73}
        price='£30 / night'
        total='£117 total'
      />

      <SearchResult
        img='https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg'
        location='Private room in central London'
        title='Independent luxury studio apartment'
        description='2 guest • 3 bedrooms • 1.5 shared bathrooms • Wifi • Kitchen '
        star={4.3}
        price='£40 / night'
        total='£157 total'
      />

      <SearchResult
        img='https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg'
        location='Private room in central London'
        title='London studio apartments'
        description='4 guest • 4 bedrooms • 2 bathrooms • Wifi • Free Parking '
        star={4.8}
        price='£45 / night'
        total='£207 total'
      />
    </div>
  );
}

export default SearchPage;
