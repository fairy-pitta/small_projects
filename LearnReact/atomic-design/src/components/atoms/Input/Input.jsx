import styled from "styled-components";


export const SInput = styled.input`
padding: 8px 16px;
border: solid #ddd 1px;
outline: none;
border-radius: 16px;
`;


export const Input = (props) => {

    const { placeholder  = " "} = props;
    return (
        <SInput type="text" placeholder={placeholder}></SInput>
    )
}