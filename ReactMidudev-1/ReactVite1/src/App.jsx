//! Ejemplos realizados durante el video
// import { useState } from 'react'
// import './App.css'
// import { TwitterFollowCard } from './TwitterFollowCard'
// export function App() {
//   //   const formatUserName = (userName) => `${userName}`
//   const formatUserName = (userName) => <span>@{userName}</span>

//   // arreglo necesario para el ejemplo de llamar o asignar varios props a la vez
//   const minudev = {
//     isFollowing: true,
//     userName: 'midudev',
//     formatUserName: formatUserName,
//   }
//   const pheralb = {
//     isFollowing: false,
//     userName: 'pheralb',
//     formatUserName: formatUserName,
//   }

//   const [isFollowing, setIsFollowing] = useState(false)

//   console.log('[app] render with isFollowing: ', isFollowing)

//   return (
//     // <section className="App">
//     //   <TwitterFollowCard
//     //     formatUserName={formatUserName}
//     //     name="Miguel Angel Duran"
//     //     userName="midudev"
//     //     isFollowing={true}
//     //   />
//     //   <TwitterFollowCard
//     //     formatUserName={formatUserName}
//     //     name="Miguel Angel Duran"
//     //     userName="pheralb"
//     //     isFollowing={false}
//     //   />
//     // </section>

//     //? ejemplo para el manejo de los children
//     <section className="App">
//       <TwitterFollowCard
//         formatUserName={formatUserName}
//         userName="midudev"
//         InitialIsFollowing={isFollowing}
//       >
//         Miguel Angel Duran
//       </TwitterFollowCard>

//       <button onClick={() => setIsFollowing(!isFollowing)}>
//         Cambiar estado de App
//       </button>
//       {/* <TwitterFollowCard
//         formatUserName={formatUserName}
//         userName="pheralb"
//         InitialIsFollowing={false}
//       >
//         Juan Pablo Gómez Arcila
//       </TwitterFollowCard> */}
//     </section>

//     //? Ejemplo para el manejo del llamado a varios props a la vez sin tener que escribirlos

//     // <section className="App">
//     //   <TwitterFollowCard {...minudev}>Miguel Angel Duran</TwitterFollowCard>
//     //   <TwitterFollowCard {...pheralb}>
//     //     Juan Pablo Gómez Arcila
//     //   </TwitterFollowCard>
//     // </section>
//   )
// }

//! Resultado final del archivo
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false,
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true,
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false,
  },
]

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
