import React, {useState} from 'react';

import Header from "./Header";
import Form from "./Form";
import Results from "./Results";
import Footer from "./Footer";

function App() {

  const [loanDetails, setLoanDetails] = useState(
    {
      loanAmt:'',
      loanAmtErr:'', 
      interest:'', 
      interestErr:'', 
      term:'', 
      termErr:'',
      mthlyInstmnts:'',
      formErrors: false,
      dspResults: false,
    })

  return (
    <div className="App">
      <Header/>
      <main>
        <Form loanDetails= {loanDetails} setLoanDetails={setLoanDetails}/>
        <Results loanDetails= {loanDetails}/>
      </main>
      <Footer/>    
    </div>
  );
}

export default App;
