import avatar from '../../assets/images/perfil.png'
import { Sidebar } from "../../components/Sidebar/Sidebar"

import {
    ContainerWrapper,
    Date,
    HeaderContent,
    HeaderWrapper,
    IconsWrapper,
    MainTitle,
    Paragraph,
    Title
} from './styles'


export const Dashboard = ( ) => {
    return(
        <div>
            <Sidebar />
            
            
    <HeaderWrapper>
      <HeaderContent>
        <div>
          <Title>Bem vindo Lindberg</Title>
          <Date>Segunda-feira, 6 de junho de 2022</Date>
        </div>
        <IconsWrapper>
          <img src={avatar} alt="User Icon" />
        </IconsWrapper>
      </HeaderContent>
    </HeaderWrapper>


    <ContainerWrapper>
      <MainTitle>Lorem ipsum dolor sit amet.</MainTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida semper malesuada.
        Praesent sagittis magna purus, id porta risus vehicula ut. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Nullam eros ipsum, gravida in
        semper euismod, fringilla vel purus. Integer et fermentum felis.
      </Paragraph>
      <Paragraph>
        Proin tempor viverra mauris vel fermentum. Duis et leo nec neque rutrum imperdiet at a ante.
        Aliquam eros elit, iaculis et tincidunt a, mattis in dolor. Aliquam erat volutpat. Nullam vel
        enim lacus. Nullam ac mi dictum, venenatis tellus at, rutrum eros. Vivamus nisi tellus, auctor
        nec feugiat ac, finibus sit amet lorem. Sed lacinia ipsum sit amet odio finibus suscipit.
        Nam mattis urna in leo efficitur, ut dapibus massa lobortis.
      </Paragraph>
    </ContainerWrapper>
        </div>
    )
}