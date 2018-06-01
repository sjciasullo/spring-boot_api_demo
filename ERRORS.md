# Error Log
1. Could not reference users id without unique constraint in migration V2 for creating activities table.
    - Solution: alter table to add constraint to users.id for it to be primary key
2. Changing user could not use === on client
    - solution: debug printing types along the chain of switches reveals that typeof option.value is string
        - converting value to string upon the change of option allows int to flow through app
