import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

import changeHue from './changeHue'

const StyledPaper = styled(Paper)`
  background-color: ${props => props.theme.secondary} !important;
  height: 100px !important;
  width: 100px !important;
  margin: 20px !important;
  textAlign: center !important;
  display: inline-block !important;
  transition: all 75ms cubic-bezier(0.23, 1, 0.32, 1) 250ms !important;
`;

const AltStyledPaper = styled(StyledPaper)`
    background-color: ${props => changeHue(props.theme.main, 45)} !important;
`;

const Alt2StyledPaper = styled(StyledPaper)`
    background-color: ${props => changeHue(props.theme.main, 120)} !important;
`;

const Alt3StyledPaper = styled(StyledPaper)`
    background-color: ${props => changeHue(props.theme.main, 160)} !important;
`;

export default () => {
    return <div>
        <AltStyledPaper zDepth={1} />
        <StyledPaper zDepth={2} />
        <Alt2StyledPaper zDepth={3} />
        <StyledPaper zDepth={4} />
        <Alt3StyledPaper zDepth={5} />
    </div>
}