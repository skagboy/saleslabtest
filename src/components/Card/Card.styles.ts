import { css } from "styled-components";

export const cardWrapper = css`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 17px;
    border-radius: 7px;
    background: #FFFFFF;
    box-shadow: 0 0 2px #EEF4FE, 0 1px 2px #D0DAEB;
`;

export const title = css<{ background: string }>`
  color: ${(props) => props.background};
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;

export const value = css`
    font-weight: 700;
    font-size: 18px;
    color: #373737;
`;

export const info = css`
    display: flex;
    flex-direction: column;
`;

export const icon = css<{ background: string }>`
  width: 58px;
  height: 58px;
  border-radius: 11px;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 17px;
  
  & > svg {
    fill: none;
  }
`;

