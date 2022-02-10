import styled from "styled-components";
import { Rings } from "react-loader-spinner";

export default function Loader() {
    return (
        <Container>
            <Rings color="#005103" width="50vw" height="50vh"/>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;