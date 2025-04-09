import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { HiOutlineLogin, HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="col-md-6 col-lg-4 col-sm-10 shadow rounded-4 p-4 bg-white">
          <div className="text-center mb-4">
            <HiOutlineLogin size={40} className="text-dark mb-2" />
            <h2>Welcome Back</h2>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email address</label>
              <div className="input-group">
                <span className="input-group-text bg-light"><HiOutlineMail /></span>
                <input
                  type="email"
                  className="form-control rounded-end-pill px-3 py-2"
                  id="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <div className="input-group">
                <span className="input-group-text bg-light"><HiOutlineLockClosed /></span>
                <input
                  type="password"
                  className="form-control rounded-end-pill px-3 py-2"
                  id="password"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="small">
                New here?{" "}
                <Link to="/register" className="text-decoration-none text-primary fw-semibold">
                  Register
                </Link>
              </span>
              <a href="#" className="text-decoration-none text-muted small">Forgot Password?</a>
            </div>
            <div className="d-grid">
              <button className="btn btn-dark rounded-pill py-2 category-btn" type="submit" disabled>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
