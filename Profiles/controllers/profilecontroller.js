// -----------------------------------------------
// controllers/flightController.js
// -----------------------------------------------

const ProfileModel = require('../models/profile');

exports.addProfileForm = (req, res) => {
    res.render('Registry');
};

exports.addProfile = (req, res) => {
    ProfileModel.addProfile(req.body);
    res.redirect('');
};

exports.listProfiles = (req, res) => {
    let profiles = ProfileModel.getAllProfiles();
    res.render('index', { profiles });
};

exports.getSingleProfile = (req, res) => {
    let profile = ProfileModel.getSingleProfile();
    console.log(req.params.num1);
    res.render('individualprofile', { profile });
};

exports.getNthProfile = (req, res) => {
    let index = req.params.num1;
    let profile = ProfileModel.getNthProfile(index);
    console.log(req.params.num1);
    res.render('individualprofile', { profile });
};