import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

// ----------------------------------------------------------------------

export default function TryonPage() {
  return (
    <>
      <Helmet>
        <title> Try On | Shop </title>
      </Helmet>

      <StyledContent>
        <video autoPlay muted>
          <source src="/assets/videos/demo.mp4" type="video/mp4" />
        </video>
      </StyledContent>
    </>
  );
}
