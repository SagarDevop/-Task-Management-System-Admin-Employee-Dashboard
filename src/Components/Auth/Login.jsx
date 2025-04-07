import React, { useState } from "react";

function Login({handelLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handelLogin(email,password)
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-dark"
        style={{ height: "100vh"}}
      >
        <form
          onSubmit={handleSubmit}
          className="w-25 h-60 text-white d-flex  flex-column border border-black bg-dark-subtle m-3 p-3 rounded-3"
        >
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
                
            }}
            required
            className="border-1 m-2 mt-5 p-2 rounded-3"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
                
            }}
            className="border-1 m-4 p-2 rounded-3"
            type="password"
            placeholder="Enter your password"
          />
          <button className="border-2 m-5 p-1 rounded-3 bg-dark text-white">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
