// src/components/Button.jsx or .tsx
// import clsx from 'clsx'
import './Button.css' // or Tailwind if you prefer

const Button = ({
	children,
	display = 'mobile',
	type = 'primary',
	status = 'active',
	isInverted = false,
	...props
}) => {
	return (
		<button
			onClick={() => console.log('do something')}
			className={`button ${display} ${type} ${isInverted && 'inverted'}`}
			disabled={status === 'disabled'}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
