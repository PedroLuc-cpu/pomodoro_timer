import { HeaderConteiner } from './style'
import logoIgnite from '../../assets/logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderConteiner>
      <img src={logoIgnite} alt="logo-Ignite" title="timer" />
      <nav>
        <NavLink to={'/'}>
          <Timer size={24} />
        </NavLink>
        <NavLink to={'/history'} title="historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderConteiner>
  )
}
