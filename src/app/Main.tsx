import { render } from 'preact'
import '../styles/global.css'
import '../styles/main.css'
import '../styles/nodes.css'
import { App } from './App.js'

function Main() {
	return (
		<App />
	)
}

render(<Main />, document.body)
