import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
  //   const formatUserName = (userName) => `${userName}`
  const formatUserName = (userName) => <span>@{userName}</span>

  // arreglo necesario para el ejemplo de llamar o asignar varios props a la vez
  const minudev = {
    isFollowing: true,
    userName: 'midudev',
    formatUserName: formatUserName,
  }
  const pheralb = {
    isFollowing: false,
    userName: 'pheralb',
    formatUserName: formatUserName,
  }
  return (
    // <section className="App">
    //   <TwitterFollowCard
    //     formatUserName={formatUserName}
    //     name="Miguel Angel Duran"
    //     userName="midudev"
    //     isFollowing={true}
    //   />
    //   <TwitterFollowCard
    //     formatUserName={formatUserName}
    //     name="Miguel Angel Duran"
    //     userName="pheralb"
    //     isFollowing={false}
    //   />
    // </section>

    //? ejemplo para el manejo de los children
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="midudev"
        isFollowing
      >
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="pheralb"
        isFollowing={false}
      >
        Juan Pablo Gómez Arcila
      </TwitterFollowCard>
    </section>

    //? Ejemplo para el manejo del llamado a varios props a la vez sin tener que escribirlos

    // <section className="App">
    //   <TwitterFollowCard {...minudev}>Miguel Angel Duran</TwitterFollowCard>
    //   <TwitterFollowCard {...pheralb}>
    //     Juan Pablo Gómez Arcila
    //   </TwitterFollowCard>
    // </section>
  )
}
