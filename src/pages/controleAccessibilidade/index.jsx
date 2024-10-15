import React, { useState } from 'react';
import { Box, Button, Typography, Slider, Switch, FormControlLabel } from '@mui/material';

export default function ControleAccessibilidade() {
  const [fontSize, setFontSize] = useState(16);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [readerMode, setReaderMode] = useState(false);
  const [reading, setReading] = useState(false);
  const [activeReading, setActiveReading] = useState(false);

  const handleFontSizeChange = (event, newValue) => {
    setFontSize(newValue);
  };

  const handleLetterSpacingChange = (event, newValue) => {
    setLetterSpacing(newValue);
  };

  const handleLineHeightChange = (event, newValue) => {
    setLineHeight(newValue);
  };

  const handleReaderModeToggle = (event) => {
    setReaderMode(event.target.checked);
  };

  // Função para iniciar o leitor de tela ao clicar no texto usando Web Speech API
  const readText = (element) => {
    if ('speechSynthesis' in window) {
      const textToRead = element.innerText || element.textContent;
      const speech = new SpeechSynthesisUtterance(textToRead);
      speech.lang = 'pt-BR'; // Ajuste o idioma conforme necessário
      speech.pitch = 1;
      speech.rate = 1;
      window.speechSynthesis.speak(speech);
      setReading(true);

      speech.onend = () => {
        setReading(false);
      };
    } else {
      alert('Seu navegador não suporta leitura de texto!');
    }
  };

  // Função para parar o leitor de tela
  const stopReading = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setReading(false);
    }
  };

  // Função para ativar o modo de leitura com foco ao passar o mouse
  const activateReadingMode = () => {
    setActiveReading(!activeReading);
    stopReading()
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          top: '10%',
          right: '0',
          width: '300px',
          bgcolor: 'background.paper',
          boxShadow: 3,
          p: 2,
          borderRadius: '10px',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Controle de Acessibilidade
        </Typography>

        {/* Controle do tamanho da fonte */}
        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Tamanho da Fonte: {fontSize}px</Typography>
          <Slider
            value={fontSize}
            min={12}
            max={24}
            step={1}
            onChange={handleFontSizeChange}
            valueLabelDisplay="auto"
          />
        </Box>

        {/* Espaço entre letras */}
        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Espaço entre letras: {letterSpacing}em</Typography>
          <Slider
            value={letterSpacing}
            min={0}
            max={2}
            step={0.1}
            onChange={handleLetterSpacingChange}
            valueLabelDisplay="auto"
          />
        </Box>

        {/* Espaçamento entre linhas */}
        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Espaçamento entre linhas: {lineHeight}</Typography>
          <Slider
            value={lineHeight}
            min={1}
            max={3}
            step={0.1}
            onChange={handleLineHeightChange}
            valueLabelDisplay="auto"
          />
        </Box>


        {/* Controle do Leitor de Sites */}
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color={activeReading?  'secondary': "primary"}
            onClick={activateReadingMode}
          >
            {activeReading ? 'Desativar Leitura' : 'Ativar Leitura'}
          </Button>
        </Box>

        
      </Box>

      {/* Texto de exemplo para visualizar mudanças */}
      <Box sx={{ p: 5, mt: 10 }}>
        <Box
          id="exampleText1"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: activeReading ? 'url(/icons/volume-icon.png), auto' : 'default', // Define o cursor
            backgroundColor: 'transparent', // Remove a cor de fundo
            padding: activeReading ? '8px' : '0px',
            borderRadius: activeReading ? '8px' : '0px',
            transition: 'background-color 0.3s',
            position: 'relative',
            '&:hover': {
              textDecoration: activeReading ? 'underline' : 'none', // Sublinha apenas no hover e modo de leitura ativo
            },
          }}
          onClick={(e) => activeReading && readText(e.target)}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}em`,
              lineHeight: lineHeight,
            }}
          >
            Este é o primeiro texto. Passe o mouse sobre este texto para sublinhar e clique para ouvir.
          </Typography>
        </Box>

        <Box
          id="exampleText2"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: activeReading ? 'url(/icons/volume-icon.png), auto' : 'default', // Define o cursor
            backgroundColor: 'transparent', // Remove a cor de fundo
            padding: activeReading ? '8px' : '0px',
            borderRadius: activeReading ? '8px' : '0px',
            transition: 'background-color 0.3s',
            position: 'relative',
            mt: 3,
            '&:hover': {
              textDecoration: activeReading ? 'underline' : 'none', // Sublinha apenas no hover e modo de leitura ativo
            },
          }}
          onClick={(e) => activeReading && readText(e.target)}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}em`,
              lineHeight: lineHeight,
            }}
          >
            Este é o segundo texto. Passe o mouse sobre este texto para sublinhar e clique para ouvir.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
