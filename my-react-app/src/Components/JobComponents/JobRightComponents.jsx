import React from 'react'
import { useParams, Link } from "react-router-dom";

const getData = (url) => {
    return fetch(url).then((res) => res.json());
  };

export default function JobRightComponents() {
    const { user_id } = useParams();
    const [userDetails, setUserDetails] = React.useState({});
  
    React.useEffect(() => {
      getData(`http://localhost:8080/jobdata/${user_id}`).then((res) =>
        setUserDetails(res.data)
      );
    }, [user_id]);
  return (
    <div>

    </div>
  )
}
