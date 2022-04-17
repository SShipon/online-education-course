import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init.jsx";

const GoogleSign = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error ||error1) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}{ error1.message}</p>
      </div>
    );
  }

  if (user || user1) {
    navigate("/home");
  }
  if (loading || loading1) {
    return <p>Loading...</p>;
  }

  return (
    <div className="row">
      {errorElement}
      <div className="col-sm-12 col-md-6">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-45"
        >
          <i class="fa-brands fa-google"></i>
          <span> Google Sign in</span>
        </button>
      </div>
      <div className="col-sm-12 col-md-6">
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-45"
        >
          <i class="fa-brands fa-github"></i>
          <span> GitHub Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default GoogleSign;
