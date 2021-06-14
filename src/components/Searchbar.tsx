import styled from "styled-components";

const Searchbar: React.FC = () => (
  <Container>
    <Field placeholder="Search..." />
  </Container>
);

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.layout.darker};
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
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

export default Searchbar;
