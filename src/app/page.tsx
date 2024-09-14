import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="font-body font-normal">Regular</h1>
      <h1 className="font-body font-medium">Medium</h1>
      <h1 className="font-body font-bold">Bold</h1>
      <h1 className="font-display text-6xl">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
    </div>
  )
}
