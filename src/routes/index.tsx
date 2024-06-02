import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { ErrorBoundary } from 'components/ErrorBoundary.tsx'
import { Home } from 'pages/Home'
import { Product } from 'pages/Product'

import { RootLayout } from './RootLayout.tsx'
import { getRoute, getRoutePath } from './utils.ts'

export const routes = {
  '/': '/',
  home: '/home',
  product: '/product/:productId',
}

export const routeMap = {
  home: () => routes.home,
  product: (productId: string) => getRoutePath('product', { productId }),
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorBoundary />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route index element={<Home />} />
        <Route path={getRoute('home')} element={<Home />} />
        <Route path={getRoute('product')} element={<Product />} />
      </Route>
    </Route>,
  ),
  { basename: import.meta.env.DEV ? '/' : '/ubiquiti/' },
)
