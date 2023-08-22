import { Box, Center, HStack, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-portfolio-logo">
          <img
            alt="portfolio-logo"
            src="https://res.cloudinary.com/dl8likjsr/image/upload/v1692677530/portfolio_logo_ovwpfj.jpg"
          />
        </div>
        <HStack gap="24px" spacing="24px" className="header-socials">
          <a href="https://github.com/morigami8/thumbathon">
            <Icon width="50px" height="25px" as={FaGithub} />
          </a>
          <a href="https://www.linkedin.com/in/morgan-atwood-5b6a8756/">
            <Icon width="50px" height="25px" as={FaLinkedin} />
          </a>
        </HStack>
      </div>
    </header>
  );
};

export default Header;
