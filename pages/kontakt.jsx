import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Võta meiega ühendust' message='Tahad lihtsalt abi küsida, saada hinnapakkumist või leppida kokku aeg konsultatsiooniks? Helista või saada meile e-mail ja me võtame teiega esimesel võimalusel ühendust.' />
        <Contact />
    </div>
  )
}

export default contact