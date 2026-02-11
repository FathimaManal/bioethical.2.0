function BasicInfo(){
    return(
        <div style={{border:"1px dashed gray",padding:"10px",marginBottom:"20px"}}>
            <h2>Basic Info Section</h2>
            <div>
                <label for="dilemma">
                    <h3>Dilemma Title</h3>
                    <input name="dilemma" id="dilemma" type="text" placeholder="e.g., Reintroduction of apex predators"/>
                </label>                
                <label for="domain">
                    <h3>Domain</h3>
                    <select name="domain" id="domain">
                        <option value="conservation biology">Conservation Biology</option>
                        <option value="environmental policy">Environmental Policy</option>
                        <option value="wildlife management">Wildlife Management</option>
                        <option value="marine conservation">Marine Conservation</option>
                        <option value="climate adaptation">Climate Adaptation</option>
                        <option value="other">Other</option> 
                    </select>
                </label>
                <label for="geoContext">
                    <h3>Geographic Context</h3>
                    <input name="geoContext" id="geoContext" type="text" placeholder="e.g., Pacific Northwest, USA"/>
                </label>
            </div>
        </div>

    )
}
export default BasicInfo;







