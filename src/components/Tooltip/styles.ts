import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    &::before {
      content: '';
      border-style: solid;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
