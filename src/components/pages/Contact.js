import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Page</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
    
    <div className="form-floating mb-2">
      <label for="floatingTextarea2">Comments</label>
        <textarea className="form-control" style={{height:'100px'}}></textarea>
    </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          
        </form>
      </div>
    </div>
  );
};

export default Contact;
