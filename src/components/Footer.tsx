import { CreditCardFlags } from './CreditCardFlags'
import { SocialMedia } from './SocialMedia'

export function Footer() {
  return (
    <footer className="relative w-full bg-[#F0F0F0]">
      <div className="mx-auto my-0 max-w-app pt-[140px]">
        <div className="absolute left-[50%] top-0 flex w-full max-w-app -translate-x-2/4 -translate-y-2/4 justify-between rounded-[20px] bg-black px-16 py-10">
          <h3 className="font-display text-[40px] leading-[45px] text-white">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h3>
          <div className="w-full max-w-[340px] space-y-3">
            <div className="flex min-h-12 w-full max-w-[340px] items-center justify-center rounded-full bg-white">
              Enter your email address
            </div>
            <div className="flex min-h-12 w-full max-w-[340px] items-center justify-center rounded-full bg-white">
              Subscribe to Newsletter
            </div>
          </div>
        </div>
        <div className="flex w-full pb-12">
          <div className="w-full max-w-[360px]">
            <h3 className="font-display text-2xl">SHOP.CO</h3>
            <p className="mb-9 mt-6 max-w-[250px] font-body text-sm opacity-60">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <SocialMedia />
          </div>
          <div className="grid w-full grid-cols-4">
            <div>
              <h6 className="mb-4 font-body text-base font-medium uppercase tracking-[3px]">
                Company
              </h6>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                About
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Features
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Works
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Career
              </p>
            </div>
            <div>
              <h6 className="mb-4 font-body text-base font-medium uppercase tracking-[3px]">
                Help
              </h6>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Customer Support
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Delivery Details
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Terms & Conditions
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Privacy Policy
              </p>
            </div>
            <div>
              <h6 className="mb-4 font-body text-base font-medium uppercase tracking-[3px]">
                FAQ
              </h6>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Account
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Manage Deliveries
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Orders
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Payments
              </p>
            </div>
            <div>
              <h6 className="mb-4 font-body text-base font-medium uppercase tracking-[3px]">
                Resources
              </h6>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Free e Books
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Development Tutorial
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                How to - Blog
              </p>
              <p className="mb-2 font-body text-base font-normal opacity-60">
                Youtube Playlist
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t py-6">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <CreditCardFlags />
        </div>
      </div>
    </footer>
  )
}
