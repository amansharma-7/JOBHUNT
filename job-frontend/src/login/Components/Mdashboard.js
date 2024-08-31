// import { useSelector } from "react-redux";
// import AdminScreen from "../../AdminScreen";
// import Login from "./Login";
// import ProviderScreen from "../../ProviderScreen";
// import JobSeekerScreen from "../../JobSeekerScreen";
// import jwtDecode from "jwt-decode";

// function Mdashboard() {
//   // const dispatch = useDispatch();
//   const selectauthToken = (rootstate) => rootstate.authToken;

//   const authToken = localStorage.getItem("token");
//   const redToken = useSelector(selectauthToken);

//   // if(redToken == {}){
//   //   if(authToken){
//   //     dispatch({type:"SETAUTHTOKEN",data:authToken});
//   //   }
//   // }

//   // if (authToken !== null && redAuthToken == {}) {
//   //   dispatch({ type: "SETAUTHTOKEN", data: authToken });
//   // }

//   if (authToken) {
//     const redAuthToken = jwtDecode(authToken);
//     // console.log("lol", decoded);
//     if (redAuthToken.role === "Admin") {
//       return <AdminScreen />;
//     }
//     if (redAuthToken.role === "Job Provider") {
//       return <ProviderScreen />;
//     }
//     if (redAuthToken.role === "User") {
//       return <JobSeekerScreen />;
//     }
//   }
//   return (
//     <>
//       <Login />
//     </>
//   );
// }

// export default Mdashboard;




import { useSelector } from "react-redux";
import AdminScreen from "../../AdminScreen";
import Login from "./Login";
import ProviderScreen from "../../ProviderScreen";
import JobSeekerScreen from "../../JobSeekerScreen";
import jwtDecode from "jwt-decode";

function Mdashboard() {
  const selectauthToken = (rootstate) => rootstate.authToken;
  const authToken = localStorage.getItem("token");
  const redToken = useSelector(selectauthToken);

  if (authToken) {
    try {
      const redAuthToken = jwtDecode(authToken);
      
      // Add console log to debug the role
      console.log("Role:", redAuthToken.role);
      
      // Conditionally render based on the role
      if (redAuthToken.role === "Admin") {
        return <AdminScreen />;
      }
      if (redAuthToken.role === "Job Provider") {
        return <ProviderScreen />;
      }
      if (redAuthToken.role === "User") {
        return <JobSeekerScreen />;
      }
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  // Fallback if no valid token or role
  return <Login />;
}

export default Mdashboard;
