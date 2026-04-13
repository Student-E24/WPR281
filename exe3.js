for (let i = 1; i < 14; i++) {
    let row = "-"
    for (let j = 1; j < i; j++) {
        row += (i*j);
        row += j<i? "--":"-"
        
    }
    
}