import { Stars } from './Stars'

export function Rating() {
  return (
    <div className="flex items-center">
      <Stars checked />
      <Stars checked />
      <Stars checked />
      <Stars checked />
      <Stars />
    </div>
  )
}
