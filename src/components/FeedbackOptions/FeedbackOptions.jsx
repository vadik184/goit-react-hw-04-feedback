import React from 'react';
import {
  StyledFeedbackButton,
  StyledFeedbackContainer,
} from 'components/FeedbackOptions/FeedbackOptionsStyle';

export const FeedbackOptions = ({ options, onLeavFeedback }) => {
  return (
    <>
      <StyledFeedbackContainer>
        {options.map(option => {
          return (
            <StyledFeedbackButton
              type="button"
              key={option}
              name={option}
              onClick={() => onLeavFeedback(option)}
            >
              {option}
            </StyledFeedbackButton>
          );
        })}
      </StyledFeedbackContainer>
    </>
  );
};
