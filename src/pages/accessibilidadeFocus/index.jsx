import React from 'react';
import { Button, Box } from '@mui/material';

export default function accessibilidadeFocus() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', marginTop: '50px' }}>
      {/* Botão Verde (Foco primeiro) */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'green',
          '&:focus': {
            outline: '3px solid green',
          },
        }}
        tabIndex={1} // Foco começa aqui
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
          },
        }}
        tabIndex={3} // Foco vem por último
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
          },
        }}
        tabIndex={2} // Foco vem em segundo
      >
        Botão Azul
      </Button>
    </Box>
  );
}
