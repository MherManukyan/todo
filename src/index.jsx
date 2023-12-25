import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/layout/Layout'
import Home from './components/screens/Home/Home'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>,
	document.getElementById('root')
)
