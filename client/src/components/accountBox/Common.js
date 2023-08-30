import styled from "styled-components";
import { motion } from "framer-motion";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    padding: 0rem 2rem;
  }
`;

export const BoxContainer = styled.div`

  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin-top: 35px;
  @media (min-width: 600px) {
  }
  @media (max-width: 600px) {
    margin: 2rem !important;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: #4dc4d2;
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: #ffc442;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 80%;
  height: 42px;
  margin: 0.25rem;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.4);
  padding: 0px 10px;
  border-radius: 3px;
  border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  transition: all, 200ms ease-in-out;

  &::placeholder {
    color: #4dc4d2;
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid #ffc442;
  }
`;

export const SubmitButton = styled.button`
  width: 80%;
  padding: 11px;
  color: #175d8f;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  margin-top: 12px;
  transition: all, 240ms ease-in-out;
  background: #ffc442;
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 0%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
  @media (max-width: 600px) {
    padding: 11px;
  }
`;

export const ExploreContainer = styled.div`
  .ExploreContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    justify-content: center;
  }

  .explore__card {
    position: relative;
    background-color: var(--color-dark-blue);
    margin: 1rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    max-width: 100vw;
    min-height: 132px;
    max-height: 15vh;
    transition: 0.2s ease-in-out;
  }

  .explore__card:hover {
    box-shadow: 0 0 0.5rem var(--color-light-blue);
  }

  h1 {
    font-family: montserrat;
    font-size: 2rem;
    color: var(--color-yellow);
    text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
    text-align: center;
    margin 1rem;
  }

  .project__title {
    margin-top: 0.8rem;
    color: var(--color-yellow);
    text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
    font-size: 1.5rem;
    font-family: montserrat;
    text-decoration: none;
  }

  .project__title a {
    color: var(--color-yellow);
    text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
    font-size: 1.5rem;
    font-family: montserrat;
    text-decoration: none;
  }

  .project__title a:hover {
    text-shadow: 0.15rem 0.15rem 0.5rem var(--color-black);
  }

  .project__author {
    padding: 1rem 0 0 0.5rem;
    color: var(--color-bg);
    font-size: 1.1rem;
    font-family: montserrat;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
  margin-bottom: 4rem;
`;
export const BackDrop = styled(motion.div)`
width: 100%;
height: 250px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(60deg);
top: -0px;
left: -70px;
background:#FFC442;
background: linear-gradient( 58deg, 
    rgba(241, 196, 15, 1) 0%, ) 20%,
    rgba(243, 172, 18, 1) 100% 
    );
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeaderText = styled.h2`
  font-size: 45px;
  font-weight: 600;
  line-height: 1;
  color: #175d8f;
  z-index: 10;
  margin: 0;
  text-align: center;
`;
export const SmallText = styled.h5`
  color: #175d8f;
  font-weight: 500;
  font-size: 16px;
  z-index: 10;
  margin: 0;
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0 1.8em;
  align-items: center;
  margin: 12px;
`;
