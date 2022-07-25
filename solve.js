function check(sudoku,r,c,val) {
    for (var i = 0; i < 9; i++)
        if (sudoku[i][c] == val)
            return false
    
    for (var i = 0; i < 9; i++)
        if (sudoku[r][i] == val)
            return false
    
    var x = r - r % 3, y = c - c % 3
    
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            if (sudoku[x + i][y + j] == val)
                return false
        }
    }
    
    return true
}


function solve(sudoku) {
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            const I = String.fromCharCode(48 + i)
            const J = String.fromCharCode(48 + j)
            let s=I+J
            if (sudoku[i][j] == '') {
                for (var K = 1; K <= 9; K++)
                {
                    const k=String.fromCharCode(48+K)
                    if (check(sudoku,i,j,k)) {
                        sudoku[i][j] = String.fromCharCode(48 + K   )
                        document.getElementById(s).value = sudoku[i][j]

                        if (solve(sudoku) == true)
                            return true
                        else
                            sudoku[i][j]=''
                    }
                }
                return false;
            }
        }
    }
    return true
}


function create() {
    let sudoku = new Array(9);

    for (var i = 0; i < 9; i++){
        sudoku[i] = new Array(9);
    }

    var cnt=0

    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            const I = String.fromCharCode(48 + i)
            const J = String.fromCharCode(48 + j)
            let s=I+J
            sudoku[i][j] = document.getElementById(s).value;
            if (!(sudoku[i][j] > '0' && sudoku[i][j] <= '9'))
                    cnt+=1
            if (!((sudoku[i][j] > '0' && sudoku[i][j] <= '9') || sudoku[i][j] == '')) {
                alert("Invalid Sudoku")
                window.location.reload(true)
                return;
            }
        }
    }
    if (cnt == 81)
    {
        alert("Invalid Sudoku")
        window.location.reload(true)
        return;
    }
    var cond = solve(sudoku)
    
    if (cond == false)
        alert("Invalid Sudoku")
}
