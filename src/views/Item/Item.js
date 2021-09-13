import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../../components/Breadcrumbs/features/updateBreadcrumbs'
import axios from 'axios'
import Button from '../../components/Button/Button'

const Item = () => {
  const breadrumbs = useSelector((state) => state.breadcrumbs.value)
  const dispatch = useDispatch()
  const { id } = useParams()
  const dollarARLocale = Intl.NumberFormat('es-AR')
  let [item, setItem] = useState()
  let [itemDescription, setItemDescription] = useState()
  const location = useLocation()
  const formatString = (str) => {
    if (!str) return
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  //useEffect realiza o request assim que a view é aberta
  useEffect(() => {
    axios
      .get(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => {
        setItem(response.data)
        dispatch(
          incrementByAmount([
            ...breadrumbs,
            {
              title: response.data.title,
              url: location.pathname,
            },
          ]),
        )
      })
      .catch((e) => e)

    axios
      .get(`https://api.mercadolibre.com/items/${id}/description`)
      .then((response) => setItemDescription(response.data))
      .catch((e) => e)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container">
      <div className="d-flex justify-space-between white_theme fullwidth px-3 py-3">
        <div>
          <img
            src={item?.pictures[0]?.secure_url}
            alt="Shiping"
            width="340px"
            className="px-1"
          />
        </div>
        <div>
          <p className="font-size-1">
            {formatString(item?.condition)} - {item?.sold_quantity} vendidos
          </p>
          <p className="font-size-3 py-2">
            <strong>{item?.title}</strong>
          </p>
          <p className="font-size-4">
            <strong>$ {dollarARLocale.format(item?.price)}</strong>
          </p>
          <Button str={'Comprar'} />
        </div>
      </div>
      <div className="white_theme fullwidth px-3 py-3">
        <p className="font-size-3">Descripción del producto</p>
        <p className="gray_color font-size-2 py-2">
          {itemDescription?.plain_text}
        </p>
      </div>
    </div>
  )
}

export default Item
