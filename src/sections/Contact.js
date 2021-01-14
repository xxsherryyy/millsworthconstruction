import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Flex, Box, Label, Input } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { CardContainer, Card } from '../components/Card';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import Form from '../components/Form';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const MEDIUM_CDN = 'https://cdn-images-1.medium.com/max/400';
const MEDIUM_URL = 'https://medium.com';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

// const CoverImage = styled.img`
//   width: 100%;
//   object-fit: cover;
// `;

// const EllipsisHeading = styled(Heading)`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-inline-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
// `;

const Contact = () => (
  <Section.Container id="contact" Background={Background}>
  <Section.Header name="Contact" icon="✍️" label="contact" /> 
    
        <Form />

</Section.Container>
  
)
export default Contact