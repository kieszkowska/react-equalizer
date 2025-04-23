import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Equalizer from "./Equalizer.tsx";

const data = [0, 0.3, 1, 0.5, 0.2, 0.1, 0.8, 0.4, 0.6, 0.7, 0.9];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Equalizer data={data} />
  </StrictMode>,
)
