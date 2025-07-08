import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPosition = board.findPiece(this);
        const diagonalMoves = this.getDiagonalMoves(board, currentPosition);
        const straightMoves = this.getStraightMoves(board, currentPosition);

        return [...diagonalMoves, ...straightMoves];
    }
}
