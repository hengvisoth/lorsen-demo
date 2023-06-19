// eslint-disable
import * as React from 'react';
import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// utils
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

function CustomizedSnackbars() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button
        variant="contained"
        style={{ backgroundColor: '#AF69EE', color: '#FFFFFF' }}
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'right',
        })}
      >
        Share
      </Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        message="Link Copied"
        key={vertical + horizontal}
      />
    </Stack>
  );
}

export default function ShopProductCard({ product }) {
  const { name, cover, colors, status } = product;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={colors} />
          <Typography variant="subtitle1">
            <CustomizedSnackbars />
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
