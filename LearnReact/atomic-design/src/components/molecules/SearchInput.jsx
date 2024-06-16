import { Input } from "../atoms/Input/Input"
import { PrimaryButton } from "../atoms/buttons/PrimaryButton"

import styled from "styled-components";


const SButtonWrapper = styled.div`
padding-left: 8px
`;

const SContainer = styled.div`
display: flex;
align-items: center;
`;

export const SearchInput = () => {
    
    return (
        <SContainer>
            <Input placeholder="input conditions"></Input>
            <SButtonWrapper>
            <PrimaryButton>
                Search
            </PrimaryButton>
            </SButtonWrapper>

        </SContainer>
    )
}