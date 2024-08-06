import React from 'react';
import './RecentOrder.scss';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';
import { Item } from '../common/StyledComponents';
import './RecentOrder.scss'

const getStatusStyles = (status) => {
  const theme = useTheme();

  switch (status) {
    case 'Delivered':
      return {
        backgroundColor: theme.palette.success.lighter,
        color: theme.palette.success.main, 
        fontSize: '12px',
        fontWeight: '600'
      };
    case 'Pending':
      return {
        backgroundColor: theme.palette.warning.lighter,
        color: theme.palette.warning.main, 
        fontSize: '12px',
        fontWeight: '600' 
      };
    case 'Cancelled':
      return {
        backgroundColor: theme.palette.error.lighter,
        color: theme.palette.error.main, 
        fontSize: '12px',
        fontWeight: '600'
      };
    default:
      return {
        backgroundColor: '#f2f6ff', 
        color: '#3b5eff', 
      };
  }
};

const RecentOrder = () => {
  const theme = useTheme();

  // Sample data
  const rows = [
    { customer: 'Alice', orderNo: '001', amount: '$120', status: 'Delivered' },
    { customer: 'Bob', orderNo: '002', amount: '$80', status: 'Pending' },
    { customer: 'Charlie', orderNo: '003', amount: '$200', status: 'Cancelled' },
    { customer: 'David', orderNo: '004', amount: '$150', status: 'Delivered' },
    { customer: 'Eva', orderNo: '005', amount: '$90', status: 'Pending' },
    { customer: 'Frank', orderNo: '006', amount: '$170', status: 'Delivered' },
  ];

  return (
    <Item>
      <Typography variant="h5">Recent Orders</Typography>
      <Box className="RecentOrderTable" sx={{ overflowX: 'auto', mt: 2 }}>
        <TableContainer sx={{ maxHeight: 300 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{minWidth: '90px', background: theme.palette.mode === "light" ? "#f2f6ff" : "#202028", fontWeight: '600' }}>Customer</TableCell>
                <TableCell sx={{minWidth: '90px', background: theme.palette.mode === "light" ? "#f2f6ff" : "#202028", fontWeight: '600' }}>Order No.</TableCell>
                <TableCell sx={{minWidth: '90px', background: theme.palette.mode === "light" ? "#f2f6ff" : "#202028", fontWeight: '600' }}>Amount</TableCell>
                <TableCell sx={{minWidth: '90px', textAlign: 'right', background: theme.palette.mode === "light" ? "#f2f6ff" : "#202028", fontWeight: '600' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 2 }}> {row.customer.charAt(0)}</Avatar>
                      {row.customer}
                    </Box>
                  </TableCell>
                  <TableCell>{row.orderNo}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell sx={{minWidth: '90px', textAlign: 'right' }}>
                    <Chip
                      label={row.status}
                      sx={getStatusStyles(row.status)}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Item>
  );
};

export default RecentOrder;
