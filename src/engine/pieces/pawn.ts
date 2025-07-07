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
            return this.whitePawnMoves(currentPosition, board);
        } else {
            return this.blackPawnMoves(currentPosition, board);
        }
    }

    private whitePawnMoves(currentPosition: Square, board: Board) {
        const upOneSquare = new Square(currentPosition.row + 1, currentPosition.col);
        const upTwoSquares = new Square(currentPosition.row + 2, currentPosition.col);
        let moves: Square[] = [];

        if (!board.getPiece(upOneSquare)) {
            moves.push(upOneSquare);
        }

        if (this.firstMove) {
            if (!board.getPiece(upOneSquare) && !board.getPiece(upTwoSquares)) {
                moves.push(upTwoSquares);
            }
        }

        return moves;
    }

    private blackPawnMoves(currentPosition: Square, board: Board) {
        const downOneSquare = new Square(currentPosition.row - 1, currentPosition.col);
        const downTwoSquares = new Square(currentPosition.row - 2, currentPosition.col);

        let moves: Square[] = [];

        if (!board.getPiece(downOneSquare)) {
            moves.push(downOneSquare);
        }

        if (this.firstMove) {
            if (!board.getPiece(downOneSquare) && !board.getPiece(downTwoSquares)) {
                moves.push(downTwoSquares);
            }
        }

        return moves;
    }
}
