import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

// This is the admin page component
// All feedback stored in the database is displayed here
function AdminPage() {
    const dispatch = useDispatch();
    const admin = useSelector(store => store.admin);
    // Make sure that the feedback is retrieved atleast once
    useEffect(() => {
        getAllFeedback();
    }, []);
    // This performs a GET to that returns all feedback in the attached database
    // The data returned is then store in redux store 'admin'
    const getAllFeedback = () => {
         axios.get('/feedback').then((response) => {
            dispatch({
                type: 'SET_FEEDBACK',
                payload: response.data
            })
         }).catch((err) => {
            console.log('Error on GET', err);
         });
    }
    // Render a table poplulated with the data returned from the database
    return (
        <div className='adminDiv'>
            <h2>Admin Page</h2>
            <table className="adminTable">
                <thead>
                    <tr>
                        <th>Feel</th>
                        <th>Understand</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {admin.map((feedback) => {
                        console.log('This is feedback: ', feedback);
                        return(
                            <tr key={feedback.id}>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td>
                                <td>{feedback.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        

    )
}

export default AdminPage;