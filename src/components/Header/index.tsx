'use client'

import { CircleUserRound, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'
import { InputSearch } from '../InputSearch'

export function Header() {
  const [notice, setNotice] = useState(true)

  return (
    <header className="flex w-full flex-col">
      {notice && (
        <div className="flex h-[38px] w-full justify-center bg-black">
          <div className="flex w-full max-w-app items-center">
            <p className="flex-1 text-center font-body text-white">
              Sign up and get 20% off to your first order.{' '}
              <a className="underline" href="">
                Sign Up Now
              </a>
            </p>
            <X
              className="cursor-pointer text-white"
              onClick={() => setNotice(false)}
            />
          </div>
        </div>
      )}
      <div className="flex h-24 w-full items-center justify-center">
        <div className="flex w-full max-w-app items-center justify-between gap-10">
          <h3 className="font-display text-2xl">SHOP.CO</h3>
          <ul className="flex gap-6">
            <li>shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
          <InputSearch />
          <div className="flex items-center justify-center gap-3">
            <ShoppingCart strokeWidth={2.5} />
            <CircleUserRound strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </header>
  )
}
