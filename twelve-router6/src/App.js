import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
  Link, 
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from "react-router-dom"




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/myapps" element={<Navigate replace to='/learn'/>} />
        <Route path="/learn" element={<Learn/>} >
           {/* no need to give / in nested route */}

          <Route path='courses' element={<Courses />} >
            <Route path=":courseid" element={<CourseId/>} />
          </Route>
          <Route path='bundles' element={<Bundles />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<p>404 : page not found</p>} />

      </Routes>
    </Router>
  );
}


const Home = () => {
  return ( 
      <>
      <h1>Home Route</h1>
      </>
   );
}

function Learn() {
  return ( 
    <>
        <h1>Learn</h1>
        <h3>All courses are listed bellow</h3>
        <Link className='text-white btn btn-primary mx-3' to="/learn/courses"> course</Link>
        <Link className="text-white btn btn-success" to="/learn/bundles"> bundle</Link>
        <Outlet />
    </>
   );
}


const Courses = () => {
  const courseList = ["React", "Angular", "Vue", "NodeJS"]
  const randomCourse = courseList[Math.floor(Math.random() * courseList.length) ]
  return ( 
      <>
      <h1>Courses List</h1>
      <h4>Courses Card</h4>

      <p>More Test</p>
      <NavLink style={ ( {isActive} ) => {
        return {
          backgroundColor : isActive ? "pink" : "yellow"
        }
      }}
      to={`/learn/courses/${randomCourse}`}> 
          {randomCourse}
      </NavLink>

      <NavLink className="btn btn-light ms-3" to={`/learn/courses/tests`}> 
          Tests
      </NavLink>

      <Outlet />
      </>
   );
}

const Bundles = () => {
  return ( 
      <>
      <h1>Bundles List</h1>
      <h4>Bundle Card</h4>
      </>
   );
}


const CourseId = () => {
  const {courseid} = useParams()
  const navigate = useNavigate()
  return ( 
      <>
      <h1>URL Params is :  {courseid}</h1>
      <button
        onClick={ () => (
          navigate("/dashboard", {state: courseid})
        )}
        className='btn btn-warning' 
      >Price
      </button>

      <Link to="/dashboard" state={"Django"}>Test link</Link>
      </>
   );
}

const Dashboard = () => {
  const location = useLocation()
  return ( 
      <>
      <h4>Dashboard</h4>
      <h3>Carried Info : {location.state}</h3>
      
      </>
   );
}

export default App;
