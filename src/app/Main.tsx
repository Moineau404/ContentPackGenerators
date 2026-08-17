import { render } from 'preact'
import '../styles/global.css'
import '../styles/main.css'
import '../styles/nodes.css'
import { App } from './App.js'
import { LocaleProvider, ProjectProvider, StoreProvider, ThemeProvider, TitleProvider, VersionProvider } from './contexts/index.js'
import { ModalProvider } from './contexts/Modal.jsx'
import { SpyglassProvider } from './contexts/Spyglass.jsx'

function Main() {
	return (
		<App />
	)
}

render(<Main />, document.body)
