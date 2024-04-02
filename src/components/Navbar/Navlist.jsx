import { Button } from "../../style/components/Navbar/Button";
import { Content } from "../../style/components/Navbar/Content";
import { Item } from "../../style/components/Navbar/Item";
import { Link } from "../../style/components/Navbar/Link";
import { List } from "../../style/components/Navbar/List";


export const NavList = ({className, ...props }) => (
    <Content className={className} open={props.open}>
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
    </Content>
);