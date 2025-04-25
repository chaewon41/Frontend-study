import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
    const {id} = useParams();
    const getMovie = async () => {
        const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDeatil(json.data.movie)
    }
    const [detail, setDeatil] = useState([]);
    useEffect(() => {
       getMovie()
    }, [])
    console.log(detail)
    return (<div>
        <h1>Detail</h1>
        <a href={detail.url}>{detail.url}</a>
        </div>)
}

export default Detail;