import { Link } from 'react-router-dom'
import './ComponentsStyle/Title.scss'


export default function Title({text1,  text2, showLink}) {


    return (
        <>
        <div className='title-box'>
            <h2 className='title'>
                <span className='green-text'>{text1} </span>
                <span>{text2}</span>
            </h2>
            {
             showLink &&(
            <Link className="title-link" to="/products">Shop All &gt;</Link>
             )   
            }
        </div>
        </>
    )
}
