import React from "react";
import { Shield, User, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F0F8FF] flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8">
        {/* Logo and Title */}
        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 bg-white rounded-full shadow-lg">
            <Shield className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-blue-900">HealthPass</h1>
          <p className="text-lg text-blue-600 max-w-md">
            Secure and decentralized healthcare credential management platform
          </p>
        </div>

        {/* Selection Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 border-2 border-blue-200 hover:border-blue-400 min-w-[200px]"
          >
            <User className="h-6 w-6" />
            <span className="text-lg font-semibold">Start as User</span>
          </button>

          <button
            onClick={() => navigate("/home")}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 min-w-[200px]"
          >
            <Building2 className="h-6 w-6" />
            <span className="text-lg font-semibold">Start as Hospital</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 