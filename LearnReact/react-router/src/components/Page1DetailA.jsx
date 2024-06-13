import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min"

export const Page1DetailA = () => {
    const { state }= useLocation();

    const history = useHistory();
    const onClickBack = () => history.goBack();
    
    return (
        <div>
            <h1>Page1DetailA</h1>
            <p>{state}</p>
            <button onClick={onClickBack}>Back</button>
        </div>
    )
}