import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '2',
          name: 'Santiago',
          slug: 'santiago',
          location: {
            latitude: -33.4513,
            longitude: -70.6653
          }
        }
      ]}
    />
  )
}
