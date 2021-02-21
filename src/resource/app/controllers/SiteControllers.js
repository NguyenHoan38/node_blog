class SiteControllers {
    // get /
    index (req, res) {
        res.render('home');
    }
    //get/search
    search (req, res) {
        alert(2)
        console.log('fafafghdjhdhhdhhddhdhdhdhgsgsgsgsgsgggggggggggggggggggggg');
        res.render('search');
    }
}
module.exports = new SiteControllers