import Card from './Cards'
import GetNinjas from './Cards/GetNinjas'
import SocialProof from './Cards/SocialProof'
import {
  AllCard,
  Card1,
  Card2,
  Containertitulo,
  Section,
  Titulo,
  UserAval
} from './styles'

const Users = () => (
  <Section>
    <Containertitulo>
      <UserAval>3940+ Usuários satisfeitos!</UserAval>
      <Titulo>Não acredite apenas em nossas palavras</Titulo>
    </Containertitulo>
    <AllCard>
      <Card1>
        <Card image={'First'} name={''} />
      </Card1>
      <Card2>
        <Card image={'Second'} name={''} />
      </Card2>
    </AllCard>
    <SocialProof />
    <GetNinjas />
  </Section>
)
export default Users
