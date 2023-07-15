type Props<T extends string | number> = {
  label?: string
  value: T
  placeholder?: string
  onChange: (value: T) => void
}

export default function TextField<T extends string | number>({
  label,
  value,
  placeholder,
  onChange,
}: Props<T>) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder || ''}
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
        />
      </div>
    </div>
  )
}
