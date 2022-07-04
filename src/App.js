import Button from '@mui/material/Button';
import { theme } from 'style/theme/index'; // import './style.scss';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant='contained'>Hello World</Button>
    </ThemeProvider>
  );
}

export default App;
