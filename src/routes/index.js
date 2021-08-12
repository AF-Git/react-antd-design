import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Information from '../views/Information'
import UserManager from '../views/UserManager' 
import Message from '../views/Message' 
import GroupSend from '../views/GroupSend' 
import MaterialManager from '../views/MaterialManager'
import AddImageText from '../views/AddImageText'
import EditImageText from '../views/EditImageText'
import UserStatistics from '../views/UserStatistics' 
import MenuStatistics from '../views/MenuStatistics' 
import MessageStatistics from '../views/MessageStatistics'
import CustomizeMenu from '../views/CustomizeMenu'
import ServiceList from '../views/ServiceList'
import AddService from '../views/AddService'
import EditService from '../views/EditService'
import CreateAudio from '../views/CreateAudio'
import CreateVideo from '../views/CreateVideo'
import ImageSelect from '../components/ImageSelect'
import Demo from '../views/Demo'
import CustomMenu from '../hooks/CustomMenu'
const CRouter = () => {
    
    return (
        <Switch>
            <Route path='/information' component={Information}></Route>
            <Route path='/userManager' component={UserManager}></Route>
            <Route path='/message' component={Message}></Route>
            <Route path='/groupSend' component={GroupSend}></Route>
            <Route path='/materialManager' component={MaterialManager}></Route>
            <Route path='/addImageText' component={AddImageText}></Route>
            <Route path='/editImageText' component={EditImageText}></Route>
            <Route path='/userStatistics' component={UserStatistics}></Route>
            <Route path='/menuStatistics' component={MenuStatistics}></Route>
            <Route path='/messageStatistics' component={MessageStatistics}></Route>
            <Route path='/customizeMenu' component={CustomizeMenu}></Route>
            <Route path='/serviceList' component={ServiceList}></Route>
            <Route path='/addService' component={AddService}></Route>
            <Route path='/editService' component={EditService}></Route>
            <Route path='/imageSelect' component={ImageSelect}></Route>
            <Route path='/createAudio' component={CreateAudio}></Route>
            <Route path='/createVideo' component={CreateVideo}></Route>
            <Route path='/demo' component={Demo}></Route>
            <Route path='/customMenu' component={CustomMenu}></Route>
            <Route render={() => <Redirect to="/information" />} />
        </Switch>
    );
};

export default CRouter;
