import React from 'react'

const Results = (props) => {
    
    return (
        <section className={props.loanDetails.dspResults === false ? "d-none": ""}>
            <hr/>
            <h3>Your monthly Payments</h3>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered table-light border-primary">
                    <thead>
                        <tr>
                        <th scope="col">Loan Amount</th>
                        <th scope="col">Interest Rate</th>
                        <th scope="col">Number of Years</th>
                        <th scope="col">Monthly Payments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">{props.loanDetails.loanAmt}</th>
                        <td>{props.loanDetails.interest}</td>
                        <td>{props.loanDetails.term}</td>
                        <td>{props.loanDetails.mthlyInstmnts}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Results
