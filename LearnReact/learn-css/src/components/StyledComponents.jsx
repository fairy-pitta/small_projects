import styled from "styled-components";

export const StyledComponents = () => {
    return (
        <Container>
            <Title>--Styled Components--</Title>

            <Button>Press!!!</Button>
        </Container>
    );
};

const Container = styled.div`
    border: solid 2px #333;
    border-radius: 16px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Title = styled.p`
    color: blue;
`;

const Button = styled.button`
    background-color: skyblue;
    border: none;
    border-radius: 16px;
    padding: 8px;
`;
