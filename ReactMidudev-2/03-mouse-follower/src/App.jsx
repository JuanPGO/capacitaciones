import { useEffect, useState } from 'React'

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})


  // pointer move
  useEffect(() => {
    console.log('efecto')

    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup
    // -> cuando el componente se desmonta
    // -> cuando cambian las dependencias, antes de ejecutar el nuevo efecto
    
    return () => { // cleanup method
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>
      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
      </button>     
    </>
  
  )
}


function App() {

  // para conocer cuando se desmonta el componente
  // const [mounted, setMounted] = useState(true)
  return (
    <main>
      {/* {mounted && <FollowMouse />}
      <button onClick={()=>setMounted(!mounted)}>Toggle mounted FollowMouse componente</button> */}
      <FollowMouse />
    </main>
  )
}

export default App
