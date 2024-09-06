import { SxProps, Theme } from '@mui/material';

export const containerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  mt: 5
};

export const titleStyle: SxProps<Theme> = {
  mb: 4,
  fontWeight: 'bold'
};

export const boxStyle: SxProps<Theme> = {
  width: '100%',
  backgroundColor: '#ffffff',
  borderRadius: 2,
  boxShadow: 3,
  p: 3
};