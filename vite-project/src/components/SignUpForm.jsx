import { useState } from "react";

export default function SignUpForm() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello 👋");

      try {
        const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
  method: "POST",
  body: JSON.stringify({ username, password })})
const result = await response.json()
console.log(result)

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      {/* {successMessage && <p className="success">{successMessage}</p>} */}
      <form onSubmit={handleSubmit}>
        <label>
          Username(6 characters):{" "}
          
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        {username.length !== 8 &&(
            <p style={{color: "blue" }}> Username should be a latter not a  Numbers</p>
        
        )}
        <label>
          Password (8 characters must be one capitle  ):{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
        </label>
        <button>Submit</button>
      </form>
    </>
  );
  }
