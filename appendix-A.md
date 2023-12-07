# Part I - Models
## models / flights.js
```javascript
let profiles = [];

function getAllProfiles() {
    return profiles;
}

function addProfile(profileData) {
    profiles.push(profileData);
}

module.exports = { getAllProfiles, addProfile };
```

# Part II - Views
## addFlight.ejs
```ejs
<!DOCTYPE html>
<html>
<head>
    <title>Registry</title>
</head>
<body>
    <h1>Registration Page</h1>
    <form action="/Profiles/add" method="post">
        <div>
            <label for="name">Name:</label><br>
			<input type="text" id="name" name="name" required><br>
        </div>
        <div>
            <label for="hometown">Hometown:</label><br>
			<input type="text" id="hometown" name="hometown" required><br>
        </div>
        <div>
            <label for="birthdate">Date of Birth (DD/MM/YYYY):</label><br>
			<input type="text" id="birthdate" name="birthdate" required><br>
        </div>
        <div>
            <label for="favmovie">Favorite Movie:</label><br>
			<input type="text" id="favmovie1" name="favmovie" required><br>
        </div>
        <div>
            <label for="hobby">Favorite Activities:</label><br>
			<input type="text" id="hobby" name="hobby" required><br>
        </div>
        <button type="submit">Submit Profile</button>
    </form>
    <a href="/profiles">Back to Flights List</a>
</body>
</html>
```


## index.ejs
```ejs
<!DOCTYPE html>
<html>
<head>
    <title>Profile List</title>
</head>
<body>
    <h1>Profile List</h1>
    <% if(profiles.length > 0){ %>
        <ul>
            <% flights.forEach(function(flight) { %>
                <li><%= profile.name %> - <%= profile.hometown %> to <%= profile.birthdate %> to <%= profile.favmovie %> to <%= profile.hobby %></li>
            <% }); %>
        </ul>
    <% } else { %>
        <p>No profiles added yet.</p>
    <% } %>
    <a href="/profiles/add">Sign Up</a>
</body>
</html>
```

# Part III - Controller
## controllers/flightController.js
```javascript
// -----------------------------------------------
// controllers/flightController.js
// -----------------------------------------------

const ProfileModel = require('../models/profile');

exports.addProfileForm = (req, res) => {
    res.render('addProfile');
};

exports.addProfile = (req, res) => {
    FlightModel.addProfile(req.body);
    res.redirect('');
};

exports.listFlights = (req, res) => {
    let profiles = FlightModel.getAllFlights();
    res.render('index', { profiles });
};
```

# Route
## routes/profile.js
```javascript
// --
// routes/flight.js
// --

var express = require('express');
var router = express.Router();
var profileController = require('../controllers/profilecontroller');

router.get('/add', profileController.addProfileForm);
router.post('/add', profileController.addProfile);
router.get('/', profileController.listProfiles);

module.exports = router;
```

# Part IV - Adopt your new Component
## app.js
```javascript
// ---
// app.js
// ---
var profileRouter = require('./routes/profile');
...
app.use(express.urlencoded({ extended: false }));
...
app.use('/profiles', profileRouter);
```
