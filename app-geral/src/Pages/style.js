import styled from 'styled-components'

export const Body = styled.div`
  font-size: 18px;

   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 50px;
   background-image: url("https://reactjs.org/logo-og.png");
   background-repeat: no-repeat;
   background-size: cover;
   background-position: 50%;
`;

export const Container = styled.div`
   padding: 50px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 5px;
   background: rgba(0,0,0, 0.8);
   border-radius: 5px;
`;

export const Header = styled.header`
   color:white;
   text-align: center;
   font-size: 30px;

`;