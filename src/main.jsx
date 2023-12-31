import React from "react";
import ReactDOM from "react-dom"
import "./index.css";
import SideBAR from "./components/SideBAR";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addstudent from "./components/Students/Addstudent";
import Dashboard from "./components/Dashboard";
import MarkAttendence from "./components/MarkAttendence";
import ViewAttendence from "./components/ViewAttendance/ViewAttendence";
import Reports from "./components/Reports";
import Fine from "./components/Fine";
import SectionA1 from "./components/Classes/FirstYear/SectionA";
import SectionA2 from "./components/Classes/SecondYear/SectionA";
import SectionA3 from "./components/Classes/ThridYear/SectionA";
import SectionB1 from "./components/Classes/FirstYear/SectionB";
import SectionB2 from "./components/Classes/SecondYear/SectionB";
import SectionB3 from "./components/Classes/ThridYear/SectionB";
import DeleteStudent from "./components/Students/DeleteStudent";
import ModifyStudent from "./components/Students/ModifyStudent";
import AddUser from "./components/Users/AddUser";
import DeleteUser from "./components/Users/DeleteUser";
import ModifyUser from "./components/Users/ModifyUser";
import Error from "./components/Error";
import PermissionList from "./components/Users/PermissionList";
import ModifyStu from "./components/Students/ModifyStu";
import Modification from "./components/Users/Modification";
import FirstSections from "./components/ViewAttendance/FirstSections";
import SecondSections from "./components/ViewAttendance/SecondSections";
import ThirdSections from "./components/ViewAttendance/ThirdSections";


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />}> </Route>
      <Route path="/Dashboard" element={<Dashboard />}> </Route>
      <Route path="/MarkAttendence" element={<MarkAttendence />}> </Route>
      <Route path="/ViewAttendence" element={<ViewAttendence />}></Route>
      <Route path="/ViewAttendence/FirstSections" element={<FirstSections />} />
      <Route path="/ViewAttendence/SecondSections" element={<SecondSections />} />
      <Route path="/ViewAttendence/ThirdSections" element={<ThirdSections />} />
      <Route path="/ViewAttendence/FirstSections/SectionA" element={<SectionA1 />} />
      <Route path="/ViewAttendence/FirstSections/SectionB" element={<SectionB1 />} />
      <Route path="/ViewAttendence/SecondSections/SectionA" element={<SectionA2 />} />
      <Route path="/ViewAttendence/SecondSections/SectionB" element={<SectionB2 />} />
      <Route path="/ViewAttendence/ThirdSections/SectionA" element={<SectionA3 />} />
      <Route path="/ViewAttendence/ThirdSections/SectionB" element={<SectionB3 />} />
      <Route path="/Reports" element={<Reports />}> </Route>
      <Route path="/Fine" element={<Fine />}> </Route>
      {/* Classes */}
      <Route path="/classes" >
        <Route path="first-Year" >
          <Route path="section-A" element={<SectionA1 />} />
          <Route path="section-B" element={<SectionB1 />} />
        </Route>

        <Route path="second-Year" >
          <Route path="section-A" element={<SectionA2 />} />
          <Route path="section-B" element={<SectionB2 />} />
        </Route>

        <Route path="third-Year">
          <Route path="section-A" element={<SectionA3 />} />
          <Route path="section-B" element={<SectionB3 />} />
        </Route>
      </Route>

      {/* Students */}
      <Route path="Students" >
        <Route path="Addstudent" element={<Addstudent />} />
        <Route path="delete-Student" element={<DeleteStudent />} />
        <Route path="modify-Student" element={<ModifyStudent />} />
        <Route path="modifystu" element={<ModifyStu />} />
      </Route>

      {/* Users */}
      <Route path="Users" >
        <Route path="add-User" element={<AddUser />} />
        <Route path="delete-User" element={<DeleteUser />} />
        <Route path="modify-User" element={<ModifyUser />} />
        <Route path="modification" element={<Modification />} />
        <Route path="permissionList" element={<PermissionList />} />
      </Route>


      {/* Error */}
      <Route path="*" element={<Error />}> </Route>










      {/* <Route path="/Addstudent" element={ <Addstudent /> }></Route> */}
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);
