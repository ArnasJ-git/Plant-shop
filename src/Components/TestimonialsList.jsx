import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler';
import './ComponentsStyle/TestimonialsList.scss';
import TestimonialsCard from './TestimonialsCard';


export default function TestimonialsList() {
    const { data: testimonials, loading, error } = useFetch('https://gist.githubusercontent.com/ArnasJ-git/d82162b93e59e2dea40d26bc1d55deb3/raw/9c3a58f6f43d720c389e90704547d6a4a9f5665a/clients.json',
        'clients',
        'img'
    );

    console.log(testimonials);
    return (
        <div className='test-list'>
            <DataHandler loading={loading} error={error}>
    
            {
            testimonials.map(card =>(
                <TestimonialsCard 
                key = {card.id}
                imageSrc = {card.imageSrc}
                name = {card.name}
                text = {card.text}
                rating = {card.rating}
                />
            ))    
            }
            </DataHandler>
        </div>

    )
}
