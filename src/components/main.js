import React from "react";
import Nav from "./nav";
import Question from "../pages/question";
import Project from "../pages/project";
import Developer from "../pages/developer";
import RoadMap from "../pages/road-map";
import {Route} from "react-router-dom";


const Main = () => {
    return (
        <div>
            <div className="flex mt-10">
                <div className="w-3/12">
                    <Nav/>
                </div>
                <div className="w-6/12">
                    <Route exact path="/home" component={Question}/>
                    <Route path="/home/project" component={Project}/>
                    <Route path="/home/developer" component={Developer}/>
                    <Route path="/home/road-map" component={RoadMap}/>
                </div>
                <div className="w-3/12">
                    .
                </div>
            </div>
        </div>
    );
}

export default Main;