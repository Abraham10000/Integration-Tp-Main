import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Module from "../Module";
import { Tbody } from "../tr";

export function EmployeeList(props) {
  const [result,setResult] = useState([]);
  useEffect(()=> {
    const promise = axios.get("https://jsonplaceholder.typicode.com/users");
  promise
    .then((response) => {
      console.log(response);
      setResult(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  },[])
  
  return (
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
      <div className="dataTable-top"> 
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5">5</option>
              <option value="10" selected="">
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <div className="dataTable-search">
          <input
            className="dataTable-input"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className="dataTable-container">
        <table className="table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>ID</th>
              <th>Address</th>
              <th>Town</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>ID</th>
              <th>Address</th>
              <th>Town</th>
            </tr>
          </tfoot>
          <tbody>
             {result.map((item) => (
              <Tbody name={item.name} username={item.username} email={item.email} address={item.address.city} company={item.company.name} website={item.website}  />
            ))}   
          </tbody>
        </table>
      </div>
      <div className="dataTable-bottom">
        <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
        <nav className="dataTable-pagination">
          <ul className="dataTable-pagination-list">
            <li className="active">
              <a href="#" data-page="1">
                1
              </a>
            </li>
            <li className="">
              <a href="#" data-page="2">
                2
              </a>
            </li>
            <li className="">
              <a href="#" data-page="3">
                3
              </a>
            </li>
            <li className="">
              <a href="#" data-page="4">
                4
              </a>
            </li>
            <li className="">
              <a href="#" data-page="5">
                5
              </a>
            </li>
            <li className="">
              <a href="#" data-page="6">
                6
              </a>
            </li>
            <li className="pager">
              <a href="#" data-page="2">
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
