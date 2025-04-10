import './ComponentsStyle/Button.scss'


export default function Button({className, href="#", children}) {



    return (
        <>

        <a href= {href} className={`button ${className}`}>{children}</a>
        </>
    )
}