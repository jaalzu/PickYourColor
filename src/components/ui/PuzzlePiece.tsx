// src/components/ui/PuzzlePiece.tsx
import styles from './PuzzlePiece.module.css';

interface PuzzlePieceProps {
  colorVar: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const PuzzlePiece = ({ colorVar, className = '' }: PuzzlePieceProps) => {
  return (
    <div
      className={`${styles.puzzlePiece} ${className}`}
      style={{ backgroundColor: `var(--color-${colorVar})` }}
    />
  );
};