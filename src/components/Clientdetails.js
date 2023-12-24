import React from 'react'

export default function Clientdetails({clientName,clientAddress}) {
  return (
    <>
    <section className="flex items-end justify-end flex-col">
          <h1 className="font-bold uppercase" style={{fontSize:"30px"}}>{clientName}</h1>
          <p className='fw-bolder'>{clientAddress}</p>
        </section>
    </>
  )
}
