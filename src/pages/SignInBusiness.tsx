import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignInBusiness() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function signIn(data: any) {
    setUser(data.businessOwner);
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
          onSubmit={(e: any) => {
            e.preventDefault();
            fetch("http://localhost:4000/sign-in/businessOwner", {
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
                  navigate("/buisnesses");
                }
              });
          }}
        >
          <h1 className="h1">Sign In</h1>

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
            required
          />

          <button className="button-GS">
            <b>Sign In</b>
          </button>

          <p className="message">
            Not Registered Yet?{" "}
            <Link to="/sign-up-business" className="signup">
              SIGN UP
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
