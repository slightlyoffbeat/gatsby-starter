import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../styles/breakpoints';

const ContainerStyle = styled.div`
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.greaterThan('sm')`
    max-width: ${props => props.theme.breakpoints.sm}px
    margin-left: auto;
    margin-right: auto;
  `}

  ${media.greaterThan('md')`
    max-width: ${props => props.theme.breakpoints.md}px
  `}

  ${media.greaterThan('lg')`
    max-width: ${props => props.theme.breakpoints.lg}px
  `}

  ${media.greaterThan('xl')`
    max-width: ${props => props.theme.breakpoints.xl}px
  `}
`;

const Container = ({ children }) => <ContainerStyle>{children}</ContainerStyle>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
