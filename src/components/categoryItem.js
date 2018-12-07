
import React from 'react';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';

const categoryItem = () => {
    return (
            <Router>
                <div>
                    <div className="first-col col-6">
                        <NavLink to='/provider/item/1' exact activeClassName="active" className="first-col-nav">Grocery</NavLink>
                        <NavLink to='/provider/item/2' exact activeClassName="active" className="first-col-nav">Kitchen</NavLink>
                        <NavLink to='/provider/item/3' exact activeClassName="active" className="first-col-nav">Other</NavLink>
                    </div>
                <Switch>
                    <div className="col-6">
                        <Route path='/provider/item/1' component={ () => <div>
                                                                <p>Vegetables</p>
                                                                <p>Salt</p>
                                                                <p>Bakery item</p>
                                                            </div>}></Route>
                        <Route path='/provider/item/2' component={ () => <div>
                                                                <p>Crockery</p>
                                                                <p>Bowls</p>
                                                                <p>Gas</p>
                                                            </div>}></Route>
                        <Route path='/provider/item/3' component={ () => <div>
                                                                <p>Biscuits</p>
                                                                <p>Juices</p>
                                                                <p>Snacks</p>
                                                            </div>}></Route>
                        <Route component={ () => <p>Category item not found</p>}></Route>
                    </div>
                </Switch>
                </div>
            </Router>
    )
}

export default categoryItem;