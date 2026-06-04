import { useEffect } from "react"

export const withLogging = (WrappedComponent) => {
    const ComponentWithLogging = (props) => {
        useEffect(() => {
            console.log(`Montando componente: ${WrappedComponent.name || 'Component'}`)
            return () => {
                console.log(`Desmontando componente: ${WrappedComponent.name || 'Component'}`)
            }
        }, [])

        return <WrappedComponent {...props} />
    }
    return ComponentWithLogging
}