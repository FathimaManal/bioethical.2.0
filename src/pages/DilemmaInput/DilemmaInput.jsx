import React from "react";
import StepProgress from "./StepProgress";
import BasicInfo from "./BasicInfo";
import Stakeholders from "./Stakeholders";
import DilemmaDescription from "./DilemmaDescription";
import Constraints from "./Constraints";
import ProceedButton from "./ProceedButton";
function DilemmaInput(){
    return (
        <div>
        <StepProgress />
        <BasicInfo />
        <Stakeholders />
        <DilemmaDescription />
        <Constraints />
        <ProceedButton />
        </div>
    );  
}
export default DilemmaInput;