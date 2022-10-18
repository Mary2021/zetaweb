import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'

const about = () => {
    // const [textColor, setTextColor] = useState('white');
    // setTextColor('#000000');
  return (
    <div>
        <Hero heading={'Me teeme, mida teil on vaja!'} />
        <About />
    </div>
  )
}

export default about