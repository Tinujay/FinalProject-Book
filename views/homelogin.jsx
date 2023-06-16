import React from 'react';
import Def from './default';

const HomeLogin = () => {
  return (
    <Def>
      <main
        style={{
          backgroundImage: "url(/images/movietheater.jpg)",
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="hero-title">Cinema Central</h1>
        <p className="hero-subtitle">Discover the latest movie reviews from our critics!</p>
        <div className="hero-action">
          <a href="/movies" className="btn btn-primary movie button">Explore</a>
        </div>
        <div className="login-signup-section">
          <h2>Login or Sign Up for Book Reviews</h2>
          <div className="login-container">
            <form>
              <h3>Login</h3>
              <div>
                <label htmlFor="login-email">Email:</label>
                <input type="email" id="login-email" name="email" />
              </div>
              <div>
                <label htmlFor="login-password">Password:</label>
                <input type="password" id="login-password" name="password" />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="signup-container">
            <form>
              <h3>Sign Up</h3>
              <div>
                <label htmlFor="signup-name">Name:</label>
                <input type="text" id="signup-name" name="name" />
              </div>
              <div>
                <label htmlFor="signup-email">Email:</label>
                <input type="email" id="signup-email" name="email" />
              </div>
              <div>
                <label htmlFor="signup-password">Password:</label>
                <input type="password" id="signup-password" name="password" />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
};

module.exports = HomeLogin
