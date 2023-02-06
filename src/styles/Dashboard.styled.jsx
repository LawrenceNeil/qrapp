import styled from "styled-components";

export const DashSection = styled.section`
  background: #023047;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 96vw;
    height: 96vh;
    background-color: #f0f1f0;
    border-radius: 20px;
    padding: 10px 5px;
  }

  .content {
    border-radius: 0 20px 20px 0;
    padding: 8px;
    height: 100%;
    width: calc(100% - 200px);
    background: rgba(73, 71, 71, 0.5);
  }

  .sidebar {
    border-radius: 20px 0 0 20px;
    padding: 8px;
    height: 100%;
    width: 200px;
    background-color: #023047;
    color: #f0f1f0;
    overflow: hidden;
  }
`;
