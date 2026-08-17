import { useLocale } from '../contexts/index.js'
import { SOURCE_REPO_URL } from '../Utils.js'
import { Octicon } from './index.js'

interface Props {
	donate?: boolean,
}
export function Footer({}: Props) {
	const { locale } = useLocale()

	return <footer>
		<p>
			<span>{locale('forked_by')} <a href="https://github.com/Moineau404" target="_blank" rel="noreferrer">Moineau</a></span>
		</p>
		<p>
			<span>{locale('based_on')} <a href="https://github.com/misode/misode.github.io" target="_blank" rel="noreferrer">Misode's Data Pack Generators for Minecraft Java Edition</a></span>
		</p>
		<p>
			{Octicon.mark_github}
			<span>{locale('source_code_on')} <a href={SOURCE_REPO_URL} target="_blank" rel="noreferrer">{locale('github')}</a></span>
		</p>
	</footer>
}
