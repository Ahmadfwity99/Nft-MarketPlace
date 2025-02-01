import './RankingCardsSection.css';
import { dataRankingTopCreators } from '../../data/dataRankingTopCreators';
import ArtistPageTaps from './ArtistPageTaps'; // Ensure you import this component
import RankingCard from './RankingCard'; // Ensure you import the RankingCard component

export default function RankingCardSection() {
  const RankingData = dataRankingTopCreators; // Corrected to access the array directly

  return (
    <>
      <ArtistPageTaps 
        tab1='hn-tab1Ranking' 
        tab2='hn-tab2Ranking' 
        tab3='hn-tab3Ranking' 
        tab4='hn-tab4Ranking'  
        number1='hn-302Ranking' 
        number2='hn-67Ranking' 
        number3='hn-4Ranking' 
        title1='Today' 
        title2='This Week' 
        title3='This Month' 
        title4='All Time' 
      />

      {RankingData.map((item, index) => (
        <RankingCard 
          key={index} // Add a unique key for each item
          id={item.id} 
          img={item.img} 
          title={item.title} 
          percent={item.percent} 
          description={item.description} 
          sales={item.sales} 
        />
      ))}
    </>
  );
}