import React, { Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Home = React.lazy(() => import('../pages/Home'));
const Cursos = React.lazy(() => import('../pages/Cursos'));
const Projectes = React.lazy(() => import('../pages/Projectes'));

const Contact = React.lazy(() => import('../pages/Contact'));
const AESSBot = React.lazy(() => import('../pages/AESSBot'));
const AESSBotInscripcio = React.lazy(() => import('../pages/AESSBotInscripcio'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

const LoadingSpinner = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--text-primary)' }}>
        <i className="fas fa-circle-notch fa-spin fa-3x"></i>
    </div>
);

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                    <Route path="/cursos" element={<PageTransition><Cursos /></PageTransition>} />
                    <Route path="/projectes" element={<PageTransition><Projectes /></PageTransition>} />

                    <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                    <Route path="/aessbot" element={<PageTransition><AESSBot /></PageTransition>} />
                    <Route path="/aessbot-inscripcio" element={<PageTransition><AESSBotInscripcio /></PageTransition>} />
                    <Route path="/aessbot.html" element={<Navigate to="/aessbot" replace />} />
                    <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
                </Routes>
            </AnimatePresence>
        </Suspense>
    );
};

export default AnimatedRoutes;
