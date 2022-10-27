import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function SignUpBusiness() {
  const [user, setUser] = useState(null);

  function signIn(data: { user: any; token: string }) {
    setUser(data.user);
    localStorage.token = data.token;
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("token");
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:4000/validate/businessOwner", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signIn(data);
          }
        });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="section1-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:4000/sign-up/businessOwner", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                if (data.error) {
                  alert(data.error);
                } else {
                  signIn(data);
                }
              });
          }}
        >
          <h1 className="h1">Sign Up</h1>

          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className="input-GS"
            required
          />
          <input
            id="Password"
            name="password"
            type="password"
            placeholder="Password"
            className="input-GS"
          />

          <button className="button-GS">
            <b>Register</b>
          </button>
          <p className="message">
            Registered?{" "}
            <Link to="/sign-in-business" className="signup">
              SIGN IN
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
