import { Link } from 'react-router-dom'
import './ComponentsStyle/Button.scss'


export default function Button({className, to="/", children}) {



    return (
        <>

        <Link to={to} className={`button ${className}`}>{children}</Link>
        </>
    )
}