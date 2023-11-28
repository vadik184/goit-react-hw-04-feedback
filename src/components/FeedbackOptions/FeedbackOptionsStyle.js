import styled from 'styled-components';

export const StyledFeedbackButton = styled('button')`
  width: 80px;
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;

  font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans',
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  &:hover {
    background-color: #b3d3ea;
    color: #2c5777;
  }
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }
  &:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;
export const StyledFeedbackContainer = styled('div')`
  display: flex;
  gap: 25px;
`;
