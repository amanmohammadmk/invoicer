import React from 'react'

export default function MainDetails({name,address}) {
  return (
    <>
       <section>
          <h1 className="font-bold uppercase">{name}</h1>
          <p className='fw-bolder'>{address}</p>
        </section>
    </>
  )
}
