import { useRef } from 'react'
import TextField from '~/components/Base/TextField'

export default function SelectInput() {
  const ref = useRef(null)

  return (
    <div>
      <TextField value={''} onChange={() => {}} />
    </div>
  )
}
