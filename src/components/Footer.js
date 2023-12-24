import React from 'react'

function Footer({name,phone,website,bank,email, bankAccount}) {
    return (
        <>
            <footer className='footer border-t-2 border-gray-300'>
                <ul className="flex flex-wrap items-center justify-center gap-2">
                    <li><span className="font-bold">your name</span>  : {name}</li>
                    <li><span className="font-bold">email</span>  :{email} </li>
                    <li><span className="font-bold">phone number</span> : {phone}</li>
                    <li><span className="font-bold">bank</span> : {bank}</li>
                    <li><span className="font-bold">account holder name</span> : {name}</li>
                    <li><span className="font-bold">account number</span> : {bankAccount}</li>
                    <li><span className="font-bold">website</span> : <a href={website} target='_blank' rel='noopenner norefferrer'>{website}</a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer