import { Search } from 'lucide-react'

export function InputSearch() {
  return (
    <div className="flex h-12 flex-1 items-center rounded-full bg-[#F0F0F0] px-4">
      <Search className="mr-3 opacity-40" />
      <input
        type="text"
        className="bg-transparent"
        placeholder="Search for products..."
      />
    </div>
  )
}
