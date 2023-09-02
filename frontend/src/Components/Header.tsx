/* eslint-disable jsx-a11y/anchor-is-valid */
import { HStack, Icon } from '@chakra-ui/react';
import { FaGithub, FaHome, FaLinkedin, FaRegThumbsUp } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-socials-container">
          <div className="header-portfolio-logo">
            <a href="">
              {''}
              <Icon as={FaRegThumbsUp} /> THUMBATHON
            </a>
          </div>
          <HStack gap="12px" spacing="12px" className="header-socials">
            <a href="">
              <Icon width="50px" height="25px" as={FaHome} />
            </a>
            <a href="https://github.com/morigami8/thumbathon">
              <Icon width="50px" height="25px" as={FaGithub} />
            </a>
            <a href="https://www.linkedin.com/in/morgan-atwood-5b6a8756/">
              <Icon width="50px" height="25px" as={FaLinkedin} />
            </a>
          </HStack>
        </div>
      </div>
    </header>
  );
};

export default Header;
