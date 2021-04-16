import styled from "styled-components";
import Link from "./Link";

const Infobar: React.FC = () => {
    return (
        <Container>
            <Card><i className="ri-notification-line"></i></Card>
            <Card><UserPicture src={`https://picsum.photos/200/200`} /></Card>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 15px;
`;

const Card = styled(Link)`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.layout.lightest};
    margin: 0 5px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text.lightest};
    font-size: 18px;

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
`;

const UserPicture = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export default Infobar;