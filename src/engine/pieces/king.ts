import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPosition = board.findPiece(this);
        const verticalMoves = [-1, 0, 1];
        const horizontalMoves = [-1, 0, 1];

        let moves: Square[] = [];

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const nextPosition = new Square(currentPosition.row + verticalMoves[row],
                                                currentPosition.col + horizontalMoves[col]);
                if (nextPosition.isInsideBoard() && !nextPosition.equals(currentPosition)) {
                    moves.push(nextPosition);
                }
            }
        }

        return moves;
    }
}
