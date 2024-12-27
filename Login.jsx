import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [uname, setName] = useState("");
  const [password, setPass] = useState("");

  const checklogin = (e) => {
    e.preventDefault();
      onLogin(uname, password);
  };

  return (
    <div className="container">
      <form className="pavi" onSubmit={checklogin}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Username:</label>
              </td>
              <td>
                <input
                  type="text"
                  value={uname}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <input type="submit" value="Login" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
