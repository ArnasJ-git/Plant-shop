import ClipLoader from "react-spinners/ClipLoader";



export default function DataHandler({ loading, error, children }) {

    if (loading) {
        return (<ClipLoader
            color='#50806b'
            margin={2}
        />)
    }
    if (error) {
        return (<>Error:{error}</>)
    }
    return (children)
}
