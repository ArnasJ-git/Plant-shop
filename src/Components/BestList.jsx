import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler';
import BestCard from './BestCard';
import './ComponentsStyle/BestList.scss';

export default function BestList({ }) {



    const { data: bestCards, loading, error } = useFetch('https://gist.githubusercontent.com/ArnasJ-git/5db3a3a21442e5e3bcf3b645d0c9eb74/raw/0ecd165b339bb930f638c6d269afe388b0b531e4/Plants.json',
        'bestSelling',
        'fileName'
    );

    console.log(bestCards);

    return (
        <div className='bestList'>
            <DataHandler>
            {bestCards.map(card => (
                <BestCard key={card.id} imageSrc={card.imageSrc} title={card.title} />
            ))};

            </DataHandler>

        </div>

    )
}
