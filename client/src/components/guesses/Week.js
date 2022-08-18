import React, {useState} from "react";
// import React { useState}from "react";

const Week = (props) => {

const [inputs, setInputs] = useState({
    [props.teamscore] : 0
    , [props.oppscore] : 0  
    // teamscore: 0,
    // oppscore: 0
})

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    }

// this thing is for passing it up to the parent component
props.onSaveWeekData(inputs);
// props.butt(inputs);
    return (

    <div className="profile-grid">
    <div><h2 className="profile-about">{`WEEK ${props.weeky}`}</h2></div>
    <h2 className="profile-top">{props.tix}</h2>
    <div className="profile-score">
    <div><h3 >{props.team} Score</h3></div>
    <input className="score" 
    type="number" 
    // name="teamscore"
    name={[props.teamscore]}
    value={inputs.props} //this seems like it should be inputs.[props.teamscore] or [inputs.props.teamscore]
    onChange={handleChange} 
    min="0"
    />
    <div><h3 >{props.tix.split(" ")[1]} Score</h3></div>
    <input className='score' 
    type="number" 
    name={[props.oppscore]}
    // name="oppscore"
    value={inputs.props}
    onChange={handleChange} 
    min="0"

    />
    </div>
    </div>
    )
}

export default Week;