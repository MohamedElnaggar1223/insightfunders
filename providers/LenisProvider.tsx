'use client'

import { ReactLenis } from 'lenis/react'

export default function LenisProvider({ children }: { children: React.ReactNode })
{
    return (
        <ReactLenis options={{ smoothWheel: true, syncTouch: true }}>
            {children}
        </ReactLenis>
    )
}