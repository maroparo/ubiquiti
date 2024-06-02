import { Link } from 'react-router-dom'

import Logo from 'assets/images/logo.svg'

import { HeaderStyled } from './Header.styled.ts'

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <h2>Devices</h2>
        <h3>Author / Marlind Parllaku</h3>
      </div>
    </HeaderStyled>
  )
}
