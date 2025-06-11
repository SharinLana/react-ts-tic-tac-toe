## ------------------------------- TIC-TAC-TOE ------------------------------
React.js + TypeScript + npm

Installation process:
```sh
  npx create-react-app react-tic-tac-toe --template typescript # (say yes to any prompts)
```

Step-by-step guidance:

1. Create an array of the length === 9. Fill it with numbers.
2. Use this array to create a board made out of buttons (indexes === array values).
3. Style the board using CSS grid.
4. Set the board button values to empty strings using useState.
5. Create a global state to handle players' turns (false = "X" player, true = "O" player) + handle it on the button click.
6. In the same handler, change the value of the clicked board button to "O" or 'X" depending on the turn state;
7. Disable the clicked button (if the board value !== ""). 
8. Set state for the winner (false).
9. use useEffect to track every boardValues modification. If modified, define whether we have a winner or not (create a nested array with all possible win combinations) and every time the boardValues has changed, loop through them and check if we have a match. If so, reset the winner.
10. If we have the winner, display it on the screen.
11. Handle the draw case in the useEffect by checking if all the values of the boardValues are non-empty strings.
12. Disable all the buttons if we have a winner.
13. Style the application.
14. Refactor the code if needed.
15. Push to GitHub.