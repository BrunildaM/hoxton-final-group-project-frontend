import { useEffect, useState } from "react";
import "../styles/Buisness.css";

export function Buisness() {
  const [buisnesses, setBuisnesses] = useState([]);
  const [categoriesToFilter, setCategoriesToFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/business")
      .then((res) => res.json())
      .then((businessesFromdb) => setBuisnesses(businessesFromdb));
  }, []);

  function selectCategoriesForFiltering(data: any) {
    if (categoriesToFilter.length === 0) {
      let array = structuredClone(categoriesToFilter);
      array.push(data);
      setCategoriesToFilter(array);
    } else {
      //@ts-ignore
      if (categoriesToFilter.includes(data)) {
        //@ts-ignore
        let index = categoriesToFilter.indexOf(data);
        let array = structuredClone(categoriesToFilter);
        array.splice(index, 1);
        setCategoriesToFilter(array);
      } else {
        let array = structuredClone(categoriesToFilter);
        array.push(data);
        setCategoriesToFilter(array);
      }
    }
  }

  const filteredBuisnesses = buisnesses.filter((business) =>
    business.name.toLowerCase().includes(search.toLowerCase())
  );

  /*function collectedFilter() {
    const array = [];
    for (const iterator of categoriesToFilter) {
      const filt = buisnesses.filter((item) => item.category === iterator);
      array.push(filt);
    }
    for (const iterator of namesToFilter) {
      const filt1 = array.filter(
        (item) => item.name.toLowerCase() === filt1.toLowerCase()
      );
    }
    setBuisnessesToShow(array);
  }*/

  /*useEffect(() => {
    fetch("http://localhost:4000/business", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => setBuisnesses(data));
  }, []);*/

  return (
    <section className="main-section">
      <nav className="navbar">s</nav>
      <aside className="filter-section">
        <section className="categories">
          <input
            type="checkbox"
            name="hi"
            id=""
            value={"music"}
            className="checkbox"
            onChange={(e) => {
              selectCategoriesForFiltering(e.target.value);
            }}
          />
          <h1>music</h1>
          <input
            type="checkbox"
            name="hi"
            id=""
            value={"food"}
            className="checkbox"
            onClick={(e) => {
              //@ts-ignore
              selectCategoriesForFiltering(e.target.value);
            }}
          />
          <h1>food</h1>
        </section>
      </aside>
      <main className="main">
        <nav className="search-bar">
          <form className="search" action="">
            <input
              type="search"
              placeholder="Search for buisnesses.."
              required
              className="search-input"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </nav>
        <section className="grid-section">
          {filteredBuisnesses.map((business) => (
            <div id="container">
              <div className="product-details">
                <h1>{business.name}</h1>
                <span className="hint-star star">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p className="information">
                  {business.category.services.map((service) => (
                    <p>{service.name}</p>
                  ))}
                </p>

                <div className="control">
                  <button className="btn">
                    <span className="buy">Visit Page</span>
                  </button>
                </div>
              </div>

              <div className="product-image">
                <img src={business.logo} alt="" />

                <div className="info">
                  <h2> Description</h2>
                  <ul>
                    <li>
                      <strong>Category : </strong>{" "}{business.category.name}
                    </li>
                    <li>
                      <strong>Phone number : </strong>{" "}{business.phoneNumber}
                    </li>
                    <li>
                      <strong>Address: </strong>{" "}Tirana, Albania
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
}
