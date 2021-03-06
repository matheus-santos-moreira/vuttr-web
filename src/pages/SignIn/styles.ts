import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 24px;
    color: #170c3a;
  }

  form {
    width: 100%;
    max-width: 370px;
    a {
      display: flex;
      align-items: center;
      margin-top: 8px;
      color: #41414d;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;

      span {
        font-size: 16px;
      }

      &:hover {
        color: ${shade(0.2, '#41414d')};
      }
    }
  }
`;
