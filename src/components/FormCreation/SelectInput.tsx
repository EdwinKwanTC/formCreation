import TextField from '~/components/Base/TextField'

export default function SelectInput() {
  return (
    <div>
      <TextField value={''} onChange={() => console.log('hi')} />
    </div>
  )
}
