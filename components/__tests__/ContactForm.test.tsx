import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/ContactForm'
import '@testing-library/jest-dom'

describe('ContactForm', () => {
  beforeAll(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('renders form heading', () => {
    render(<ContactForm />)
    expect(screen.getByText('Envoyez-nous un message')).toBeInTheDocument()
  })

  it('renders name input', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/nom complet/i)).toBeInTheDocument()
  })

  it('renders phone input', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/telephone/i)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('renders service select', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/service souhaite/i)).toBeInTheDocument()
  })

  it('renders message textarea', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /envoyer ma demande/i })).toBeInTheDocument()
  })

  it('shows alert on form submit', async () => {
    render(<ContactForm />)
    
    const nameInput = screen.getByLabelText(/nom complet/i)
    const phoneInput = screen.getByLabelText(/telephone/i)
    const messageInput = screen.getByLabelText(/message/i)
    const submitButton = screen.getByRole('button', { name: /envoyer ma demande/i })
    
    const user = userEvent.setup()
    
    await user.type(nameInput, 'John Doe')
    await user.type(phoneInput, '+237612345678')
    await user.type(messageInput, 'Test message')
    
    await user.click(submitButton)
    
    expect(window.alert).toHaveBeenCalledWith('Merci pour votre message! Nous vous contacterons sous 24h.')
  })
})
