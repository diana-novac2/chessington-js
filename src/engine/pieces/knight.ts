import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    // public getAvailableMoves(board: Board) {
    //     const verticalJump = [1, 1, 2, 2, -1, -1, -2, -2];
    //     const horizontalJump = [2, -2, 1, -1, 2, -2, -1, 1];
    //
    //     const currentPosition = board.findPiece(this);
    //     let moves: Square[] = [];
    //
    //     for (let i = 0; i < 8; i++) {
    //         const nextPosition = new Square(currentPosition.row + verticalJump[i],
    //                                         currentPosition.col + horizontalJump[i]);
    //         if (nextPosition.isInsideBoard()) {
    //             moves.push(nextPosition);
    //         }
    //     }
    //
    //     return moves;
    // }
}
