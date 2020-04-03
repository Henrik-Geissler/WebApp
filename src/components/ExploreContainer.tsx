import React from 'react'
import './ExploreContainer.css'

interface ContainerProps {
  name: string
}

function ExploreContainer({name}: ContainerProps): JSX.Element {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a
          id="ui_components"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  )
}

export default ExploreContainer
