interface OrderItem {
  id: string
  attachments: Attachment[]
  skuName: string
  name: string
  productId: string
  price: number
  listPrice: number
  bundleItems: Bundle[]
  isGift: boolean
  parentItemIndex: null | number
  quantity: number
  seller: string
  imageUrl: string
  detailUrl: string
  measurementUnit: string
  unitMultiplier: number
}
