import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateTiles } from '../utils';
import { Grid, Container, Typography } from '@mui/material';
import { TileCard } from './TileCard';

export const GameBoard = () => {
  const { level } = useParams();
  const [tiles, setTiles] = useState([]);
  const [flippedTiles, setFlippedTiles] = useState([]); 
  const [disabled, setDisabled] = useState(false); 

  useEffect(() => {
    const newTiles = generateTiles(level);
    setTiles(newTiles);
  }, [level]);

  const handleTileClick = (id) => {
    if (disabled) return;

    const updatedTiles = tiles.map((tile) =>
      tile.id === id ? { ...tile, isFlipped: true } : tile
    );
    setTiles(updatedTiles);

    const newFlipped = [...flippedTiles, id];
    setFlippedTiles(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);

      const [first, second] = newFlipped;
      const firstTile = updatedTiles.find(t => t.id === first);
      const secondTile = updatedTiles.find(t => t.id === second);

      if (firstTile.symbol === secondTile.symbol) {
        // Match found!
        const matchedTiles = updatedTiles.map(tile =>
          tile.symbol === firstTile.symbol
            ? { ...tile, isMatched: true }
            : tile
        );
        setTimeout(() => {
          setTiles(matchedTiles);
          setFlippedTiles([]);
          setDisabled(false);
        }, 500);
      } else {
        // No match → flip back after delay
        setTimeout(() => {
          const resetTiles = updatedTiles.map(tile =>
            tile.id === first || tile.id === second
              ? { ...tile, isFlipped: false }
              : tile
          );
          setTiles(resetTiles);
          setFlippedTiles([]);
          setDisabled(false);
        }, 800);
      }
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{fontFamily:'Bangers, Poppins', color: '#00c6ff' }} mt={4}>
        Difficulty: {level.charAt(0).toUpperCase() + level.slice(1)}
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems='center' sx={{maxWidth: 600, margin: 'auto'}}>
        {tiles.map((tile) => (
          <Grid item key={tile.id} xs={3} sm={2} md={1} lg={3} xl={3}>
            <TileCard tile={tile} onClick={handleTileClick} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
