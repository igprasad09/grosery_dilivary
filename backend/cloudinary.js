const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:  'dcazlekl5',
    api_key: '585952114294198',
    api_secret: 'iUfFDK-HxxGVGsLdgqxlOu8NN2U'
})

module.exports = cloudinary;