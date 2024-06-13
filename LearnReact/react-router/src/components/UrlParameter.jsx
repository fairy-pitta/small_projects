import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min"


export const UrlParameter = () => {
    const { id } = useParams();
    const { search } = useLocation();

    const query = new URLSearchParams(search);

    return (
        <div>
            <h1>Urlparameter</h1>
            <p>parameter is {id}</p>
            <p>Query is {query.get("name")}.</p>
        </div>
    )
}