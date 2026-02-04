import styles from './PuzzlePiece.module.css';

interface PuzzlePieceProps {
  colorVar: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const PuzzlePiece = ({ colorVar, className = '' }: PuzzlePieceProps) => {
  return (
    <div
      // Usamos el nombre corregido
      className={`${styles.puzzlePiece} ${className}`} 
      style={{ backgroundColor: `var(--color-${colorVar})` }}
    />
  );
};