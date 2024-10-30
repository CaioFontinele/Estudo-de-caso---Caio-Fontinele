import { styled } from 'styled-components';


 export const SidebarContainer = styled.div`
 width: 300px;
  height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1); 
  position: fixed; 
  left: 0; 
  top: 0; 
`;

export const LogoContainer = styled.div`
  width: 150px;
  margin-bottom: 50px;
`;

export const Logo = styled.img`
  width: 120%;
  margin-left: -20px;
  height: auto;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavItem = styled.a`
  width: 80%;
  padding: 10px 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #000;
  text-decoration: none;
  &:hover {
    background-color: #e9ecef;
    border-radius: 8px;
  }
  &.active {
    background-color: #e9ecef;
    border-radius: 8px;
  }
`;

export const NavIcon = styled.div`
  margin-right: 10px;
`;

export const Footer = styled.div`
  margin-top: auto;
  padding: 20px 0;
  width: 100%;
  text-align: center;
`;


