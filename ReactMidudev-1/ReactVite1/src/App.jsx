import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
	return (
		<section className="App">
			<TwitterFollowCard
				userName="midudev"
				name="Miguel Angel Duran"
				isFollowing={true}
			/>
			<TwitterFollowCard
				userName="midudev"
				name="Miguel Angel Duran"
				isFollowing={true}
			/>
		</section>
	)
}
