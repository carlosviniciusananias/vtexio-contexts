import React, { useEffect } from 'react'
import { useOrderItems } from 'vtex.order-items/OrderItems'

const OrderItems = () => {
  const { addItems } = useOrderItems()

  useEffect(() => {
    addItems([{
      id: "2",
      quantity: 1,
      seller: "1"
    }])
  }, [])

  return <></>
}

export default OrderItems
