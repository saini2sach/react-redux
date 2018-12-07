
import React from "react";
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import './../activity.css';
import CategoryItem from "./categoryItem";


const ActivityDetails = () => {
    return (
        <Router>
            <div className="m-4 px-4 row activity-details clearfix">
                <div className="col-4 first-col">
                    <NavLink to="/provider/item" activeClassName="active" className="first-col-nav">Item</NavLink>
                    <NavLink to="/provider/hobby" activeClassName="active" className="first-col-nav">Hobby</NavLink>
                    <NavLink to="/provider/movie" activeClassName="active" className="first-col-nav">Movie</NavLink>
                </div>
                <div className="col-8">
                    <Switch>
                        <Route path="/provider/item" component={ CategoryItem}></Route>
                        <Route path="/provider/hobby" component={ () => <div>
                                                                    <p>Playing badminton</p>
                                                                    <p>Watching Movies</p>
                                                                    <p>Sleeping</p>
                                                                </div>}></Route>
                        <Route path="/provider/movie" component={ () => <div>
                                                                    <p>3 Idiots</p>
                                                                    <p>Suryavansam</p>
                                                                    <p>ROb0t</p>
                                                                </div>}></Route>
                        <Route path="/provider/*" component={ () => <p>Activity not found</p>}></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default ActivityDetails;