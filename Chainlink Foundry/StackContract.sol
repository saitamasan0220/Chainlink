contract something {
    function something() {
        s_balances[msg.sender] = s_balances[msg.sender] + amount;
    }
}
