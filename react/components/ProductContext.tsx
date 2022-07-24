import React, { useEffect } from 'react'
import { useProduct, useProductDispatch } from 'vtex.product-context'

const ProductContext = () => {
  const { product } = useProduct()
  const dispatch = useProductDispatch()

  useEffect(() => {
    dispatch({
      type: "SET_QUANTITY",
      args: { quantity: 50 }
    })
  }, [])

  return <>{product?.productName}</>
}

export default ProductContext
