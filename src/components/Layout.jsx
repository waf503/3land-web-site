import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
    const { pathname } = useLocation()

    // Scroll to top on every route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname])

    return (
        <div className="app">
            <Header />
            <main >
                <Outlet />
            </main>
            {/*<Footer />*/}
            <Footer/>
        </div>
    )
}