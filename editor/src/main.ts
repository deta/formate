import 'normalize.css';
import './styles/themes.css';
import './styles/index.css';

import App from './App.svelte';

export default new App({
	target: document.getElementById('app'),
	intro: true,
});
