import { useEffect, useState } from 'react'

const IMAGE_URL = 'https://cataas.com/cat/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  function createImageUrl (id, url, text) {
    return `${url}${id}/says/${text}?fontColor=white`
  }

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response

        const image = createImageUrl(_id, IMAGE_URL, threeFirstWords)
        setImageUrl(image)
      })
  }, [fact])

  return { imageUrl }
} // { imageUrl: 'https:// ...' }
