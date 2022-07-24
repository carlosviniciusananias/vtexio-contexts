declare module 'vtex.product-context'
declare module 'vtex.product-context/useProduct'

declare module 'vtex.product-context/ProductDispatchContext' {
  type DispatchFunction = (payload: { type: string; args?: any }) => void
  export const useProductDispatch: () => DispatchFunction
}
