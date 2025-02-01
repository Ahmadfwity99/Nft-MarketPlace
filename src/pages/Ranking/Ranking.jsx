
import ArtistPageTaps from '../../components/ArtistPageTaps/ArtistPageTaps'
import RankingHero from '../../components/RankingHero/RankingHero'
import './Ranking.css'


export default function Ranking() {
  return (
    <>
    <div className="ranking-hero">
    <RankingHero/>
    </div>
    <div className="ranking-body">
    <ArtistPageTaps tab1={'hn-tab1Ranking'} tab2={'hn-tab2Ranking'} tab3={'hn-tab3Ranking'} tab4={'hn-tab4Ranking'}  number1={'hn-302Ranking'} number2={'hn-67Ranking'} number3={'hn-4Ranking'} title1={'Today'} title2={'This Week'} title3={'This Month'} title4={'All Time'}/>
    
    </div>
    </>
  )
}
