import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    private firstMove: boolean;

    public constructor(player: Player) {
        super(player);
        this.firstMove = true;
    }


    public moveTo(board: Board, newSquare: Square) {
        this.firstMove = false;
        super.moveTo(board, newSquare);
    }

    public getAvailableMoves(board: Board) {
        const currentPosition = board.findPiece(this);

        if (this.player === Player.WHITE) {
            return this.whitePawnMoves(currentPosition);
        } else {
            return this.blackPawnMoves(currentPosition);
        }
    }

    private whitePawnMoves(currentPosition: Square) {
        const upOneSquare = new Square(currentPosition.row + 1, currentPosition.col);
        const upTwoSquares = new Square(currentPosition.row + 2, currentPosition.col);

        if (this.firstMove) {
            return [upOneSquare, upTwoSquares];
        }

        return [upOneSquare];
    }

    private blackPawnMoves(currentPosition: Square) {
        const downOneSquare = new Square(currentPosition.row - 1, currentPosition.col);
        const downTwoSquares = new Square(currentPosition.row - 2, currentPosition.col);

        if (this.firstMove) {
            return [downOneSquare, downTwoSquares];
        }

        return [downOneSquare];
    }
}
