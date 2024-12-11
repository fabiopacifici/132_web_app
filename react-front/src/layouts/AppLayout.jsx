import { Outlet, NavLink } from 'react-router-dom'

export default function AppLayout() {



  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Bool Books</NavLink>
        </nav>
      </header>


      <main>
        <Outlet />
      </main>

      <footer>
        footer
      </footer>

    </>

  )
}
