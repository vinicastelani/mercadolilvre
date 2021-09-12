import { useParams, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../../components/Breadcrumbs/features/updateBreadcrumbs'
import axios from 'axios'

import ItemView from '../../components/ItemView/ItemView'

const Search = () => {
  const dispatch = useDispatch()

  const { query } = useParams()
  const location = useLocation()
  let [searchItems, setSearchItems] = useState([''])

  //sempre que a query atualizar, será feito um novo request
  useEffect(() => {
    axios
      .get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then((response) => {
        setSearchItems(response.data.results)
        dispatch(
          incrementByAmount([
            {
              title: 'Home',
              url: '/',
            },
            {
              title: response.data.filters[0].values[0].name,
              url: location.pathname,
            },
          ]),
        )
      })
      .catch((e) => console.log(e))
  }, [query])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="container px-3">
        {searchItems.map((item) => (
          <ItemView data={item} key={Math.floor(Math.random() * 1e6)} />
        ))}
      </div>
    </div>
  )
}

export default Search
