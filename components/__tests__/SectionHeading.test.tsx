import { render, screen } from '@testing-library/react'
import SectionHeading from '@/components/ui/SectionHeading'
import '@testing-library/jest-dom'

describe('SectionHeading', () => {
  it('renders title', () => {
    render(<SectionHeading title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders subtitle when provided', () => {
    render(<SectionHeading title="Title" subtitle="Test Subtitle" />)
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('does not render subtitle when not provided', () => {
    render(<SectionHeading title="Title" />)
    const heading = screen.getByText('Title').closest('div')
    expect(heading?.childElementCount).toBe(1)
  })

  it('centers text by default', () => {
    render(<SectionHeading title="Title" />)
    const container = screen.getByText('Title').closest('div')
    expect(container).toHaveClass('text-center')
  })

  it('aligns text left when centered is false', () => {
    render(<SectionHeading title="Title" centered={false} />)
    const container = screen.getByText('Title').closest('div')
    expect(container).toHaveClass('text-left')
  })
})
