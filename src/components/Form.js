import React from 'react';

const Form = (props) => {

    const chgLoanAmt = (evt) => {

        props.setLoanDetails({...props.loanDetails,loanAmt:evt.target.value})

        /*
        if(evt.target.value === '')
        {
            props.setLoanDetails({...props.loanDetails,loanAmtErr:"Loan Amount cannot be blank"})
        }
        else
        {
            props.setLoanDetails({...props.loanDetails,loanAmtErr:""})
        }
        */
    }

    const chgInterestAmt = (evt) => {

        props.setLoanDetails({...props.loanDetails,interest:evt.target.value})

        /*
        if(evt.target.value === '')
        {
            props.setLoanDetails({...props.loanDetails,loanAmtErr:"Loan Amount cannot be blank"})
        }
        else
        {
            props.setLoanDetails({...props.loanDetails,loanAmtErr:""})
        }
        */
    }

    const chgTermAmt = (evt) => {

        props.setLoanDetails({...props.loanDetails,term:evt.target.value})

        /*
        if(evt.target.value === '')
        {
            props.setLoanDetails({...props.loanDetails,loanAmtErr:"Loan Amount cannot be blank"})
        }
        else
        {
            props.setLoanDetails({...props.loanDetails,loanAmtErr:""})
        }
        */
    }

    const calcMthlyPymts = (evt) => 
    {
        evt.preventDefault();

        const loanAmt = parseFloat(props.loanDetails.loanAmt);
        const interest = parseFloat(props.loanDetails.interest);
        const term = 12 * parseFloat(props.loanDetails.term);
        const formErrors = props.loanDetails.formErrors;


        if(formErrors === false)
        {
            const MONTHS_IN_YEAR = 12
            const monthlyInterest = (interest/100)/MONTHS_IN_YEAR;
            const plusOne = monthlyInterest + 1;
            const raised = Math.pow(plusOne , -term);
            const minusOne = 1 - raised;

            let nMthlyInstmnts = ((loanAmt * monthlyInterest) / minusOne).toFixed(2);
            props.setLoanDetails({...props.loanDetails,mthlyInstmnts:nMthlyInstmnts,dspResults:true});
            console.log({nMthlyInstmnts})

        }
  
        
    }

    return (
        <section>
            <form onSubmit={calcMthlyPymts}>
                <div className="form-group row">
                <label className="col-4 col-form-label" htmlFor="loanAmt">Loan Amount</label> 
                <div className="col-8">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-dollar"></i>
                            </div>
                        </div> 
                        <input id="text" name="loanAmt" type="number" className="form-control" required="required" value={props.loanDetails.loanAmt} onChange={chgLoanAmt} aria-describedby="textHelpBlock"/>
                    </div> 
                    <span id="textHelpBlock" className="form-text text-muted">{props.loanDetails.loanAmtErr}</span>
                </div>
            </div> 
            <div className="form-group row">
                <label htmlFor="interest" className="col-4 col-form-label">Annual Interest Rate</label> 
                <div className="col-8">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-percent"></i>
                            </div>
                        </div> 
                        <input name="interest" type="number" className="form-control" value={props.loanDetails.interest} onChange={chgInterestAmt} aria-describedby="text1HelpBlock"/>
                    </div> 
                    <span id="text1HelpBlock" className="form-text text-muted">{props.loanDetails.interestErr}</span>
                </div>
                </div>
                <div class="form-group row">
                <label htmlFor="term" className="col-4 col-form-label">Number of Years</label> 
                <div className="col-8">
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i className="fa fa-calendar"></i>
                        </div>
                    </div> 
                    <input name="term" type="number" className="form-control" required="required" value={props.loanDetails.term} onChange={chgTermAmt} aria-describedby="text2HelpBlock"/>
                    </div> 
                    <span id="text2HelpBlock" className="form-text text-muted">{props.loanDetails.termErr}</span>
                </div>
                </div> 
                <div className="form-group row">
                <div className="offset-4 col-8">
                    <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                </div>
                </div>
            </form>
        </section>
    )
}

export default Form
