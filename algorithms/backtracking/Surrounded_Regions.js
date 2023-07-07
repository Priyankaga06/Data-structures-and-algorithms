// ================================================== Surronded regions ================================================================= 

var solve = function (board) {
    // number of rows and columns 
    let rowCount = board.length;
    let colCount = board[0].length;

    // To make a list of what elements doesn't need to be flipped, Started exploring the corners since corners are the one's which we cannot flip. Changing the elements which doesn't need a flip are marked as 1

    // looping through 
    for (let i = 0; i < colCount; i++) {
        // first row
        flip(board, rowCount, colCount, 0, i);
        //last row
        flip(board, rowCount, colCount, rowCount - 1, i);
    }
    for (let i = 0; i < rowCount; i++) {
        // first column
        flip(board, rowCount, colCount, i, 0);
        //last column
        flip(board, rowCount, colCount, i, colCount - 1);
    }

    // looping through all the elements, changing all the 1's => "O" and "O" => "X"
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            if (board[i][j] == 1) {
                board[i][j] = "O";
            }
            else if (board[i][j] = "O") {
                board[i][j] = "X";
            }
        }
    }
    return board;

};

function flip(board, m, n, row, col) {
    // 1 represents already visitied element
    if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] == "X" || board[row][col] == 1) return;
    board[row][col] = 1;

    //DOWN
    flip(board, m, n, row + 1, col);

    //UP
    flip(board, m, n, row - 1, col);

    //LEFT
    flip(board, m, n, row, col - 1);

    //RIGHT
    flip(board, m, n, row, col + 1);
}


const rooms = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647]
];
function WallsAndGates(rooms) {

    let rowLength = rooms.length;
    let colLength = rooms[0].length;


    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {

            if (rooms[i][j] == 2147483647) {
                let paths = [];
                helper(rooms, paths, rowLength, colLength, i, j);
                console.log(paths);
            }
        }
    }

}

function helper(rooms, paths, m, n, row, col, inputLength = 0) {
    if (row < 0 || row >= m || col < 0 || col >= n || rooms[row][col] == -1 || rooms[row][col] == "X") return;

    if (rooms[row][col] == 0) {
        paths.push(++inputLength);
        return;
    }

    rooms[row][col] = "X";
    helper(rooms, paths, m, n, row - 1, col, ++inputLength);
    helper(rooms, paths, m, n, row + 1, col, ++inputLength);
    helper(rooms, paths, m, n, row, col - 1, ++inputLength);
    helper(rooms, paths, m, n, row - 1, col + 1, ++inputLength);
    rooms[row][col] = 2147483647;
}

WallsAndGates(rooms);
