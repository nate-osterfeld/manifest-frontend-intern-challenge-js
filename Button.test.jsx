import { render, screen, fireEvent } from '@testing-library/react'
import Button from './src/Button'

describe('Button Component', () => {
	test('renders a primary active button', () => {
		render(
			<Button type='primary' status='active'>
				Continue
			</Button>,
		)
		const button = screen.getByRole('button', { name: /continue/i })
		expect(button).toBeInTheDocument()
		expect(button).toHaveClass('primary')
		expect(button).not.toBeDisabled()
	})

	test('renders a secondary active button', () => {
		render(
			<Button type='secondary' status='active'>
				Cancel
			</Button>,
		)
		const button = screen.getByRole('button', { name: /cancel/i })
		expect(button).toHaveClass('secondary')
	})

	test('renders a text button with the correct class', () => {
		render(
			<Button type='text' status='active'>
				Skip
			</Button>,
		)
		const button = screen.getByRole('button', { name: /skip/i })
		expect(button).toHaveClass('text')
	})


	test("applies the disabled attribute when status is 'disabled'", () => {
		render(
			<Button type='primary' status='disabled'>
				Continue
			</Button>,
		)
		const button = screen.getByRole('button', { name: /continue/i })
		expect(button).toBeDisabled()
	})

	test('fires onClick when clicked and enabled', () => {
		const handleClick = vi.fn()
		render(
			<Button type='primary' status='active' onClick={handleClick}>
				Click Me
			</Button>,
		)
		const button = screen.getByRole('button', { name: /click me/i })
		fireEvent.click(button)
		expect(handleClick).toHaveBeenCalled()
	})

	test('does not fire onClick when disabled', () => {
		const handleClick = vi.fn()
		render(
			<Button type='primary' status='disabled' onClick={handleClick}>
				Can't Click
			</Button>,
		)
		const button = screen.getByRole('button', { name: /can't click/i })
		fireEvent.click(button)
		expect(handleClick).not.toHaveBeenCalled()
	})

	test('applies display class when given', () => {
		render(
			<Button type='primary' status='active' display='mobile'>
				Mobile Button
			</Button>,
		)
		const button = screen.getByRole('button', { name: /mobile button/i })
		expect(button).toHaveClass('mobile')
	})

	test('applies "inverted" class when isInverted is true', () => {
		render(
			<Button type='primary' isInverted={true}>
				Inverted Button
			</Button>,
		)
		const button = screen.getByRole('button', { name: /inverted button/i })
		expect(button).toHaveClass('inverted')
	})
})
