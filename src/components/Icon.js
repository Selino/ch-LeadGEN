import React, { useEffect, useRef, useState, useCallback } from "react"

function useDynamicSVGImport(name, options = {}) {
  const ImportedIconRef = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const { onCompleted, onError } = options
  useEffect(() => {
    setLoading(true)
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`../graphics/${name}.svg`)
        ).ReactComponent
        if (onCompleted) {
          onCompleted(name, ImportedIconRef.current)
        }
      } catch (err) {
        if (onError) {
          onError(err)
        }
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name, onCompleted, onError])

  return { error, loading, SvgIcon: ImportedIconRef.current }
}

/**
 * Simple wrapper for dynamic SVG import hook. You can implement your own wrapper,
 * or even use the hook directly in your components.
 */
const Icon = ({ name, onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  })
  if (error) {
    return error.message
  }
  if (loading) {
    return "Loading..."
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />
  }
  return null
}

export default function DisplayIcon(props) {
  const handleOnCompleted = useCallback(
    (iconName) => console.log(`${iconName} successfully loaded`),
    []
  )

  const handleIconError = useCallback((err) => console.error(err.message), [])

  return (
    <div className='App'>
      <Icon
        name={props.name}
        fill='gray'
        onCompleted={handleOnCompleted}
        onError={handleIconError}
      />
      <Icon
        name='icoArrowCircleUp'
        fill='gray'
        width='300'
        onCompleted={handleOnCompleted}
        onError={handleIconError}
      />
      <Icon
        name='icoCalendar'
        fill='darkblue'
        height='100'
        onCompleted={handleOnCompleted}
        onError={handleIconError}
      />
    </div>
  )
}
