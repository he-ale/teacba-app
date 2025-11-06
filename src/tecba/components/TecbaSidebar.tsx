import { Button } from '../../components/ui/button'

export const TecbaSidebar = () => {
    return (
        <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
            <a href="https://api.whatsapp.com/send?phone=59167408813&text=Hola%20TECBA,%20solicito%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20carreras.%20Mi%20nombre%20es&fbclid=IwAR1_dACH99YVYOKtPZ-hD5hVeQ8tLUHpxpvEpGlyPhv9A2nNE0iw9HXRSV8" target="_blank" rel="noopener noreferrer">
                <Button
                    variant="default"
                    size="icon"
                    className="w-12 h-12 bg-orange-500 hover:bg-orange-600"
                    title="WhatsApp Sede Cbba"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                </Button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=59176123189&text=Hola%20TECBA,%20solicito%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20carreras.%20Mi%20nombre%20es&fbclid=IwAR1_dACH99YVYOKtPZ-hD5hVeQ8tLUHpxpvEpGlyPhv9A2nNE0iw9HXRSV8" target="_blank" rel="noopener noreferrer">
                <Button
                    variant="default"
                    size="icon"
                    className="w-12 h-12 bg-orange-500 hover:bg-orange-600"
                    title="WhatsApp Sede Sucre"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                </Button>
            </a>
            <Button
                variant="secondary"
                size="icon"
                className="w-12 h-12 bg-green-400 hover:bg-green-700"
                title="SAETA+"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13m0-13C4.168 5.477 5.754 5 7.5 5c1.747 0 3.332.477 4.5 1.253v13M0 13h18m-18 0h18m-7 0h14m-14 0h14m-5 0h10m-10 0h10"
                />
                </svg>
            </Button>
            <a href="https://zis-tecba.tech/sophia2/" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="icon" className="w-12 h-12 bg-green-400 hover:bg-green-700" title="Tutor IA">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                    </svg>
                </Button>
            </a>
            </aside>
    )
}
