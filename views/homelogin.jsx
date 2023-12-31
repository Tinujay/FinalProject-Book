import React from 'react';
import Def from './default';

function HomeLogin () {
  return (
    <Def>
       <main
            style={{
                background: "url(/images/login.jpg)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: "120vh",
                minWidth: "90vw",    
            }}           
        >
      
        <div className="title">
            <h1 className="login-title">My Book Universe 📕 </h1>
            <p className="login-subtitle">Discover a world of reading! Dive into your books, write book reviews after you've finished, and simply track your reading progress.</p>
        </div>

        <div className="login-signup-section">

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

                <br></br>

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
