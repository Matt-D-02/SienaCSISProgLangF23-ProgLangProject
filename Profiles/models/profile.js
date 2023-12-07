let profiles = [];

function getAllProfiles() {
    return profiles;
}

function getSingleProfile() {
    return profiles[0];
}

function addProfile(profileData) {
    profiles.push(profileData);
}

function getNthProfile(n) {
    return profiles[n];
}

module.exports = { getAllProfiles, addProfile, getSingleProfile, getNthProfile};