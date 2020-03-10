import * as React from 'react'
// import Hero from '../hero'

function BaseLayout({ children, miniHero = false }) {
  return (
    <>
      <main role="main" className="mb-3">
        {/* <Hero miniHero={miniHero} /> */}
        {children}
      </main>
      <footer className="text-center footer">
        Made With ❤ by 
        {' '}
        <a
          href="https://www.linkedin.com/in/leonel-oliveira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leonel Oliveira
        </a>
      </footer>
    </>
  )
}

export default BaseLayout
