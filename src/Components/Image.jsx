import { useState } from "react"
import emptySvg from '../assets/empty.svg';
export default function Image({ src, alt, className }) {


    const [imgSrc, setImageSrc] = useState(src);


    return (
        <>
            <img src={imgSrc} 
            alt={alt} 
            className={className}
            onError={() => setImageSrc(emptySvg)}
            />

        </>
    )
}
