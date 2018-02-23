var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
mongoose.connect('mongodb://rainiah1:1122334455@ds011382.mlab.com:11382/rain').then(
    function () {
        console.log("connected");
    }).catch(
    function (error) {
        console.log(error.message)

    }
);


var Movie = mongoose.model('Movie', {
    name: String,
    country: String,
    image: String,
    trailer: String,
    actor: String,
    isAiring: Boolean


});
/* GET home page. */
// router.get('/', function (req, res) {\

//     res.render('index');});
// router.get('/', function(req, res) {
//   res.render('index');
// });
//
// router.get('/api/film',function (req,res) {
//     film.find(function (error,films){
//         res.json(films);
//     });
// });

router.get('/', function (req, res) {
    // var sinbad = new Movie({
    //     name: "sinbad",
    //     country: "usa ",
    //     image: "https://i.ytimg.com/vi/CBBWYjiCgd8/movieposter.jpg",
    //     trailer: "https://youtu.be/bRsdyOck9IY",
    //     isAiring: false
    //
    //
    // });
    // sinbad.save().then(function () {
    //     console.log("saved")
    // });
    res.render('index');
});
router.get('/app', function (req, res) {
    res.render('app');
});
router.post('/api/movie', function (req, res) {
    var newMovie = req.param('movie');

    var databaseMovie = new Movie(newMovie);
    databaseMovie.save()


});
router.delete('/api/movie', function (req, res) {
    var id = req.param('id');
    Movie.findByIdAndRemove(id).then(function () {
            console.log('deleted')
        }
    )

});

router.get('/api/movie', function (req, res) {
    Movie.find(function (error, Movies) {
        res.json(Movies);
    });
});

module.exports = router;

