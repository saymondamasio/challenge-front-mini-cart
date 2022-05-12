import styles from './styles.module.scss'

import {
  MdClose,
  MdMenu,
  MdPerson,
  MdSearch,
  MdShoppingCart,
} from 'react-icons/md'
import { useState } from 'react'
import { Cart } from '../Cart'
import { useMediaQuery } from '../../hooks/media'
import { HeaderMenu } from './HeaderMenu'

export function Header() {
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const isMediumScreen = useMediaQuery('(max-width: 990px)')
  const isSmallScreen = useMediaQuery('(max-width: 540px)')

  function handleToggleMenu() {
    if (!isOpenMenu && isOpenCart) setIsOpenCart(false)
    setIsOpenMenu(!isOpenMenu)
  }

  function handleOpenCart() {
    if (!isOpenCart && isOpenMenu) setIsOpenMenu(false)
    setIsOpenCart(!isOpenCart)
  }

  return (
    <header>
      <div className={styles.container}>
        <img src="/images/logo.png" alt="Logo Agencia E-Plus" />

        {!isMediumScreen && <HeaderMenu />}

        <div className={styles.actions}>
          <MdSearch size={isSmallScreen ? 25 : 30} color="#000" />
          <MdPerson size={isSmallScreen ? 25 : 30} color="#000" />
          <div className={styles.buttonCartWrapper}>
            <button type="button" onClick={handleOpenCart}>
              <MdShoppingCart size={isSmallScreen ? 25 : 30} color="#000" />
            </button>
            {isOpenCart && <Cart />}
          </div>
          {isMediumScreen && (
            <>
              <button type="button" onClick={handleToggleMenu}>
                {isOpenMenu ? (
                  <MdClose size={isSmallScreen ? 25 : 30} color="#000" />
                ) : (
                  <MdMenu size={isSmallScreen ? 25 : 30} color="#000" />
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {isMediumScreen && isOpenMenu && <HeaderMenu />}
    </header>
  )
}
