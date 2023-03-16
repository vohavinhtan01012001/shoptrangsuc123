import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom"
import { privateRoutes, publicRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/elegant-icons.css'
import './assets/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './helpers/AuthContext';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [authState, setAuthState] = useState({
    email: "",
    fullname:"",
    id: 0,
    status: false,
    role:0
  });
  const [role,setRole] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/auth/auth", {
      headers: {
        accessToken: localStorage.getItem('accessToken'),
      },
    }).then(res => {
      if (res.data.error) {
        setAuthState({ ...authState, status: false });
      } else {
        setAuthState({
          email: res.data.email,
          fullname:res.data.fullname,
          id: res.data.id,
          status: true,
          role:res.data.role
        });
      }
    })
  }, []);

  console.log(authState)

  useEffect(()=>{
    setRole(authState.role);
  },[authState.role])
  console.log(role)
  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>

      <Router>
        <Routes>
          {
            publicRoutes.map((router, index) => {
              const Page = router.component;
              return (
                localStorage.getItem('accessToken') && router.path == "/login" ?
                 (<Route key={index} path={router.path} element={<Navigate to="/" />} />)
                :
                (<Route key={index} path={router.path} element={<Page />}/>)
              )
            })
          }
          {
            privateRoutes.map((router, index) => {
              const Page = router.component;
              return (
                localStorage.getItem('accessToken')?
                 (<Route key={index} path={router.path} element={<Page />} />)
                :
                (<Route key={index} path={router.path} element={<Navigate to="/" />}/>)
              )
            })
          }
        </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
