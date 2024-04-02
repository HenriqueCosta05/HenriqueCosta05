import PropTypes from "prop-types";
import { Root } from "../../style/components/Navbar/index";
import { Link } from "../../style/components/Navbar/Link";
import { Button } from "../../style/components/Navbar/Button";
import { Item } from "../../style/components/Navbar/Item";
import { List } from "../../style/components/Navbar/List";
import { NavList } from "./Navlist";
import { ExpandButtonComponent } from "./ExpandButton";
import { useState, useEffect} from "react";
import { StyledNavList } from "../../style/components/Navbar/StyledNavList";

export default function NavBar(props) {
  const [open, setOpen] = useState(false);
  const [hasExpandButton, setHasExpandButton] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setHasExpandButton(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Root>
      <List className="first-child">
        <Item>
          <Link href="/">{props.logo}</Link>
        </Item>
        {hasExpandButton && (
          <ExpandButtonComponent
            open={open}
            setOpen={() => {
              setOpen(!open);
            }}
          />
        )}
        <Item></Item>
      </List>
      {hasExpandButton ? (
          <StyledNavList {...props} open={open} />
      ) : (
        <NavList {...props} />
      )}
    </Root>
  );
}

NavBar.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  projects: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  changeThemeText: PropTypes.string.isRequired,
  changeThemeFunc: PropTypes.func.isRequired,
  changeLanguageFunc: PropTypes.func.isRequired,
  changeLanguageText: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired,

};
