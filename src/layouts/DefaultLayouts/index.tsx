import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './style'
import { CycleContextProvider } from '../../contexts/CycleContextType'

export function DefaultsLayout() {
  return (
    <div>
      <LayoutContainer>
        <CycleContextProvider>
          <Header />
          <Outlet />
        </CycleContextProvider>
      </LayoutContainer>
    </div>
  )
}
