import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(() => ({
  margin: 'auto',
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
        <video style={{width:"100%", height:"100vh", objectFit: "fill"}} autoPlay muted>
          <source src="/assets/videos/demo.mp4" type="video/mp4" />
        </video>
      </StyledContent>
    </>
  );
}
