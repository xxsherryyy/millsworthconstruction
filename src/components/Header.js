import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image, Heading, Button, Link} from 'rebass/styled-components';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import RouteLink from './RouteLink';
import Logo from './Logo/home.png';

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${(props) => props.theme.colors.background};
  }

  position: absolute;
  width: 100%;
`;

const formatLinks = (allLinks) =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );

const Header = () => (
  <HeaderContainer>
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      p={3}
    >
      <SectionLinks>
        {({ allLinks }) => {
          const { home, links } = formatLinks(allLinks);

          const homeLink = home && (
            <div>
              {/* <Image
              src={Logo}
              width="50px"
              alt="Portfolio Logo"
              onClick={home.onClick}
              style={{
                cursor: 'pointer',
              }}
            /> */}
            <Heading
              alt="Home"
              textAlign="left"
              as="h3"
              fontSize={[3, 5]}
              ml={[0, 2, 3]}
              color="text"
              onClick={home.onClick}
              style={{
                cursor: 'pointer',
              }}
            >
              Millsworth Construction
            </Heading>
             </div>
          );
          const navLinks = links.map(({ name, value }) => (
            <RouteLink
              key={name}
              onClick={value.onClick}
              selected={value.isSelected}
              name={name}
              color="text"
              mr={[6, 3, 5]}
            />
          ));

          return (
            <Fragment>
              {homeLink}
              <Link href="tel:1-800-shane"><Button type="tel"  mr={[0, 3, 5]} p={[2,3]}>CALL OR TEXT 1-800-SHANE</Button></Link>
          <Flex color="text"  mr={[0, 3, 4]} pr={[1,2,3]}>{navLinks}</Flex>
            </Fragment>
          );
        }}
      </SectionLinks>
    </Flex>
  </HeaderContainer>
);

export default Header;
