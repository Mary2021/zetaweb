import React from 'react'
import Project from '../components/Project'
import Hero from '../components/Hero'

const project = () => {
    // const [textColor, setTextColor] = useState('white');
    // setTextColor('#000000');
  return (
    <div>
        <Hero heading='Tehtud tööd' />
        <Project />
    </div>
  )
}

export default project