import styled from "styled-components";

export const LoginSection = styled.section`
  background: linear-gradient(
    90deg,
    rgba(49, 17, 79, 1) 0%,
    rgba(44, 13, 122, 1) 53%,
    rgba(49, 17, 79, 1) 100%
  );

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .wrapper {
    background-color: var(--background);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 80%;
    border-radius: 20px;
    padding: 50px;
    box-shadow: rgba(252, 214, 214, 0.4) 0px 2px 4px,
      rgba(255, 255, 255, 0.3) 0px 7px 13px -3px,
      rgba(255, 255, 255, 0.2) 0px -3px 0px inset;
  }

  .image-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;

    img {
      width: 400px;
      object-fit: cover;
      margin-top: 1rem;
      @media (max-width: 767px) {
        width: 200px;
      }
    }

    span {
      font-size: 1.5rem;
      color: var(--text-title);
      font-weight: 600;
      font-family: "Noto Sans", "Montserrat", sans-serif;
      line-height: 1.5rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      margin-top: 1rem;
    }
  }

  .form-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
    border-radius: 20px;
    padding: 1rem;
    height: 80%;
    width: 100%;
  }

  .form-section form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 400px;
    border-radius: 20px;
    padding: 1rem;
    color: black;
  }

  .form-section form .form-title {
    font-size: 1.5rem;
    color: black;
    font-weight: 600;
    font-family: "Poppins", "Montserrat", sans-serif;
    line-height: 1.5rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .form-section form .form-group {
    display: flex;
    align-items: flex-start;
    position: relative;
    width: 100%;
  }

  .form-section form .form-group input {
    width: 100%;
    height: 2rem;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    margin-bottom: 1rem;
    font-size: 1rem;

    &::placeholder {
      color: var(--input-text);
    }

    &:focus {
      outline: 0;
    }
  }

  .form-section form .form-group .icon {
    color: var(--input-text);
    font-size: 1.3rem;
    position: absolute;
    right: 10px;
    top: 0.3rem;
  }

  .form-section form .form-group button {
    width: 100%;
    height: 2rem;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    background-color: var(--blue);
  }

  .error {
    color: var(--input-text-error);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;
