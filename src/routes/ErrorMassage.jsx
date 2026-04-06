import React from 'react';
import { useNavigate } from 'react-router';

const ErrorMessage = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            textAlign: 'center',
            backgroundColor: '#f8f9fa',
            color: '#333',
            padding: '2rem'
        }}>
            <h1 style={{ fontSize: '6rem', margin: 0 }}>404</h1>
            <h2 style={{ margin: '1rem 0' }}>Oops! Page not found</h2>
            <p style={{ maxWidth: '400px', marginBottom: '2rem', color: '#555' }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <button 
                onClick={() => navigate('/')}
                style={{
                    padding: '0.8rem 2rem',
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: '0.3s'
                }}
                onMouseEnter={e => e.target.style.backgroundColor = '#4338ca'}
                onMouseLeave={e => e.target.style.backgroundColor = '#4f46e5'}
            >
                Go Home
            </button>
        </div>
    );
};

export default ErrorMessage;