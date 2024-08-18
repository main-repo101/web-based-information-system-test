import { StrictMode } from 'react'
import React from 'react-dom/client'
import App from '@main/it/campus/App.tsx'
import '@resources/css/index.css'

//REM: [TODO, MAKE_A_GUARD]
const ROOT: HTMLElement | undefined | null = document.getElementById('root');

React.createRoot(ROOT!).render(
  <StrictMode>
    <App title={document.title} subtitle={"This is a test"}/>
  </StrictMode>,
)
