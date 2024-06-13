import { Link } from "react-router-dom/cjs/react-router-dom.min"


export const Page404 = () => {
    return (
        <div>
            <h1>Cannot find the page</h1>
            <Link to = "/">Top</Link>
        </div>
    );
};

