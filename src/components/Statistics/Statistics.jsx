import React from 'react';
import {
  StyledList,
  StyledListItem,
  StyledListItemTotal,
  StyledListItemPersetn,
  StyledListTotal,
} from 'components/Statistics/StatisticsStyle';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StyledList>
        <StyledListItem>Good: {good}</StyledListItem>
        <StyledListItem>Neutral: {neutral}</StyledListItem>
        <StyledListItem>Bad: {bad}</StyledListItem>
      </StyledList>
      <StyledListTotal>
        <StyledListItemTotal>Total: {total}</StyledListItemTotal>
        <StyledListItemPersetn>
          Positive feedback: {positivePercentage}%
        </StyledListItemPersetn>
      </StyledListTotal>
    </>
  );
};
