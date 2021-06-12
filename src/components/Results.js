import React from 'react'

const Results = () => {
    return (
        <section>
            <hr/>
            <h3>Your monthly Payments</h3>
            <div className="table-responsive">
                <table class="table table-striped table-hover table-bordered table-light border-primary">
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
                        <th scope="row">1</th>
                        <td>Sit</td>
                        <td>Amet</td>
                        <td>Consectetur</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Results
