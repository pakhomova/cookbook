export const styles = {
  container: {
    margin: '0.5rem 1rem',
    '& textarea': {
      boxSizing: 'border-box',
      width: '100%',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontSize: '1rem',
      padding: '0.5em',
      border: '1px solid #f2d49f',
      borderRadius: '0.5em',
      '&:focus': {
        outline: 'none !important',
        border: '1px solid #c9a464'
      },
      '&:hover': {
        border: '1px solid #c9a464'
      }
    }
  }
};
