import { useSelector } from 'react-redux'
import './Breadcrumbs.scss'
const Breadcrumbs = () => {
  const breadrumbs = useSelector((state) => state.breadcrumbs.value)
  return (
    <div className="container py-2">
      <ul className="d-flex">
        {breadrumbs.map((b) => {
          return (
            <li className="font-size-2" key={Math.floor(Math.random() * 1e6)}>
              <a href={b.url}>{b.title}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Breadcrumbs
