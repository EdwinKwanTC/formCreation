type Size = 'sm' | 'md' | 'lg'

type Props = {
  label: string
  size: Size
  onClick?: () => void
}

const Button = ({ label, size, onClick }: Props) => {
  const handleSize = (size: Size) => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs font-semibold'
      case 'md':
        return 'px-3 py-2 text-sm font-semibold'
      case 'lg':
        return 'px-4 py-3 text-base font-semibold'
      default:
        return 'px-3 py-2 text-sm font-semibold'
    }
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={`rounded bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${handleSize(
        size
      )}`}
    >
      {label}
    </button>
  )
}

export default Button
