import PropTypes from "prop-types";
import * as Navbar from "@radix-ui/react-navigation-menu";
import { Root } from "../../style/components/Navbar/index";
import { Link } from "../../style/components/Navbar/Link";
import { Button } from "../../style/components/Navbar/Button";
import { Item } from "../../style/components/Navbar/Item";
import { List } from "../../style/components/Navbar/List";
import { ExpandButtonComponent } from "./ExpandButton";
import { useState } from "react";

export default function NavBar(props) {
  const [open, setOpen] = useState(false);
  const hasExpandButton = (window.innerWidth <= 768) ? true : false;
  return (
    <Root>
      <List>
        <Item>
          <Link href="/">{props.logo}</Link>
        </Item>
        {hasExpandButton && (
          <ExpandButtonComponent open={open} setOpen={() => {
            setOpen(!open);
          }} />
        )}
        <Item>
        </Item>
      </List>
        <List>
        <Item>
          <Link href="#">{props.home}</Link>
        </Item>
        <Item>
          <Link href="#about">{props.about}</Link>
        </Item>
        <Item>
          <Link href="#projects">{props.projects}</Link>
        </Item>
        <Item>
          <Link href="#portfolio">{props.portfolio}</Link>
        </Item>
        <Item>
          <Link href="#services">{props.services}</Link>
        </Item>
        <Item>
          <Link href="#contact-me">{props.contact}</Link>
        </Item>
      </List>
      <List>
        <Item>
          <Button onClick={props.changeThemeFunc}>
            {props.changeThemeText}
          </Button>
        </Item>
        <Item>  
          <Button onClick={props.changeLanguageFunc}>
            {props.changeLanguageText}
          </Button>
        </Item>
      </List>
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
