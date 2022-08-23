import React from 'react';

const About = () => {
    return (
        <div>
            <h1> Welcome To NFL Guesser! </h1>
            <p></p>
            <table >
                <tr />What is this?
                <tr />What does it mean?
                <tr />How does it work?
                <tr />Why am I here?
            </table>
            <h2>
                <ul>
                    <p />

                    <ol><li>This website presents an opportunity to prognosticate on the scores of games in the upcoming NFL season. The exercise is called <a href="/guess">Guess</a>. </li>
                        <li>Prognostications must be made prior to the beginning of the season and encompass the entire season. You can compare what you prognosticated with what other dudes prognosticated. This exercise is called <a href="/submissions">Submissions</a>. </li>

                        <li>When the time space continuum carries us from the realm of prognostication into the realm of reflection (ie I haven't made this page yet) you can compare prognostications with cold, hard, refreshing reality (insofar as reality is reflected in the scores of football games). This exercise is called <a href="/accuracy">Accuracy</a>. <p>Accuracy will be graded using a technically advanced algorithm made from particularly sophisticated math. You may be curious to know that the math algorithm works thusly: </p></li>
                        <table >
                            <tr><td>How closely you progged the point differential ie the spread</td></tr>
                            <tr><td>How closely you progged total points scored ie the overunder</td></tr>
                        </table>
                    </ol>
                    <li>Below is the grading rubric. The final grade is your combined performance on items (a) and (b). For example if your prognosticated game score was a 24-27 (OverUnder: 51, Spread: 3) loss and the actual game score was a 30-33 (OverUnder: 63, Spread: 3) loss your prognostication score would be 185:</li>
                    <table>
                        <tr> (a) OverUnder: 63-51=12 {'==>'} 85</tr>
                        <tr> (b) Spread: 3-3=0 {'==>'} 100</tr>
                    </table>
                    <li /> It is worth noting an incorrect guess on the outcome of the game (guessing a win when the team loses) results in a score of 0 for the spread. Also note that ties are treated as losses in this game because this is football not brainball.
                </ul>
        
            <table class="table table-striped table-bordered border-primary">

                <tr>
                    <th> Rubric</th>
                    <th> Grade </th>
                </tr>
                <tr>
                    <td> 0</td>
                    <td> 100 </td>
                </tr>
                <tr>
                    <td>&lt; 3.5 </td>
                    <td> 95 </td>
                </tr>
                <tr>
                    <td>&lt; 7.5 </td>
                    <td> 90 </td>
                </tr>
                <tr>
                    <td>&lt; 10.5 </td>
                    <td> 85 </td>
                </tr>
                <tr>
                    <td>&lt; 14.5 </td>
                    <td> 80 </td>
                </tr>
                <tr>
                    <td>&lt; 21.5 </td>
                    <td> 75 </td>
                </tr>
            </table>
            
            </h2>
            <li>Please note this website uses the term 'dude' strictly in the non-gendered sense.</li>
            <li>Many thanks to LX Miller for their sagacious advice on this project.</li>
        </div>

    );
}

export default About;