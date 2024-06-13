import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const Page1 = () => {
    const arr = [...Array(10).keys()];
    const history = useHistory();

    const onClickDetailA = () => history.push("/page1/detailA")
    
    return (
        <div>
            <h1>Page1</h1>
            <Link to = {{pathname: "/page1/detailA", state: arr}}>DetailA</Link>
            <br></br>
            <Link to = "/page1/detailB">DetailB</Link>
            <br></br>
            <button onClick = {onClickDetailA}>Detail A</button>
        </div>
    )
}