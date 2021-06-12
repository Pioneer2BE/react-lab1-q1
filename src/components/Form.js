import React from 'react'

const Form = () => {
    return (
        <section>
            <form>
            <div className="form-group row">
                <label className="col-4 col-form-label" htmlFor="text">Loan Amount</label> 
                <div className="col-8">
                <div className="input-group">
                    <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-dollar"></i>
                    </div>
                    </div> 
                    <input id="text" name="text" type="text" className="form-control" required="required" aria-describedby="textHelpBlock"/>
                </div> 
                <span id="textHelpBlock" className="form-text text-muted">sssss</span>
                </div>
            </div> 
            <div class="form-group row">
                <label htmlFor="text1" className="col-4 col-form-label">Annual Interest Rate</label> 
                <div className="col-8">
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i className="fa fa-percent"></i>
                        </div>
                    </div> 
                    <input id="text1" name="text1" type="text" className="form-control" aria-describedby="text1HelpBlock"/>
                    </div> 
                    <span id="text1HelpBlock" className="form-text text-muted">sssss</span>
                </div>
                </div>
                <div class="form-group row">
                <label htmlFor="text2" className="col-4 col-form-label">Number of Years</label> 
                <div className="col-8">
                    <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i className="fa fa-calendar"></i>
                        </div>
                    </div> 
                    <input id="text2" name="text2" type="text" className="form-control" required="required" aria-describedby="text2HelpBlock"/>
                    </div> 
                    <span id="text2HelpBlock" className="form-text text-muted">sass</span>
                </div>
                </div> 
                <div class="form-group row">
                <div class="offset-4 col-8">
                    <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                </div>
                </div>
            </form>
        </section>
    )
}

export default Form
