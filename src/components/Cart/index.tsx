import { HTMLAttributes, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { CartItem } from './CartItem'
import styles from './styles.module.scss'

type CartItem = {
  available: boolean
  bestPrice: number
  bestPriceFormated: string
  image: string
  name: string
  productId: number
  quantity: number
  salesChannel: string
}

type ResponseCart = {
  item: Array<CartItem>
}

export function Cart() {
  const [cart, setCart] = useState<Array<CartItem>>([])
  const [totalOrder, setTotalOrder] = useState('')

  async function fetchCart() {
    const cartResult = await api.get<ResponseCart>('cart')

    const total =
      cartResult.data.item.reduce(
        (acc, item) => acc + item.bestPrice * item.quantity,
        0
      ) / 100

    setTotalOrder(
      total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    )

    setCart(cartResult.data.item)
  }

  function handleFinishOrder() {
    console.log('Compra finalizada')
  }

  useEffect(() => {
    fetchCart()
  }, [])

  return (
    <>
      <div className={styles.cart}>
        <ul>
          {cart.map(
            ({ productId, bestPriceFormated, image, name, quantity }) => (
              <CartItem
                key={productId}
                data={{ bestPriceFormated, image, name, quantity }}
              />
            )
          )}
        </ul>

        <footer>
          <div className={styles.totalOrder}>
            Total do pedido:{' '}
            <span className={styles.totalPrice}>{totalOrder}</span>
          </div>

          <button
            className={styles.finishButton}
            type="button"
            onClick={handleFinishOrder}
          >
            FINALIZAR COMPRA
          </button>
        </footer>
      </div>
      <div className={styles.triangule}></div>
    </>
  )
}
