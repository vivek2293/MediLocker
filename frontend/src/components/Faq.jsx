import React from 'react'
import "../css/faq.css" 

function Faq() {
  return (
    <>
      <section className='py-5' id="faqSection">
        <div className="container my-5 d-flex flex-column">
          <div className="card p-2 my-2 w-75 mainCard">
            <h5 className='fw-bold'>Can I use the website on phone?</h5>
            <p>Hello Sir/Madam, Our app is compatible with all types of device . So you can use it on your phone as well as any other device.</p>
          </div>
          <div className="card p-2 my-2 w-75 mainCard">
            <h5 className='fw-bold'>How do I register on the website?</h5>
            <p>Hello Sir/Madam, To register you can see the blue dialog box on the right side in the navigation bar saying "Register". Click there and select patient or doctor as per your choice. </p>
          </div>
          <div className="card p-2 my-2 w-75 mainCard">
            <h5 className='fw-bold'>Can the PDF file of the reports be uploaded?</h5>
            <p>Hello Sir/Madam, Y0u can upload the pdf files of the reports . It will be stored safely with us.</p>
          </div>
          <div className="card p-2 my-2 w-75 mainCard">
            <h5 className='fw-bold'>Is the website secure?</h5>
            <p>Hello Sir/Madam, Our website is fully secured . Your data is well Authenthicated and encrypted with us so you don't need to worry.</p>
          </div>
          <div className="card p-2 my-2 w-75 mainCard">
            <h5 className='fw-bold'>Can I still access the data in case of any disaster?</h5>
            <p>Hello Sir/Madam, Your data is safely stored in the Cloud so you will still be able to access your data in case of any disaster.</p>
          </div>
        </div>
      </section>

    </>
  );
}

export default Faq