import { useState } from "react";

export function CreateBusiness() {
  
    const [business, setBusiness] = useState([]);

  return (
    <div className="wrapper">
      <div className="section1-wrapper">
        <form
          className="form"
          onSubmit={(event: any) => {
            event.preventDefault();
            fetch("http://localhost:4000/business", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                name: event.target.name.value,
                phone: Number(event.target.phone.value),

                logo: event.target.logo.value,
              }),
            })
              .then((resp) => resp.json())
              .then((business) => setBusiness(business));
          }}
        >
          <h1>Create Business</h1>
          <input
            type="text"
            name="name"
            className="input-GS"
            placeholder="Name"
          />

          <input
            type="number"
            name="phone"
            className="input-GS"
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="logo"
            className="input-GS"
            placeholder="Logo"
          />
          <button className="button-GS">Create Business</button>
        </form>
      </div>
    </div>
  );
}
