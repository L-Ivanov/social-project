import Google from "./components/Google";
import React from "react";
import PicturesGallery from "./components/PicturesGallery";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AdditionalNav from "./components/AdditionalNav";
import MainPage from "./components/MainPage";

require('dotenv').config()
function App() {
    return (
        <BrowserRouter>

                <div className="form-control">
                        <Route path='/' exact component={MainPage}/>
                        <Route path='/' exact component={Google}/>
                    <Switch>
                        <Route path="/gallery/:username" exact component={PicturesGallery }/>
                    </Switch>
                    <Switch>
                        <Route path='/' exact component={AdditionalNav}/>
                    </Switch>

                </div>
        </BrowserRouter>

    );
}

export default App;
