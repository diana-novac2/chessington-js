import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPosition = board.findPiece(this);
        let moves: Square[] = [];

        for (let row = currentPosition.row + 1; row < GameSettings.BOARD_SIZE; row++) {
            if (!this.checkAndAddMove(moves, row, currentPosition.col, board)) {
                break;
            }
        }

        for (let row = currentPosition.row - 1; row >= 0; row--) {
            if (!this.checkAndAddMove(moves, row, currentPosition.col, board)) {
                break;
            }
        }

        for (let col = currentPosition.col + 1; col < GameSettings.BOARD_SIZE; col++) {
            if (!this.checkAndAddMove(moves, currentPosition.row, col, board)) {
                break;
            }
        }

        for (let col = currentPosition.col - 1; col >= 0; col--) {
            if (!this.checkAndAddMove(moves, currentPosition.row, col, board)) {
                break;
            }
        }

        return moves;
    }

    private checkAndAddMove(moves: Square[], row: number, col: number, board: Board) {
        const nextPosition = new Square(row, col);

        if (!!board.getPiece(nextPosition)) {
            return false;
        }

        moves.push(nextPosition);
        return true;
    }
}
