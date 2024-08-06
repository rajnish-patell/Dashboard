
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// Styled Item component
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  backgroundImage: "unset",
  boxShadow: "unset",
  minHeight: '140px',
}));
