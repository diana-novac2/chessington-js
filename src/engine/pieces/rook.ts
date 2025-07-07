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
        let rookMoves: Square[] = [];

        for (let row = 0; row < GameSettings.BOARD_SIZE; row++) {
            const nextPosition = new Square(row, currentPosition.col);

            if (currentPosition.row === row) {
                continue;
            }

            if (board.getPiece(nextPosition)) {
                break;
            }

            rookMoves.push(nextPosition);
        }

        for (let col = 0; col < GameSettings.BOARD_SIZE; col++) {
            const nextPosition = new Square(currentPosition.row, col)

            if (currentPosition.col === col) {
                continue;
            }

            if (board.getPiece(nextPosition)) {
                break;
            }

            rookMoves.push(nextPosition);
        }

        return rookMoves;
    }
}
