import Link from 'next/link'
import Image from 'next/image'

import { Routes } from '@/enums/Routes'

import * as S from './styles'

export const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <Link href="https://github.com/enzoodev" target="_blank">
        <Image
          src="/img/profile.jpeg"
          alt="Profile"
          height={40}
          width={40}
          style={{ borderRadius: '50%' }}
        />
      </Link>
      <Link href="https://myside.com.br" target="_blank">
        <Image src="/img/myside-logo.svg" alt="Logo" height={36} width={150} />
      </Link>
      <Link href={Routes.CART}>
        <S.ShoppingCartIcon stroke={1.75} />
      </Link>
    </S.HeaderContainer>
  )
}
