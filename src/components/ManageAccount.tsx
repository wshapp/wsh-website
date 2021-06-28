import Head from "./Head";
import styled from "styled-components";
import { Button } from "./Layout/Buttons";

const ManageAccount: React.FC = () => (
  <Container>
    <Head title="Settings" subtitle="Account" />
    <HeaderTitle>Account Informations</HeaderTitle>
    <SectionTitle>Basic Information</SectionTitle>
    <Section>
      <FieldContainer>
        <FieldLabel>Name</FieldLabel>
        <Field type="text" id="name" placeholder="Name" />
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>Username</FieldLabel>
        <Field type="text" id="username" placeholder="Username" />
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>Email</FieldLabel>
        <Field type="text" id="email" placeholder="Email, Tel or Username" />
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>Birthday</FieldLabel>
        <Field type="text" id="birthday" placeholder="March 25, 1994" />
      </FieldContainer>
    </Section>
    <SaveButton>Save Changes</SaveButton>
  </Container>
);
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 30px;
  flex: 1;
`;

const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 30px;
`;

const FieldContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  width: calc(50% - 20px);
`;

const FieldLabel = styled.label`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
`;

const Field = styled.input`
  margin-top: 5px;
  border: none;
  outline: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.layout.lightest};
  padding: 10px 0;
  font-weight: $fontWeightBold;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.lightest};
  transition: all 0.2s;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.layout.lighter};
    color: ${({ theme }) => theme.colors.text.lightest};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const SaveButton = styled(Button)`
  align-self: flex-start;
  margin-top: 30px;
`;

export default ManageAccount;
