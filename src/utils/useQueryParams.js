import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getQueryParams } from 'ramjam'

const useQueryParams = () => {
  const { search } = useLocation()
  const [queryParams, setQueryParams] = useState({})

  useEffect(() => {
    const newQueryParams = getQueryParams(window)
    setQueryParams(newQueryParams)
  }, [search])

  return queryParams
}

export default useQueryParams
