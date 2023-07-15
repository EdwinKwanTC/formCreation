import SlideOver from 'src/components/Base/SlideOver'
import SelectInput from 'src/components/FormCreation/SelectInput'
import Button from 'src/components/Base/Button'

export default function AdminPanel() {
  return (
    <>
      <div className="flex justify-end">
        <Button label="Tools" size="md" />
      </div>
      <SlideOver>
        <SelectInput />
      </SlideOver>
    </>
  )
}
