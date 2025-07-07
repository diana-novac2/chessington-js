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

        let foundObstacle = false;
        for (let row = 0; row < GameSettings.BOARD_SIZE && !foundObstacle; row++) {
            for (let col = 0; col < GameSettings.BOARD_SIZE && !foundObstacle; col++) {
                let nextPosition = new Square(row, col);
                if (this.isValidMove(currentPosition, nextPosition) && !board.getPiece(nextPosition)) {
                    bishopMoves.push(nextPosition);
                } else if (!!board.getPiece(nextPosition)) {
                    foundObstacle = true;
                }
            }
        }

        for (let row = currentPosition.row + 1; row < GameSettings.BOARD_SIZE && !foundObstacle; row++) {

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
