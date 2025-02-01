
import './MarketPlace.css';
import MarketPlaceRankingHeader from '../../components/MarketPlaceRankingHeader/MarketPlaceRankingHeader';
import ArtistPageTaps from '../../components/ArtistPageTaps/ArtistPageTaps'
export default function MarketPlace() {


  return (
    <>
      <MarketPlaceRankingHeader />
      <ArtistPageTaps tab1={'hn-tab1Market'} tab2={'hn-tab2Market'}  number1={'hn-302Market'} number2={'hn-67Market'} number3={'hn-4Market'} title1={'NFT'} title2={'Collection'}/>
    </>
  );
}