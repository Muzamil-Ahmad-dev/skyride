import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="col-md-6 col-lg-4 col-sm-10 shadow rounded-4 p-4 bg-white">
          <div className="text-center mb-4">
            <HiOutlineUserAdd size={40} className="text-dark mb-2" />
            <h2>Create Account</h2>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
              <div className="input-group">
                <span className="input-group-text bg-light"><FaUser /></span>
                <input
                  type="text"
                  className="form-control rounded-end-pill px-3 py-2"
                  id="name"
                  placeholder="Your full name"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email address</label>
              <div className="input-group">
                <span className="input-group-text bg-light"><FaEnvelope /></span>
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
                <span className="input-group-text bg-light"><FaLock /></span>
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
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none text-primary fw-semibold">
                  Login
                </Link>
              </span>
            </div>
            <div className="d-grid">
              <button className="btn btn-dark rounded-pill py-2 category-btn" type="submit" disabled>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
