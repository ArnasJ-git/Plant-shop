import Button from './Button';
import './ComponentsStyle/BestCard.scss';

export default function BestCard({ imageSrc, title }) {



    return (
        <>
            <div className='bestCard'>
                <a className='bestCardLink' href="#">
                    <img src={imageSrc} alt={title} />
                    <div className='bestOverlay'>
                        <h3 className='bestTitle'>{title}</h3>
                    </div>
                </a>
                <Button className= 'green-btn' children='Shop now'/>

            </div>

        </>
    )
}
