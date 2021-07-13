import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/LocationProvider";
// import { AnimalContext } from "../animal/AnimalProvider";
// import { CustomerContext } from "../customer/CustomerProvider";
import "./Location.css";
import { useHistory } from "react-router-dom";

export const LocationForm = () => {
    const { addLocation, getLocations } = useContext(LocationContext);
    // const { locations, getLocations } = useContext(LocationContext);
    // const { customers, getCustomers } = useContext(CustomerContext);

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [location, setLocation] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0,
    });

    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
        getLocations();
    }, []);

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newLocation = { ...location };
        /* Location is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newLocation[event.target.id] = event.target.value;
        // update state
        setLocation(newLocation);
    };

    const handleClickSaveLocation = (event) => {
        event.preventDefault(); //Prevents the browser from submitting the form

        const locationId = parseInt(location.locationId);
        const customerId = parseInt(location.customerId);

        // if (locationId === 0 || customerId === 0) {
        // window.alert("Please select a location and a customer");
        // } else {
        //Invoke addLocation passing the new Location object as an argument
        //Once complete, change the url and display the Location list

        const newLocation = {
            name: location.name,
            address: location.address
        };
        addLocation(newLocation).then(() => history.push("/locations"));
        
    };

    return (
        <form className="locationForm">
        <h2 className="locationForm__title">New Location</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="name">Location name:</label>
            <input
                type="text"
                id="name"
                required
                autoFocus
                className="form-control"
                placeholder="Location name"
                value={location.name}
                onChange={handleControlledInputChange}
            />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="name">Location Address:</label>
            <input
                type="text"
                id="address"
                required
                autoFocus
                className="form-control"
                placeholder="Location address"
                value={location.address}
                onChange={handleControlledInputChange}
            />
            </div>
        </fieldset>
        {/* <fieldset>
            <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select
                name="locationId"
                id="locationId"
                className="form-control"
                value={animal.locationId}
                onChange={handleControlledInputChange}
            >
                <option value="0">Select a location</option>
                {locations.map((l) => (
                <option key={l.id} value={l.id}>
                    {l.name}
                </option>
                ))}
            </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="customerId">Customer: </label>
            <select
                name="customer"
                id="customerId"
                className="form-control"
                value={animal.customerId}
                onChange={handleControlledInputChange}
            >
                <option value="0">Select a customer</option>
                {customers.map((c) => (
                <option key={c.id} value={c.id}>
                    {c.name}
                </option>
                ))}
            </select>
            </div>
        </fieldset> */}
        <button className="btn btn-primary" onClick={handleClickSaveLocation}>
            Save Location
        </button>
        </form>
    );
};
