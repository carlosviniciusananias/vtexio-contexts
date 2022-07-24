import React from 'react'
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'

const SearchContext = () => {
  const searchContext = useSearchPage()

  console.log('searchContext', searchContext)

  return <></>
}

export default SearchContext
