import { Loader } from '../common/atoms/Loader'
import { TokenButton } from './TokenButton'

type MaxButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading: boolean
}

function MaxButton(props: MaxButtonProps) {
  const { loading, className = '', ...rest } = props

  if (loading) {
    return (
      <div className="px-3">
        <Loader color="#999999" size="small" />
      </div>
    )
  }

  return (
    <button
      type="button"
      className={`p-2 text-sm font-light text-gray-9 ${className}`}
      {...rest}
    >
      MAX
    </button>
  )
}

export type TransferPanelMainInputProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    errorMessage?: string | React.ReactNode
    maxButtonProps: MaxButtonProps & {
      visible: boolean
    }
  }

export function TransferPanelMainInput(props: TransferPanelMainInputProps) {
  const { errorMessage, maxButtonProps, ...rest } = props
  const { visible: maxButtonVisible, ...restMaxButtonProps } = maxButtonProps

  const borderClassName =
    typeof errorMessage !== 'undefined'
      ? 'border border-[#cd0000]'
      : 'border border-gray-9'

  return (
    <>
      <div
        className={`flex h-16 flex-row items-center rounded-lg bg-white ${borderClassName}`}
      >
        <TokenButton />
        <div className="h-full border-r border-gray-4" />
        <div className="flex h-full flex-grow flex-row items-center justify-center px-3">
          <input
            type="text"
            inputMode="decimal"
            placeholder="Enter amount"
            className="h-full w-full bg-transparent text-xl font-light placeholder:text-gray-9 sm:text-3xl"
            {...rest}
          />
          {maxButtonVisible && <MaxButton {...restMaxButtonProps} />}
        </div>
      </div>

      {typeof errorMessage !== 'undefined' && (
        <span className="text-sm text-brick">{errorMessage}</span>
      )}
    </>
  )
}
