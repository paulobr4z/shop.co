/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Plus } from 'lucide-react'
import Image from 'next/image'

import versace from '../assets/images/versace.svg'
import zara from '../assets/images/zara.svg'
import gucci from '../assets/images/gucci.svg'
import prada from '../assets/images/prada.svg'
import calvinKlein from '../assets/images/calvin-klein.svg'

export default function Home() {
  return (
    <div>
      <Header />
      <section className="bg-[#F0F0F0] bg-[url('../assets/images/bg-hero.svg')] bg-center bg-no-repeat">
        <div className="mx-auto my-0 max-w-app py-[116px]">
          <h1 className="max-w-[580px] font-display text-[64px] leading-[64px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="mt-8 max-w-[545px] font-body leading-[22px] opacity-60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className="mt-8" variant="primary" maxWidth="210px">
            Shop Now
          </Button>
          <div className="mt-12 flex">
            <div className="border-r border-[#0000001a] pr-8">
              <span className="flex items-center">
                <h3 className="font-body text-[40px] font-bold leading-[48px]">
                  200
                </h3>
                <Plus strokeWidth={3} />
              </span>
              <p className="text-black opacity-60">International Brands</p>
            </div>
            <div className="px-8">
              <span className="flex items-center">
                <h3 className="font-body text-[40px] font-bold leading-[48px]">
                  2,000
                </h3>
                <Plus strokeWidth={3} />
              </span>
              <p className="text-black opacity-60">High-Quality Products</p>
            </div>
            <div className="border-l border-[#0000001a] pl-8">
              <span className="flex items-center">
                <h3 className="font-body text-[40px] font-bold leading-[48px]">
                  30,000
                </h3>
                <Plus strokeWidth={3} />
              </span>
              <p className="text-black opacity-60">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black">
        <div className="mx-auto my-0 flex h-[122px] max-w-app items-center justify-between">
          <Image src={versace} width={167} height={40} alt="" />
          <Image src={zara} width={91} height={40} alt="" />
          <Image src={gucci} width={156} height={40} alt="" />
          <Image src={prada} width={194} height={40} alt="" />
          <Image src={calvinKlein} width={207} height={40} alt="" />
        </div>
      </section>
    </div>
  )
}
