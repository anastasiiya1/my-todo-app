import { Container, Typography, Box } from '@mui/material';
import TodoList from './components/TodoList/TodoList';
import { containerStyle, titleStyle, boxStyle } from './AppStyles';

const App = () => {
  return (
    <Container sx={containerStyle} maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom sx={titleStyle}>
        My task list
      </Typography>
      <Box sx={boxStyle}>
        <TodoList />
      </Box>
    </Container>
  );
};

export default App;