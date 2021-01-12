// New politician object factory
var newPolitician = function(name) {
    
    // Politician object
    var politician = {};
        politician.name = name;
        politician.results = null;
        politician.votes = 0;
  
  	this.resultsTotal = 0;

    for (var i = 0; i < results.length; i++) {
    this.resultsTotal = this.resultsTotal + this.results[i];
    }
    
    // Return new object
    return politician;
};

// Create each politician with parameters
var blueCan = newPolitician("Bob Uruncle");

var redCan = newPolitician("Jane Doe");

blueCan.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

redCan.results = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

blueCan.results[9] = 1;

redCan.results.splice(9, 1, 28);

blueCan.results.splice(4, 1, 17);

redCan.results.splice(4, 1, 38);

blueCan.results.splice(43, 1, 11);

redCan.results.splice(43, 1, 27);


console.log("Red candidate votes is " +redCanSum);

