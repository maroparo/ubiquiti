import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

import { getStatusCodeMessage } from 'routes/utils.ts'

import { ErrorBoundaryStyled } from './ErrorBoundary.styled.ts'

export const ErrorBoundary = () => {
  const error = useRouteError()
  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    errorMessage = getStatusCodeMessage(error.status)
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    errorMessage =
      'Something went wrong and we are not sure what happened! We were notified and are already looking into it.'
  }

  return (
    <ErrorBoundaryStyled>
      <div>
        <h1>Oops!</h1> <p>{errorMessage}</p>
      </div>
      <img src="/robot.png" alt="Error" />
    </ErrorBoundaryStyled>
  )
}
