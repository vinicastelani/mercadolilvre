import './ItemView.scss'
import shiping from '../../assets/ic_shipping.png'
import { useHistory } from 'react-router-dom'

const ItemView = ({ data }) => {
  const dollarARLocale = Intl.NumberFormat('es-AR')
  const history = useHistory()
  const handleSearchClick = () => {
    history.push(`/items/${data.id}`)
  }

  return (
    <div className="d-flex white_theme justify-space-between item py-2 px-3">
      <div className="d-flex px-2 ">
        <img src={data.thumbnail} alt={data.title} className="product-image" />
        <div className="px-3">
          <div className="d-flex">
            <p className="item-price">$ {dollarARLocale.format(data?.price)}</p>

            {data.shipping?.free_shipping ? (
              <img src={shiping} alt="Shiping" width="24px" className="px-1" />
            ) : (
              ''
            )}
          </div>
          <p
            className="item-description cursor-pointer py-3"
            onClick={handleSearchClick}
          >
            {data.title}
          </p>
        </div>
      </div>
      <div className="">
        <p className="item-seller-locale">{data.address?.state_name}</p>
      </div>
    </div>
  )
}

export default ItemView
