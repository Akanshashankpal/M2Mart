import React, { useEffect, useState } from 'react';
import Dashroute from '../pages/routes/Dashroute';
import { useLocation } from 'react-router-dom';
import { Riple } from 'react-loading-indicators';

const Mainroute = () => {
    const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
          setLoading(false);
      }, 1000); // Adjust timeout as needed

      return () => clearTimeout(timer);
  }, [location]);
    return (
        <div>
            {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <Riple color="#FF782D" size="medium" text="" textColor="" />
          </div>
        )}
            <Dashroute/>
        </div>
    );
}

export default Mainroute;
