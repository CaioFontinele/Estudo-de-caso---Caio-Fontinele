import { HelpCircle, Home, LogOut, Users } from 'react-feather';
import logoUnimed from "../../assets/images/logo_unimed.png";
import {
    Footer,
    Logo,
    LogoContainer,
    Nav,
    NavIcon,
    NavItem,
    SidebarContainer
} from './styles';

export const Sidebar = () => {
    return (
      <SidebarContainer>
        <LogoContainer>
          <Logo src={logoUnimed} alt="Logo" />
        </LogoContainer>
        <Nav>
          <NavItem href="#" className="active">
            <NavIcon>
              <Home />
            </NavIcon>
            Home
          </NavItem>
          <NavItem href="#">
            <NavIcon>
              <Users />
            </NavIcon>
            Usuários
          </NavItem>
          <NavItem href="/login">
            <NavIcon>
              <LogOut />
            </NavIcon>
            Sair
          </NavItem>
        </Nav>
        <Footer>
          <NavItem href="#">
            <NavIcon>
              <HelpCircle />
            </NavIcon>
            Suporte
          </NavItem>
        </Footer>
      </SidebarContainer>
    );
  };
  
  