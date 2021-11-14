import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should reder without any maker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Guarulhos',
      slug: 'guarulhos',
      location: {
        latitude: -23.413,
        longitude: -46.4445
      }
    }
    const placeTwo = {
      id: '2',
      name: 'Santiago',
      slug: 'santiago',
      location: {
        latitude: -33.4513,
        longitude: -70.6653
      }
    }
    render(<Map places={[place, placeTwo]} />)
    expect(screen.getByTitle(/guarulhos/i)).toBeInTheDocument()
    expect(screen.getByTitle(/santiago/i)).toBeInTheDocument()
  })
})
