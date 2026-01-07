import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="not-found-container" style={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <SEO
                title="404 - Pàgina no trobada"
                description="La pàgina que cerques no existeix o ha estat moguda."
            />
            <h1 style={{ fontSize: 'var(--text-hero)', color: 'var(--primary)', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ marginBottom: '2rem' }}>Ups! Pàgina no trobada</h2>
            <p style={{ marginBottom: '2rem' }}>
                Sembla que la pàgina que busques no existeix.
            </p>
            <Link to="/" className="btn btn-primary" style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary)',
                color: 'white',
                borderRadius: 'var(--radius-md)',
                fontWeight: 'bold',
                textDecoration: 'none'
            }}>
                Tornar a l'inici
            </Link>
        </div>
    );
};

export default NotFound;
