const team = {
    _players: [
        { firstName: "Kana", lastName: "Keletu", age: 23 },
        { firstName: "Kaitu", lastName: "Musyi", age: 12 },
        { firstName: "Utui", lastName: "Kalamba", age: 17 },
    ],
    _games: [
        { opponent: "Oppo1", teamPoints: 6, opponentPoints: 3 },
        { opponent: "Oppo2", teamPoints: 10, opponentPoints: 5 },
        { opponent: "Oppo3", teamPoints: 14, opponentPoints: 7 },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this._games.push(game);
    },

};
team.addGame('Tittans', '100', '98');
team.addPlayer('Buggs', 'Bunny', 76);
console.log(JSON.stringify(team._games))..For vscode to show the full output

/*Output
[{"opponent":"Oppo1","teamPoints":6,"opponentPoints":3},{"opponent":"Oppo2","teamPoints":10,"opponentPoints":5},{"opponent":"Oppo3","teamPoints":14,"opponentPoints":7},{"opponent":"Tittans","teamPoints":"100","opponentPoints":"98"}]
 */




