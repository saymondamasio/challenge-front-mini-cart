import styles from './styles.module.scss'

type CartItemType = {
  image: string
  name: string
  quantity: number
  bestPriceFormated: string
}

interface Props {
  data: CartItemType
}

export function CartItem({ data }: Props) {
  return (
    <div className={styles.cartItem}>
      <img src={data.image} alt={data.name} />

      <div className={styles.productInfo}>
        <div>
          <h1>{data.name}</h1>

          <footer>
            <span className={styles.quantityItem}>Qtd: {data.quantity}</span>
            <span className={styles.priceItem}>{data.bestPriceFormated}</span>
          </footer>
        </div>
      </div>
    </div>
  )
}
