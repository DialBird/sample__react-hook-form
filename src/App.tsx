import * as React from 'react'
import './styles.scss'

import { useSampleForm } from './useSampleForm'
import { SampleForm } from './SampleForm'

export default function App() {
	const { sampleForm } = useSampleForm()
	return (
		<div className="App">
			<h1 className="title">React Hook Form Sample</h1>
			<SampleForm sampleForm={sampleForm} />
		</div>
	)
}
