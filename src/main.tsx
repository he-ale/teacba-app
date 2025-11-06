import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { TecbaApp } from './TecbaApp'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TecbaApp/>
    </StrictMode>,
)
