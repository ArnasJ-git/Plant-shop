import ClipLoader from "react-spinners/ClipLoader";



export default function DataHandler({ loading, error, children, noData}) {

    if (loading) {
        return (<ClipLoader
            color='#50806b'
            margin={2}
        />)
    }
    if (error) {
        return (<>Error:{error}</>)
    }
    if(noData) {
        return(
        <div className="example">Plant not found</div>
    )
    }
    return (children)
}
