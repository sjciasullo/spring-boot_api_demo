# Error Log
1. Could not reference users id without unique constraint in migration V2 for creating activities table.
  - Solution: alter table to add constraint to users.id for it to be primary key