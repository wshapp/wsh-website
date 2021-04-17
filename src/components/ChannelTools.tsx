import styled from "styled-components";

const ChannelTools: React.FC = () => (
    <Container>
        <IconContainer>
        </IconContainer>
        <Field type="text" id="message" name="message" placeholder="Start typing..." />
    </Container>
)

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 10px;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    pointer-events: none;
`;

const Field = styled.input`
    display: flex;
    flex: 1;
    border: none;
    outline: none;
    border-radius: 0;
    border-bottom: 1px solid ${props => props.theme.colors.layout.lightest};
    padding: 10px 0;
    font-weight: $fontWeightBold;
    background: transparent;
    color: ${props => props.theme.colors.text.lightest};
    transition: all 0.2s;

    &:focus {
        border-bottom: 1px solid ${props => props.theme.colors.layout.lighter};
        color: ${props => props.theme.colors.text.lightest};
    }

    &::placeholder {
        color: ${props => props.theme.colors.text.light};
    }
`;

export default ChannelTools;