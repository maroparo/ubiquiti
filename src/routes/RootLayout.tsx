import { Outlet } from 'react-router-dom'

import { Header } from 'components/Header.tsx'

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
