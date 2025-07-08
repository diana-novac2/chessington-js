import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from "../gameSettings";

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    protected checkAndAddMove(moves: Square[], row: number, col: number, board: Board) {
        const nextPosition = new Square(row, col);

        if (!!board.getPiece(nextPosition)) {
            return false;
        }

        moves.push(nextPosition);
        return true;
    }

    protected getDiagonalMoves(board: Board, currentPosition: Square) {
        let diagonalMoves: Square[] = [];

        for (let row = currentPosition.row + 1; row < GameSettings.BOARD_SIZE; row++) {
            let col = currentPosition.col + (row - currentPosition.row);
            if (!Square.at(row, col).isInsideBoard() || !this.checkAndAddMove(diagonalMoves, row, col, board)) {
                break;
            }
        }

        for (let row = currentPosition.row + 1; row < GameSettings.BOARD_SIZE; row++) {
            let col = currentPosition.col - (row - currentPosition.row);
            if (!Square.at(row, col).isInsideBoard() || !this.checkAndAddMove(diagonalMoves, row, col, board)) {
                break;
            }
        }

        for (let row = currentPosition.row - 1; row >= 0; row--) {
            let col = currentPosition.col + (row - currentPosition.row);
            if (!Square.at(row, col).isInsideBoard() || !this.checkAndAddMove(diagonalMoves, row, col, board)) {
                break;
            }
        }

        for (let row = currentPosition.row - 1; row >= 0; row--) {
            let col = currentPosition.col - (row - currentPosition.row);
            if (!Square.at(row, col).isInsideBoard() || !this.checkAndAddMove(diagonalMoves, row, col, board)) {
                break;
            }
        }

        return diagonalMoves;
    }

    protected getStraightMoves(board: Board, currentPosition: Square) {
        let straightMoves: Square[] = [];

        for (let row = currentPosition.row + 1; row < GameSettings.BOARD_SIZE; row++) {
            if (!this.checkAndAddMove(straightMoves, row, currentPosition.col, board)) {
                break;
            }
        }

        for (let row = currentPosition.row - 1; row >= 0; row--) {
            if (!this.checkAndAddMove(straightMoves, row, currentPosition.col, board)) {
                break;
            }
        }

        for (let col = currentPosition.col + 1; col < GameSettings.BOARD_SIZE; col++) {
            if (!this.checkAndAddMove(straightMoves, currentPosition.row, col, board)) {
                break;
            }
        }

        for (let col = currentPosition.col - 1; col >= 0; col--) {
            if (!this.checkAndAddMove(straightMoves, currentPosition.row, col, board)) {
                break;
            }
        }

        return straightMoves;
    }
}
