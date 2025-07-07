import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App() {

    const [fact, setFact] = useState('')

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
                
                // ejemplo para obtener la primera palabra del fact
                const firstWord = fact.split(' ')[0]

                // ejemplo para obtener las tres primeras palabras del fact
                // el slice es para obtener las tres primeras palabras segun la posición
                // el join es para unir las tres palabras en una sola cadena
                const threeWords = fact.split(' ').slice(0, 3).join(' ')

                // ejemplo para obtener las tres primeras palabras del fact, reducido
                const threeWordsReduced = fact.split(' ', 3)
            })
    }, [])


    // otra opción de fetch usando el async await
    // useEffect(() => {
    //     async function getRandomFact() {
    //         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //         const data = await res.json()
    //         setFact(data.fact)
    //     }
    // },[])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>} {/*renderizado condicional*/}
        </main>

    )
}