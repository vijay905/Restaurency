import React from 'react'

const SignUp = () => {
    return (
        <>






    <div class="container">
        <div class="row align-items-center">
        <form>
          <div className="control-group">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Name" required="required" />
              <div className="input-group-append">
                <div className="input-group-text"><i className="far fa-user" /></div>
              </div>
            </div>
          </div>
          <div className="control-group">
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Email" required="required" />
              <div className="input-group-append">
                <div className="input-group-text"><i className="far fa-envelope" /></div>
              </div>
            </div>
          </div>
          <div className="control-group">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Mobile" required="required" />
              <div className="input-group-append">
                <div className="input-group-text"><i className="fa fa-mobile-alt" /></div>
              </div>
            </div>
          </div>
          <div className="control-group">
            <div className="input-group date" id="date" data-target-input="nearest">
              <input type="text" className="form-control datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker" />
              <div className="input-group-append" data-target="#date" data-toggle="datetimepicker">
                <div className="input-group-text"><i className="far fa-calendar-alt" /></div>
              </div>
            </div>
          </div>
          <div className="control-group">
            <div className="input-group time" id="time" data-target-input="nearest">
              <input type="text" className="form-control datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker" />
              <div className="input-group-append" data-target="#time" data-toggle="datetimepicker">
                <div className="input-group-text"><i className="far fa-clock" /></div>
              </div>
            </div>
          </div>
          <div className="control-group">
            <div className="input-group">
              <select className="custom-select form-control">
                <option selected>Guest</option>
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guest</option>
                <option value={3}>3 Guest</option>
                <option value={4}>4 Guest</option>
                <option value={5}>5 Guest</option>
                <option value={6}>6 Guest</option>
                <option value={7}>7 Guest</option>
                <option value={8}>8 Guest</option>
                <option value={9}>9 Guest</option>
                <option value={10}>10 Guest</option>
              </select>
              <div className="input-group-append">
                <div className="input-group-text"><i className="fa fa-chevron-down" /></div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn custom-btn" type="submit">Book Now</button>
          </div>
        </form>
      </div>

        </div>
        </>
    )
}


export default SignUp;
