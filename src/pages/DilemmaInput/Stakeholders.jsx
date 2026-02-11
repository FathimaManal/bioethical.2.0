function Stakeholders(){
    return(
        <div style={{border:"1px dashed gray",padding:"10px",marginBottom:"20px"}}>
            <h2>Stakeholders Section</h2>
            <input name="local communities" type="checkbox" value="local communities" />Local Communities
            <input name="government agencies" type="checkbox" value="government agenecies"/>Government Agencies
            <input name="private landowners" type="checkbox" value="private landowners"/>Private Landowners
            <input name="industry/corporations" type="checkbox" value="industry/corporations"/>Industry/Corporations
            <input name="wildlife populations" type="checkbox" value="wildlife populations"/>Wildlife Populations
            <input name="indigenous peoples" type="checkbox" value="indigenous peoples"/>Indigenous Peoples
            <input name="NGOs" type="checkbox" value="NGOs"/>NGOs
            <input name="scientists/researchers" type="checkbox" value="scientists/researchers"/>Scientists/Researchers
            <input name="future generations" type="checkbox" value="future generations"/>Future Generations
            <input name="customStakeHolder" placeholder="Add custom stakeholder" type="text"/>
            {/* the button should probably have an onClick JS event handler to deal with whatever the use add in the textbox  */}
            <button>Add</button>
        </div>
    )
}
export default Stakeholders;