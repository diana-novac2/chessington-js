import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPosition = board.findPiece(this);
        let rookMoves: Square[] = [];

        for (let row = 0; row < 8; row++) {
            if (currentPosition.row === row) {
                continue;
            }
            rookMoves.push(new Square(row, currentPosition.col));
        }

        for (let col = 0; col < 8; col++) {
            if (currentPosition.col === col) {
                continue;
            }

            rookMoves.push(new Square(currentPosition.row, col));
        }

        return rookMoves;
    }
}
