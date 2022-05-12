import styles from './styles.module.scss'

import { MdPerson, MdSearch, MdShoppingCart } from 'react-icons/md'
import { useState } from 'react'
import { Cart } from '../Cart'

export function Header() {
  const [isOpenCart, setIsOpenCart] = useState(false)

  function handleOpenCart() {
    setIsOpenCart(!isOpenCart)
  }

  return (
    <header>
      <div className={styles.container}>
        <img src="/images/logo.png" alt="Logo Agencia E-Plus" />

        <nav>
          <ul>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <MdSearch size={30} color="#000" />
          <MdPerson size={30} color="#000" />
          <div className={styles.buttonCartWrapper}>
            <button type="button" onClick={handleOpenCart}>
              <MdShoppingCart size={30} color="#000" />
            </button>
            {isOpenCart && <Cart />}
          </div>
        </div>
      </div>
    </header>
  )
}
