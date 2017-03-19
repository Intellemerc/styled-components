import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const StyledPaper = styled(Paper)`
  background-color: ${props => props.theme.secondary} !important;
  height: 100px !important;
  width: 100px !important;
  margin: 20px !important;
  textAlign: center !important;
  display: inline-block !important;
  transition: all 75ms cubic-bezier(0.23, 1, 0.32, 1) 250ms !important;
`;

export default () => {
    return <div>
        <StyledPaper zDepth={1} />
        <StyledPaper zDepth={2} />
        <StyledPaper zDepth={3} />
        <StyledPaper zDepth={4} />
        <StyledPaper zDepth={5} />
    </div>
}