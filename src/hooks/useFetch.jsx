import React from 'react'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Error ${res.status}`)
                }
                return res.json()
            })
            .then((info) => setData(info))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [url])

    return {data, loading, error}
}

export default useFetch