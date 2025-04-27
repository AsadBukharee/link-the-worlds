
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 خطا: صارف نے غیر موجود صفحہ تک رسائی کی کوشش کی:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center font-urdu">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">!افوہ! صفحہ نہیں ملا</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          ہوم پیج پر واپس جائیں
        </a>
      </div>
    </div>
  );
};

export default NotFound;
