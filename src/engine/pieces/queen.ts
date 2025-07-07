import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPosition = board.findPiece(this);
        const diagonalMoves = this.getDiagonalMoves(currentPosition);
        const straightMoves = this.getStraightMoves(currentPosition);

        return diagonalMoves.concat(straightMoves);
    }

    private getDiagonalMoves(currentPosition: Square) {
        let moves: Square[] = [];

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                let nextPosition = new Square(row, col);
                if (this.isValidDiagonal(currentPosition, nextPosition)) {
                    moves.push(nextPosition);
                }
            }
        }

        return moves;
    }

    private getStraightMoves(currentPosition: Square) {
        let moves: Square[] = [];

        for (let row = 0; row < 8; row++) {
            if (currentPosition.row === row) {
                continue;
            }
            moves.push(new Square(row, currentPosition.col));
        }

        for (let col = 0; col < 8; col++) {
            if (currentPosition.col === col) {
                continue;
            }

            moves.push(new Square(currentPosition.row, col));
        }

        return moves;
    }

    private isValidDiagonal(currentPosition: Square, nextPosition: Square) {
        if (currentPosition.equals(nextPosition)) {
            return false;
        }

        return Math.abs(nextPosition.row - currentPosition.row) == Math.abs(nextPosition.col - currentPosition.col);
    }
}
