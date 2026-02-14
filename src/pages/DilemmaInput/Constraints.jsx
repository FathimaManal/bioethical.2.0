function Constraints(){
    return(
        <div style={{border:"1px dashed gray",padding:"10px",marginBottom:"20px"}}>
            <h2>Constraints Section</h2>
            <div>
                <p>Select any constraints that apply to this dilemma</p>
                <input type="checkbox" name="legal constraints" value="legal constraints"/>Legal Contraints
                <input type="checkbox" name="financial constraints" value="financial constraints"/>Financial Constraints
                <input type="checkbox" name="cultural constraints" value="cultural constraints"/>Cultural Constraints
                <input type="checkbox" name="scientific uncertainty" value="scientific uncertainty"/>Scientific Uncertainty
                <h3>Other Constraints</h3>
                <textarea placeholder="Describe any other relevant constraints" cols="100" ></textarea>
            </div>
        </div>
    )
}
export default Constraints;