import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const verticalJump = [1, 1, 2, 2, -1, -1, -2, -2];
        const horizontalJump = [2, -2, 1, -1, 2, -2, -1, 1];

        const currentPosition = board.findPiece(this);
        let moves: Square[] = [];

        for (let i = 0; i < 8; i++) {
            const nextPosition = new Square(currentPosition.row + verticalJump[i],
                                            currentPosition.col + horizontalJump[i]);
            if (this.isValidMove(nextPosition)) {
                moves.push(nextPosition);
            }
        }

        return moves;
    }

    private isValidMove(pos: Square) {
        return pos.row >= 0 && pos.col >= 0 && pos.row < 8 && pos.col < 8;
    }

}
