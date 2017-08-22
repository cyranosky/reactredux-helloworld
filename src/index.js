import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

render(
		<Provider>
				<div>
						<center><h1>Hello World ~</h1></center>
						<center><h1>我们的组合名字叫React-Redux! 来吧，一起加油吧！</h1></center>
				</div>
		</Provider>,
		document.getElementById('app')
)
