import React, { useEffect } from 'react'
import { OrderForm } from 'vtex.order-manager'

const OrderContext = () => {
  const { useOrderForm } = OrderForm
  const { orderForm } = useOrderForm()

  useEffect(() => {
    // const myItem = orderForm && {
    //   ...orderForm.items[0],
    //   name: "Carlos Vinicius Ananias Example"
    // }

    // setOrderForm({
    //   items: myItem
    // })
  }, [])

  console.log('orderForm', orderForm)

  return <></>
}

export default OrderContext
