//! Ejemplos realizados durante el video
// import { useState } from 'react'

// export function TwitterFollowCard({
//   children,
//   formatUserName,
//   userName,
//   InitialIsFollowing,
// }) {
//   //   const addAt = (userName) => `@${userName}`

//   const state = useState(false) // por defecto es falso
//   //? se usa una forma sencilla con la destructuración.
//   //   const isFollowing = state[0]
//   //   const setIsFollowing = state[1]

//   const [isFollowing, setIsFollowing] = useState(InitialIsFollowing)

//   console.log('[TwitterFollowCard] render with userName: ', userName)

//   const text = isFollowing ? 'Siguiendo' : 'Seguir'
//   const buttonClassName = isFollowing
//     ? 'tw-followCard-button is-following'
//     : 'tw-followCard-button'

//   const handleClick = () => {
//     setIsFollowing(!isFollowing)
//   }

//   return (
//     <article className="tw-followCard">
//       <header className="tw-followCard-header">
//         <img
//           className="tw-followCard-avatar"
//           alt="El avatar de midudev"
//           src={`https://unavatar.io/${children}`}
//         />
//         <div className="tw-followCard-info">
//           <strong>{children}</strong>
//           <span className="tw-followCard-infoUserName">
//             {formatUserName(userName)}
//           </span>
//         </div>
//       </header>
//       <aside>
//         <button className={buttonClassName} onClick={handleClick}>
//           <span className="tw-followCard-text">{text}</span>
//           <span className="tw-followCard-stopFollow">Dejar de seguir</span>
//         </button>
//       </aside>
//     </article>
//   )
// }

//! Resultado final del archivo
import { useState } from 'react'

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  console.log('[TwitterFollowCard] render with userName: ', userName)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
