import styled from "styled-components";

export const MasterContainerButtons = styled.div`
  margin-top: 20px;
  color: #c9c7c7;
  font-weight: 800;
  a {
    color: inherit;
    text-decoration: none;
  }
  .disabled {
    opacity: 0.3;
  }

  .space {
    margin-left: 60px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  width: 90px;
  height: 90px;
  text-align: center;
  background-color: #232c33;
  border-radius: 20px;
  padding: 5px;
  padding-top: 2px;
  padding-bottom: 15px;
  margin: 10px;
  p {
    margin-bottom: 4px;
  }
`;
