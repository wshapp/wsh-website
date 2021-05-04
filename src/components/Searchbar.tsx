import styled from "styled-components";

const Searchbar = () => (
    <Container>
        <Field placeholder="Search..." />
    </Container>
);

const Container = styled.div`
    background-color: ${props => props.theme.colors.layout.darker};
    border-radius: 10px;
    width: 100%;
`;

const Field = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    padding: 15px;
    width: 100%;
    
    &::placeholder {
        color: ${props => props.theme.colors.text.light};
    }
`;

export default Searchbar;