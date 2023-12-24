import { useState, useRef } from "react";
import Clientdetails from "./components/Clientdetails";
import Date from "./components/Date";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";





function App() {

  const [showInvoice, setShowInvoive] = useState(false)

  const [name, setName] = useState("thomas raj")
  const [address, setAdderss] = useState("calicut")
  const [email, setEmail] = useState("thomas123@gmail.com")
  const [phone, setPhone] = useState("9653254568")
  const [bankName, setBankName] = useState("SBI")
  const [bankAccount, setBankAccount] = useState("180023564578")
  const [website, setWebsite] = useState("https://www.companyname.com")
  const [clientName, setClientName] = useState("Rahul sharma")
  const [clientAddress, setClientAddress] = useState("Malappuram")
  const [invoiceNumber, setInvoiveNumber] = useState("120021")
  const [invoiceDate, setInvoiceDate] = useState("12/12.23")
  const [dueDate, setDueDate] = useState("12/20/23")
  const [notes, setNotes] = useState("have it on time")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)


  const componentRef = useRef()


  const handlePrint = () => {
    window.print()
  }


  return (
    <>

      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow-lg" >

        
        {showInvoice ? (
         <>
            <div className="m-3" ref={componentRef}>
              <Header handlePrint={handlePrint} />
  
  
              <MainDetails name={name} address={address} />
              <Clientdetails clientName={clientName} clientAddress={clientAddress} />
  
  
  
              <Date invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
  
              <Table description={description} quantity={quantity} price={price} list={list} setAmount={setAmount} amount={amount} total={total} setTotal={setTotal} />
  
  
              <Notes notes={notes} />
              <Footer name={name} phone={phone} website={website} bank={bankName} bankAccount={bankAccount} />
  
              
              </div>

             <div className="d-flex gap-4">
                <button className="mt-5 me-5 text-white bg-blue-500 py-2 px-8 rounded shodow border-2 border-blue-500 hover:bg-transparent hover:text-black transition-all duration-300" onClick={() => setShowInvoive(false)}>Edit information</button>
  
                {/* for printing */}
                <ReactToPrint trigger={()=><button className="m-5  text-white bg-blue-500 py-2 px-8 rounded shodow border-2 border-blue-500 hover:bg-transparent hover:text-black transition-all duration-300">print</button>} content={()=>componentRef.current}/>
             </div>
         </>
          ) : (


          <>
            {/* name, address, clientname , client address,email,phone,bank name,bank account number, invoice number, invoice date , due date , note */}

            <div className="flex flex-col justify-center p-3 gap-3"  >

              <article className="md:grid grid-cols-2 gap-10 " >
                <div>
                  <label htmlFor="name">Enter Your Name</label>
                  <input type="text" name="name" id="name" placeholder="Thomas Raj" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
                </div>



                <div>
                  <label htmlFor="address">Enter Your adderss</label>
                  <input type="text" name="address" id="name" placeholder="Calicut" autoComplete="off" value={address} onChange={(e) => setAdderss(e.target.value)} />
                </div>
              </article>


              <article className="md:grid grid-cols-3 gap-5">
                <div>
                  <label htmlFor="email">Enter Your email</label>
                  <input type="text" name="email" id="email" placeholder="thomas123@gmail.com" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="phone">Enter Your phone number</label>
                  <input type="text" name="phone" id="phone" placeholder="9848532347" autoComplete="off" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>


                <div>
                  <label htmlFor="website">Enter Your website</label>
                  <input type="text" name="website" id="website" placeholder="https://www.companyname.com" autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div>
                  <label htmlFor="bankName">Enter Your bank name</label>
                  <input type="text" name="bankName" id="bankName" placeholder="Thomas Raj" autoComplete="off" value={bankName} onChange={(e) => setBankName(e.target.value)} />
                </div>


                <div>
                  <label htmlFor="bankAccount">Enter Your bank account number</label>
                  <input type="text" name="bankAccount" id="bankAccount" placeholder="180056945236" autoComplete="off" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
                </div>
              </article>


              <article className="md:grid grid-cols-2 gap-10">
                <div>
                  <label htmlFor="clientName">Enter client name</label>
                  <input type="text" name="clientName" id="clientName" placeholder="Rahul Sharma" autoComplete="off" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="clientAddress">Enter client address</label>
                  <input type="text" name="clientAddress" id="clientAddress" placeholder="Malappuram" autoComplete="off" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
                </div>
              </article>


              <article className="md:grid grid-cols-3 gap-10">
                <div>
                  <label htmlFor="invoiceNumber">Enter invoice number</label>
                  <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="SBI" autoComplete="off" value={invoiceNumber} onChange={(e) => setInvoiveNumber(e.target.value)} />
                </div>


                <div>
                  <label htmlFor="invoiceDate">Enter invoice date</label>
                  <input type="date" name="invoiceDate" id="invoiceDate" autoComplete="off" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
                </div>


                <div>
                  <label htmlFor="dueDate">Enter due date</label>
                  <input type="date" name="dueDate" id="dueDate" autoComplete="off" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
              </article>

              {/* table  */}

              <article>

                <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} list={list} setList={setList} setTotal={setTotal} total={total} />


              </article>

              <label htmlFor="notes">Additianol note</label>
              <textarea name="notes" id="note" placeholder="additional notes to client" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

              <button className="mt-3 text-white bg-blue-500 py-2 px-8 rounded shodow border-2 border-blue-500 hover:bg-transparent hover:text-black transition-all duration-300" onClick={() => setShowInvoive(true)}>Preview invoice</button>
            </div>
          </>

        )
        }
      </main>

    </>
  );
}

export default App;
