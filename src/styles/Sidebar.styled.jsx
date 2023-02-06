import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: #023047;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  .logo {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;

    .logo-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: solid #fff;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 70%;
        height: 70%;
        fill: #fff;
      }
    }

    .logo-text {
      color: #fff;
      font-size: 1.2rem;
      line-height: 1.5rem;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .menu {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    width: 100%;

    .menu-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 2.5rem;
      background: #219ebc;
      color: #fff;
      margin-bottom: 8px;
      padding: 0 20px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #fb8500;
      }

      .menu-item-icon {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 100%;
          height: 100%;
          fill: #fff;
        }
      }

      .menu-item-text {
        font-size: 1rem;
        line-height: 1.5rem;

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }

    .sub-menu {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      width: 80%;
    }
  }
`;
