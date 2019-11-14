export const styles = {
    button: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: '1rem',
        padding: '0.5em',
        margin: '0.5em',
        background: '#fff',
        border: '2px solid #f2d49f',
        borderRadius: '0.5em',
        '&:hover': {
            background: '#f2d49f',
            color: '#fff'
        },
        '&[disabled]': {
            background: '#e0e0e0',
            border: '2px solid #e0e0e0',
            color: 'gray'
        },
        '&:focus': {
            outline: 'none !important',
        }
    }
};

