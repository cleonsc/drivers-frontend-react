import React, { useState, useEffect } from "react";
import DriverDataService from "../services/DriverService.js";
import { Link } from "react-router-dom";

function DriversList() {
    const [drivers, setDrivers] = useState([]);
    const [currentDriver, setCurrentDriver] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        retrieveDrivers();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const retrieveDrivers = () => {
        DriverDataService.getAll()
            .then(response => {
                setDrivers(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const setActiveDriver = (driver, index) => {
        setCurrentDriver(driver);
        setCurrentIndex(index);
    };

    const findByName = () => {
        DriverDataService.findByName(searchName)
            .then(response => {
                setDrivers(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        value={searchName}
                        onChange={onChangeSearchName}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByName}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Drivers List</h4>

                <ul className="list-group">
                    {drivers &&
                        drivers.map((driver, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActiveDriver(driver, index)}
                                key={index}
                            >
                                {driver.name}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="col-md-6">
                {currentDriver ? (
                    <div>
                        <h4>Driver</h4>
                        <div>
                            <label>
                                <strong>Name:</strong>
                            </label>{" "}
                            {currentDriver.name}
                        </div>
                        <div>
                            <label>
                                <strong>Age:</strong>
                            </label>{" "}
                            {currentDriver.age}
                        </div>
                        <div>
                            <label>
                                <strong>Phone:</strong>
                            </label>{" "}
                            {currentDriver.phone}
                        </div>
                        <div>
                            <label>
                                <strong>E-mail:</strong>
                            </label>{" "}
                            {currentDriver.email}
                        </div>
                        <div>
                            <label>
                                <strong>Patent:</strong>
                            </label>{" "}
                            {currentDriver.patent}
                        </div>
                        <div>
                            <label>
                                <strong>Model:</strong>
                            </label>{" "}
                            {currentDriver.model}
                        </div>
                        <div>
                            <label>
                                <strong>year:</strong>
                            </label>{" "}
                            {currentDriver.year}
                        </div>

                        <Link
                            to={"/drivers/" + currentDriver.id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a driver...</p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default DriversList
