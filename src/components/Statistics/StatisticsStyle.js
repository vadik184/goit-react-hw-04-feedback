import styled from 'styled-components';

export const StyledList = styled('ul')`
  display: flex;
  width: 100%;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid #d3d9de;

  border-bottom: 1px solid #d3d9de;
`;
export const StyledListTotal = styled(StyledList)`
  border-top: none;

  border-bottom: none;
`;
export const StyledListItem = styled('li')`
  display: flex;
  padding-left: 20px;
  align-items: center;
  justify-content: space-between;
  &:first-child {
    padding-top: 10px;
  }
  &:nth-child(3) {
    padding-bottom: 10px;
  }
`;
export const StyledListItemTotal = styled('li')`
  display: flex;
  padding-left: 20px;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.02em;
  color: #122236;
`;
export const StyledListItemPersetn = styled(StyledListItemTotal)`
  font-weight: 400;
  font-size: 14px;
`;
