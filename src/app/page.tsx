/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Plus } from 'lucide-react'

import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { ProductList } from '@/components/ProductList'
import { Rating } from '@/components/Rating'
import { Checkmark } from '@/components/Checkmark'
import { Footer } from '@/components/Footer'

import versace from '../assets/images/versace.svg'
import zara from '../assets/images/zara.svg'
import gucci from '../assets/images/gucci.svg'
import prada from '../assets/images/prada.svg'
import calvinKlein from '../assets/images/calvin-klein.svg'

import { newArrivals, ourHappyCustomers, topSelling } from '@/data/data'

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
        <div className="mx-auto my-0 flex min-h-[122px] max-w-app flex-wrap items-center justify-center gap-x-8 gap-y-6 px-4 py-10 lg:justify-between">
          <Image src={versace} width={167} height={40} alt="" />
          <Image src={zara} width={91} height={40} alt="" />
          <Image src={gucci} width={156} height={40} alt="" />
          <Image src={prada} width={194} height={40} alt="" />
          <Image src={calvinKlein} width={207} height={40} alt="" />
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto my-0 flex max-w-app flex-col items-center border-b">
          <h2 className="mb-14 mt-[72px] text-center font-display text-5xl">
            NEW ARRIVALS
          </h2>
          <ProductList products={newArrivals} />
          <Button className="mb-16 mt-9" variant="outline" maxWidth="218px">
            View All
          </Button>
        </div>
        <div className="mx-auto my-0 flex max-w-app flex-col items-center">
          <h2 className="mb-14 mt-[72px] text-center font-display text-5xl uppercase">
            top selling
          </h2>
          <ProductList products={topSelling} />
          <Button className="mb-16 mt-9" variant="outline" maxWidth="218px">
            View All
          </Button>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="flex w-full max-w-app flex-col items-center rounded-[40px] bg-[#F0F0F0]">
          <h2 className="mt-16 text-center font-display text-5xl">
            BROWSE BY dress STYLE
          </h2>
          <div className="mt-16 flex gap-5">
            <img
              src="https://raw.githubusercontent.com/paulobr4z/shop.co/master/src/assets/images/casual.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/paulobr4z/shop.co/master/src/assets/images/formal.svg"
              alt=""
            />
          </div>
          <div className="mb-20 mt-5 flex gap-5">
            <img
              src="https://raw.githubusercontent.com/paulobr4z/shop.co/master/src/assets/images/party.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/paulobr4z/shop.co/master/src/assets/images/gym.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="pb-[170px] pt-[80px]">
        <div className="mx-auto my-0 max-w-app">
          <h2 className="font-display text-5xl">OUR HAPPY CUSTOMERS</h2>
          <div className="mt-10 flex items-center gap-5">
            {ourHappyCustomers.map((item) => (
              <div
                key={item.id}
                className="min-h-[240px] max-w-[400px] rounded-[20px] border px-8 pt-7"
              >
                <Rating />
                <span className="mt-4 flex items-center gap-2">
                  <p className="font-body text-xl font-bold">{item.name}</p>
                  <Checkmark />
                </span>
                <p className="pt-3 font-body text-base opacity-60">
                  &quot;{item.body}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
