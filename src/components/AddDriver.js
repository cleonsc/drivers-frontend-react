import React, { useState } from 'react'
import DriverDataService from '../services/DriverService.js';

function AddDriver() {
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
    const [driver, setDriver] = useState(initialDriverState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setDriver({ ...driver, [name]: value });
    };

    const saveDriver = () => {
        var data = {
            name: driver.name,
            age: Number(driver.age),
            phone: driver.phone,
            email: driver.email,
            patent: driver.patent,
            model: driver.model,
            year: Number(driver.year)
        };

        DriverDataService.create(data)
            .then(response => {
                setDriver({
                    id: response.data.id,
                    name: response.data.name,
                    age: response.data.age,
                    phone: response.data.phone,
                    email: response.data.email,
                    patent: response.data.patent,
                    model: response.data.model,
                    year: response.data.year
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newDriver = () => {
        setDriver(initialDriverState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newDriver}>
                        Add
                    </button>
                </div>
            ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={driver.name}
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
                                required
                                value={driver.age}
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
                                required
                                value={driver.phone}
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
                                required
                                value={driver.email}
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
                                required
                                value={driver.patent}
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
                                required
                                value={driver.model}
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
                                required
                                value={driver.year}
                                onChange={handleInputChange}
                                name="year"
                            />
                        </div>

                        <button onClick={saveDriver} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
        </div>
    )
}

export default AddDriver
