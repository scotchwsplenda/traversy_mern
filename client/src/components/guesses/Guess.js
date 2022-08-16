import React, { Fragment } from 'react';

const Guess = (props) => {

return <Fragment>

    
<h1 class="large text-primary">Sign Up</h1>
<p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
<form class="form" action="create-profile.html">
  <div class="form-group">
    <input type="text" placeholder="Name" name="name" required />
  </div>
  <div class="form-group">
    <input type="email" placeholder="Email Address" name="email" />
    <small class="form-text"
      >This site uses Gravatar so if you want a profile image, use a
      Gravatar email</small
    >
  </div>
  <div class="form-group">
    <input
      type="password"
      placeholder="Password"
      name="password"
      minLength="6"
    />
  </div>
  <div class="form-group">
    <input
      type="password"
      placeholder="Confirm Password"
      name="password2"
      minLength="6"
    />
  </div>
  <input type="submit" class="btn btn-primary" value="Register" />
</form>
<p class="my-1">
  Already have an account? <a href="login.html">Sign In</a>
</p>
<form action="" method="post">

    <h1> Unique Name* </h1>
    <h2> *This is a family website, please keep your vulgarity to a dull roar. Also, the name must be unique </h2>

    <table class="table table-striped table-bordered border-primary">
        <tr>
            <th> Week </th>
            <th> Team </th>
            <th> Opponent </th>
        </tr>
        <tr>
            <td> "season.0"</td>
            <td> "form.Hawk_Wk1" </td>
            <td> "form.Opp_Wk1"</td>
        </tr>
        <tr>
            <td> "season.1"</td>
            <td> "form.Hawk_Wk2" </td>
            <td> "form.Opp_Wk2"</td>
        </tr>
        <tr>
            <td> "season.2"</td>
            <td> "form.Hawk_Wk3" </td>
            <td> "form.Opp_Wk3"</td>
        </tr>
        <tr>
            <td> "season.3"</td>
            <td> "form.Hawk_Wk4" </td>
            <td> "form.Opp_Wk4"</td>
        </tr>
        <tr>
            <td> "season.4"</td>
            <td> "form.Hawk_Wk5" </td>
            <td> "form.Opp_Wk5"</td>
        </tr>
        <tr>
            <td> "season.5"</td>
            <td> "form.Hawk_Wk6" </td>
            <td> "form.Opp_Wk6"</td>
        </tr>
        <tr>
            <td> "season.6"</td>
            <td> "form.Hawk_Wk7" </td>
            <td> "form.Opp_Wk7"</td>
        </tr>
        <tr>
            <td> "season.7"</td>
            <td> "form.Hawk_Wk8" </td>
            <td> "form.Opp_Wk8"</td>
        </tr>
        <tr>
            <td> "season.8"</td>
            <td> "form.Hawk_Wk9" </td>
            <td> "form.Opp_Wk9"</td>
        </tr>
        <tr>
            <td> "season.9"</td>
            <td> "form.Hawk_Wk10" </td>
            <td> "form.Opp_Wk10"</td>
        </tr>
        <tr>
            <td> "season.10"</td>
            <td> "form.Hawk_Wk11" </td>
            <td> "form.Opp_Wk11"</td>
        </tr>
        <tr>
            <td> "season.11"</td>
            <td> "form.Hawk_Wk12" </td>
            <td> "form.Opp_Wk12"</td>
        </tr>
        <tr>
            <td> "season.12"</td>
            <td> "form.Hawk_Wk13" </td>
            <td> "form.Opp_Wk13"</td>
        </tr>
        <tr>
            <td> "season.13"</td>
            <td> "form.Hawk_Wk14" </td>
            <td> "form.Opp_Wk14"</td>
        </tr>
        <tr>
            <td> "season.14"</td>
            <td> "form.Hawk_Wk15" </td>
            <td> "form.Opp_Wk15"</td>
        </tr>
        <tr>
            <td> "season.15"</td>
            <td> "form.Hawk_Wk16" </td>
            <td> "form.Opp_Wk16"</td>
        </tr>
        <tr>
            <td> "season.16"</td>
            <td> "form.Hawk_Wk17" </td>
            <td> "form.Opp_Wk17"</td>
        </tr>
        <tr>
            <td> "season.17"</td>
            <td> "form.Hawk_Wk18" </td>
            <td> "form.Opp_Wk18"</td>
        </tr>
    </table>
    <h3> If you like I can send you an email at the midpoint
    <p> and end of the season so you can check your Accuracy score "form.email" </p> </h3>

    <input type="submit"/>
</form>

</Fragment>
}


export default Guess