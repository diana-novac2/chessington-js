import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPosition = board.findPiece(this);
        const upOneSquare = new Square(currentPosition.row - 1, currentPosition.col);
        const downOneSquare = new Square(currentPosition.row + 1, currentPosition.col);

        return [upOneSquare, downOneSquare];
    }
}
