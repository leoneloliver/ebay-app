import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, 'hero', 'mb-3', {
    'hero-sm': miniHero,
    [styles.miniHero]: miniHero,
    'hero-lg': !miniHero
  })

  return (
    <div className={classes}>
      <div className="hero-body text-center text-light">
        <h1>Up to 50% off all collections</h1>
        <div className="mb-0">Bringing premium products right to your finger tips</div>
      </div>
    </div>
  )
}

export default Hero
