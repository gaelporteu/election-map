// Politician factory function object
let newPolitian = function (name, partyColor) {
  // Politician object
  let politician = {
      nameFull: name,
      partyColor: partyColor,
      electionResults: null,
      totalVotes: 0
    };
  // The return of the object
  return politician;
}
// First new politician object
let leaf = newPolitian("Frederik Andersen", [13, 13, 201]);
// Second new politician object
let hab = newPolitian("Carey Price", [206, 13, 3]);

// All the votes for the leafs candidate
leaf.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

// All the votes for the habs candidate
hab.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

leaf.electionResults[9] = 1;
hab.electionResults[9] = 28;

leaf.electionResults[4] = 17;
hab.electionResults[4] = 38;

leaf.electionResults[43] = 11;
hab.electionResults[43] = 27;

let setStateResults = function (state) {
    theStates[state].winner = null;
  if (hab.electionResults[state] > leaf.electionResults[state]) {
     theStates[state].winner = hab;
  } else if (hab.electionResults[state] < leaf.electionResults[state]) {
     theStates[state].winner = leaf;
  } 

  let stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [100, 100, 100];
    stateWinner = "TIE";
  }

// Table for each state name when mouse over
const stateNameIntoTable = document.getElementById('stateResults');
const header = stateNameIntoTable.children[0].children[0];
const stateName = header.children[0];
stateName.innerText = theStates[state].nameFull;


// Table for each state abbrev when mouse over
const stateAbbrIntoTable = document.getElementById('stateResults');
const header2 = stateAbbrIntoTable.children[0].children[0];
const stateNameAbbr = header2.children[1];
stateNameAbbr.innerText = theStates[state].nameAbbrev;

// Table for each state hab name when mouse over
const stateHabVoteIntoTable = document.getElementById('stateResults');
const habVoteResultState = stateHabVoteIntoTable.children[1].children[0];
const stateHabName = habVoteResultState.children[0];
stateHabName.innerText = hab.nameFull;

// Table for each state hab vote result in state when mouse over
const stateHabVoteResultIntoTable = document.getElementById('stateResults');
stateHabVoteResultIntoTable.children[1].children[0].children[1].innerText = hab.electionResults[state];

// Table for each state leaf name when mouse over
const stateLeafVoteIntoTable = document.getElementById('stateResults');
stateLeafVoteIntoTable.children[1].children[1].children[0].innerText = leaf.nameFull;

// Table for each state leaf vote result in state when mouse over
const stateLeafVoteResultIntoTable = document.getElementById('stateResults');
stateLeafVoteResultIntoTable.children[1].children[1].children[1].innerText = leaf.electionResults[state];

// Table for each state winner in state when mouse over
const stateWinnerIntoTable = document.getElementById('stateResults');
stateWinnerIntoTable.children[1].children[2].children[1].innerText = stateWinner.nameFull || stateWinner;
}

leaf.totalVotes = function () {
  
  this.totalVotes = 0;

  for (let i = 0; i < this.electionResults.length; i++) {
    this.totalVotes += this.electionResults[i];
  }
}

leaf.totalVotes();

hab.totalVotes = function () {
  
  this.totalVotes = 0;

  for (let i = 0; i < this.electionResults.length; i++) {
    this.totalVotes += this.electionResults[i];
  }
}

hab.totalVotes();

// console.log("Hab total votes is " + hab.totalVotes);
// console.log("Leaf total votes is " + leaf.totalVotes);

// let leafTotalVotes = leaf.totalVotes;
// let habTotalVotes = hab.totalVotes;


let winner;
function votingResults() {
  
  if (leaf.totalVotes === hab.totalVotes) {
    winner = null;
  } else if (leaf.totalVotes > hab.totalVotes) {
    winner = leaf.nameFull;
  } else {
    winner = hab.nameFull;
  }
  // console.log(winner);
  return winner;
}


votingResults();

// Top level table Hab name
const countryTableName1 = document.getElementById('countryResults');
countryTableName1.children[0].children[0].children[0].innerText = hab.nameFull;

// Top level table Hab result
const countryTableResult1 = document.getElementById('countryResults');
countryTableResult1.children[0].children[0].children[1].innerText = hab.totalVotes;

// Top level table Leaf name
const countryTableName2 = document.getElementById('countryResults');
countryTableName1.children[0].children[0].children[2].innerText = leaf.nameFull;

// Top level table Leaf result
const countryTableResult2 = document.getElementById('countryResults');
countryTableResult1.children[0].children[0].children[3].innerText = leaf.totalVotes;

// Top level table Winner name
const countryTableWinner = document.getElementById('countryResults');
countryTableName1.children[0].children[0].children[5].innerText = winner;