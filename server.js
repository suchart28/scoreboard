const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

let gameState = {
    tourney_name: 'MATCHDAY',
    t1_name: 'TEAM A', t2_name: 'TEAM B',
    t1_score: 0, t2_score: 0,
    t1_logo: '', t2_logo: '',
    t1_color: '#ff0000', t1_sub_color: '#ffffff', // t1 สีเสื้อ, สีกางเกง
    t2_color: '#0000ff', t2_sub_color: '#ffffff', // t2 สีเสื้อ, สีกางเกง
    t1_pens: [], t2_pens: [],
    timer_seconds: 0,
    added_time: 0,
    show_sub: false,
    current_sub: { in: '', out: '', logo: '' }
};

io.on('connection', (socket) => {
    socket.emit('updateData', gameState);
    socket.on('updateGameState', (newData) => {
        gameState = { ...gameState, ...newData };
        io.emit('updateData', gameState);
    });
    socket.on('goalScored', (goalData) => {
        io.emit('showGoalPopup', goalData);
    });
});

http.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});