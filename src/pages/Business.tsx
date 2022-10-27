import { useEffect, useState } from "react";
import "../styles/Buisness.css";

export function Business() {
  const [buisnesses, setBuisnesses] = useState([
    { name: "landi", category: "food" },
    {
      name: "aidi",
      category: "music",
    },
  ]);
  const [buisnessesToShow, setBuisnessesToShow] = useState([]);
  const [categoriesToFilter, setCategoriesToFilter] = useState([]);

  const [search, setSearch] = useState("");

  function selectCategoriesForFiltering(data) {
    if (categoriesToFilter.length === 0) {
      let array = structuredClone(categoriesToFilter);
      array.push(data);
      setCategoriesToFilter(array);
    } else {
      if (categoriesToFilter.includes(data)) {
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

  const filteredBuisnesses = buisnesses.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
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
        {categoriesToFilter.length > 0 ? (
          <main>
            {filteredBuisnesses.map((item) => (
              <h1>{item.name}</h1>
            ))}
          </main>
        ) : (
          <>
            <section className="grid-section">
              <div id="container">
                <div className="product-details">
                  <h1>Hair Dresser</h1>
                  <span className="hint-star star">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </span>

                  <p className="information">
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nulla, nisi!.
                  </p>

                  <div className="control">
                    <button className="btn">
                      <span className="buy">Visit Page</span>
                    </button>
                  </div>
                </div>

                <div className="product-image">
                  <img
                    src="https://images.pexels.com/photos/2076932/pexels-photo-2076932.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />

                  <div className="info">
                    <h2> Description</h2>
                    <ul>
                      <li>
                        <strong>Height : </strong>5 Ft{" "}
                      </li>
                      <li>
                        <strong>Shade : </strong>Olive green
                      </li>
                      <li>
                        <strong>Decoration: </strong>balls and bells
                      </li>
                      <li>
                        <strong>Material: </strong>Eco-Friendly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="container">
                <div className="product-details">
                  <h1>Hair Dresser</h1>
                  <span className="hint-star star">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </span>

                  <p className="information">
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nulla, nisi!.
                  </p>

                  <div className="control">
                    <button className="btn">
                      <span className="buy">Visit Page</span>
                    </button>
                  </div>
                </div>

                <div className="product-image">
                  <img
                    src="https://images.pexels.com/photos/2076932/pexels-photo-2076932.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />

                  <div className="info">
                    <h2> Description</h2>
                    <ul>
                      <li>
                        <strong>Height : </strong>5 Ft{" "}
                      </li>
                      <li>
                        <strong>Shade : </strong>Olive green
                      </li>
                      <li>
                        <strong>Decoration: </strong>balls and bells
                      </li>
                      <li>
                        <strong>Material: </strong>Eco-Friendly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </section>
  );
}
