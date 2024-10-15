import React from 'react';
import { Button, Box } from '@mui/material';

export default function AccessibilidadeFocus({ readText, activeReading }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', marginTop: '50px' }}>
      {/* Botão Verde (Foco primeiro) */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'green',
          '&:focus': {
            outline: '3px solid green',
              textDecoration: activeReading ? 'underline' : 'none',
          },
        }}
        tabIndex={1} // Foco começa aqui
        onClick={(e) => activeReading && readText(e.target)} // Adiciona leitura ao clicar
      >
        Botão Verde
      </Button>

      {/* Botão Vermelho (Foco por último) */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'red',
          '&:focus': {
            outline: '3px solid red',
             textDecoration: activeReading ? 'underline' : 'none',
          },
        }}
        tabIndex={3} // Foco vem por último
        onClick={(e) => activeReading && readText(e.target)} // Adiciona leitura ao clicar
      >
        Botão Vermelho
      </Button>

      {/* Botão Azul (Foco segundo) */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'blue',
          '&:focus': {
            outline: '3px solid blue',
             textDecoration: activeReading ? 'underline' : 'none',
          },
        }}
        tabIndex={2} // Foco vem em segundo
        onClick={(e) => activeReading && readText(e.target)} // Adiciona leitura ao clicar
      >
        Botão Azul
      </Button>
    </Box>
  );
}