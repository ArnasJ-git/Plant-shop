import './ComponentsStyle/TestimonialsCard.scss';
import Image from './Image';


export default function TestimonialsCard({imageSrc, name, text, rating}) {


    const renderStars = (rating) => {
        const roundedRating = Math.round(rating * 2) / 2;
         const stars = [];

         for(let i = 1; i <= 5; i++) {
            if(roundedRating >= i) {
                stars.push(<span key={i} className='star full'>★</span>)
            }else if(roundedRating >= i - 0.5) {
                stars.push(<span key={i} className='star half'>★</span>)
            }else {
                stars.push(<span key={i} className='star'>★</span>)
            }

         }
         return stars;
    }

    return (
        <div className='test-card'>
            <Image src={imageSrc} alt={name} className='test-img' />
            <div className='rating'>{renderStars(rating)}</div>
            <div className='client-text'>'{text}'</div>
            <div className='client-name'>{name}</div>
        </div>
    )
}
