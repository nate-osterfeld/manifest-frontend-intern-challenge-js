import Button from './Button'

function App() {
	return (
		<>
			<h1>Manifest Frontend Intern Code challenge 2025</h1>
			<p>Show off your components here</p>

			<div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
				{/* Mobile - Primary - Active */}
				<Button>Continue</Button>

				{/* Mobile - Secondary - Active */}
				<Button type='secondary'>Continue</Button>

				{/* Mobile - Text - Active*/}
				<Button type='text'>Continue</Button>

				{/* Mobile - Primary - Disabled */}
				<Button status='disabled'>Continue</Button>

				{/* Mobile - Secondary - Disabled */}
				<Button type='secondary' status='disabled'>
					Continue
				</Button>

				{/* Mobile - Text - Disabled */}
				<Button type='text' status='disabled'>
					Continue
				</Button>

				{/* Mobile - Primary - Active - Inverted */}
				<Button isInverted='true'>Continue</Button>

				{/* Desktop - Primary - Active */}
				<Button display='desktop'>Continue</Button>

				{/* Desktop - Secondary - Active */}
				<Button display='desktop' type='secondary'>
					Continue
				</Button>

				{/* Desktop - Text - Active*/}
				<Button display='desktop' type='text'>
					Continue
				</Button>

				{/* Desktop - Primary - Disabled */}
				<Button display='desktop' status='disabled'>
					Continue
				</Button>

				{/* Desktop - Secondary - Disabled */}
				<Button display='desktop' type='secondary' status='disabled'>
					Continue
				</Button>

				{/* Desktop - Text - Disabled */}
				<Button display='desktop' type='text' status='disabled'>
					Continue
				</Button>

				{/* Desktop - Primary - Active - Inverted */}
        <Button display='desktop' isInverted='true'>
          Continue
        </Button>
			</div>
		</>
	)
}

export default App
