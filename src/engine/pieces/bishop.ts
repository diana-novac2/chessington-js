import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPosition = board.findPiece(this);
        let bishopMoves: Square[] = [];

        for (let row = 0; row < GameSettings.BOARD_SIZE; row++) {
            for (let col = 0; col < GameSettings.BOARD_SIZE; col++) {
                let nextPosition = new Square(row, col);
                if (this.isValidMove(currentPosition, nextPosition)) {
                    bishopMoves.push(nextPosition);
                }
            }
        }

        return bishopMoves;
    }

    private isValidMove(currentPosition: Square, nextPosition: Square) {
        if (currentPosition.equals(nextPosition)) {
            return false;
        }

        return Math.abs(nextPosition.row - currentPosition.row) == Math.abs(nextPosition.col - currentPosition.col);
    }
}
