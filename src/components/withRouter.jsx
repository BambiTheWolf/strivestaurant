import { useNavigate, useParams, useLocation } from 'react-router-dom'

export const withRouter = (ReactComponent) => (props) => {
  let location = useLocation()
  let navigate = useNavigate()
  let params = useParams()

  return (
    <ReactComponent
      {...props}
      location={location}
      history={{ push: navigate, replace: navigate }}
      match={{ params }}
    />
  )
}