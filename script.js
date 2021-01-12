// Politician factory function object
let newPolitian = function (name) {
// Politician object
let politician = {
    nameFull: name,
    electionResults: null,
    totalVotes: 0
  };
  // The return of the object
  return politician;
}
// First new politician object
let hab = newPolitian("Carey Price");
// Second new politician object
let leaf = newPolitian("Frederik Andersen")
