import React, { useState, useEffect } from "react";
import DriverDataService from "../services/DriverService.js";

function Driver(props) {
    const initialDriverState = {
        id: null,
        name: "",
        age: 0,
        phone: "",
        email: "",
        patent: "",
        model: "",
        year: 0
    };
    const [currentDriver, setCurrentDriver] = useState(initialDriverState);
    const [message, setMessage] = useState("");

    const getDriver = id => {
        DriverDataService.get(id)
            .then(response => {
                setCurrentDriver(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getDriver(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        let { name, value } = event.target;
        if(['age','year'].includes(name))
            value = Number(value)
        setCurrentDriver({ ...currentDriver, [name]: value });
    };

    const updateDriver = () => {
        DriverDataService.update(currentDriver.id, currentDriver)
            .then(response => {
                console.log(response.data);
                setMessage("The driver was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
    };

    const deleteDriver = () => {
        DriverDataService.remove(currentDriver.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/drivers");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentDriver ? (
                <div className="edit-form">
                    <h4>Driver</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={currentDriver.name}
                                onChange={handleInputChange}
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                className="form-control"
                                id="age"
                                value={currentDriver.age}
                                onChange={handleInputChange}
                                name="age"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                value={currentDriver.phone}
                                onChange={handleInputChange}
                                name="phone"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                value={currentDriver.email}
                                onChange={handleInputChange}
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="patent">Patent</label>
                            <input
                                type="text"
                                className="form-control"
                                id="patent"
                                value={currentDriver.patent}
                                onChange={handleInputChange}
                                name="patent"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="model">Model</label>
                            <input
                                type="text"
                                className="form-control"
                                id="model"
                                value={currentDriver.model}
                                onChange={handleInputChange}
                                name="model"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year</label>
                            <input
                                type="number"
                                className="form-control"
                                id="year"
                                value={currentDriver.year}
                                onChange={handleInputChange}
                                name="year"
                            />
                        </div>
                    </form>
                    <button className="badge badge-danger mr-2" onClick={deleteDriver}>
                        Delete
                    </button>
                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateDriver}
                    >
                        Update
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                    <div>
                        <br />
                        <p>Please click on a Tutorial...</p>
                    </div>
                )}
        </div>
    )
}

export default Driver
