import styled from "styled-components";

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  a{
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    
    color: #FFFFFF;
  }

  img{
    margin-bottom: 30px;

    width: 147px;
    height: 100%;
  }
`;

export default Container;