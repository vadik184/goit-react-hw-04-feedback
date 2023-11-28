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
              onClick={onLeavFeedback}
              key={option}
              name={option}
            >
              {option}
            </StyledFeedbackButton>
          );
        })}
      </StyledFeedbackContainer>
    </>
  );
};
