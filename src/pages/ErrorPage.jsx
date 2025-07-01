import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return <h1>Whoops! Something went wrong!</h1>
}

export default ErrorPage
