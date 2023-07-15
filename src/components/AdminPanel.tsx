import SlideOver from 'src/components/Base/SlideOver'
import SelectInput from 'src/components/FormCreation/SelectInput'
import Button from 'src/components/Base/Button'
import { useCallback, useState } from 'react'

export default function AdminPanel() {
  const [openTools, setOpenTools] = useState(false)
  const handleToolsToggle = useCallback(
    (bol?: boolean) => setOpenTools(bol || false),
    []
  )

  return (
    <div>
      <div className="flex justify-between">
        <div>hihi</div>
        <div className="flex items-center justify-end p-2">
          <Button
            className="mr-2"
            label="Tools"
            onClick={() => setOpenTools(true)}
          />
        </div>
      </div>
      <SlideOver openTools={openTools} handleToolsToggle={handleToolsToggle}>
        <SelectInput />
      </SlideOver>
    </div>
  )
}
