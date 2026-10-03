import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './routes/AppRoute'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
    <>
        <AppRoute />
        <Toaster position="bottom-right" />
    </>
)
