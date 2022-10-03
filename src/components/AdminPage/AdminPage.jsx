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
            dispatch({ // After GET is finished, sends returned data to redux as payload
                type: 'SET_FEEDBACK',
                payload: response.data
            })
         }).catch((err) => {
            console.log('Error on GET', err);
         });
    }
    // This function will perform a DELETE to the server and
    // remove the feedback with the matching id that is passed as params in the url
    // Uses "sweet alerts" alert to add a nice confirmation button when trying to delete a feedback entry
    const deleteFeedback = (id) => {
      swal({ // Sweet alert for delete confirmation
        title: "Remove Feedback?",
        text: "Are you sure you want to remove this feedback?",
        buttons: {
          cancel: true,
          confirm: {
            text: "Remove",
            className: "redBtn",
          },
        },
      }).then((result) => {
        if (result) {
          axios({ // performs DELETE to server
            method: "DELETE",
            url: `/feedback/delete/${id}`,
          })
            .then(() => {
              getAllFeedback();
            })
            .catch((err) => {
              console.log("Error in DELETE: ", err);
            });
        }
      });
    };

    const flagFeedback = (id) => {
        axios({
            method: "PUT",
            url: `/feedback/flag/${id}`
        })
        .then(() => {
            getAllFeedback();
        })
        .catch((err) => {
            console.log('Error in PUT: ', err);
        });
    };

    function formatDate(dateDirty) {
        let niceDate = new Date(dateDirty);
        return niceDate.toLocaleDateString();
    }

    // Render a table poplulated with the data returned from the database
    return (
        <div className='adminDiv'>
            <h2>Admin Page</h2>
            {/* Table to display the feedback in database */}
            <table className="adminTable"> 
                <thead>
                    {/* Heading row */}
                    <tr>
                        <th>Feel</th>
                        <th>Understand</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Date</th>
                        <th>Follow Up?</th>
                        <th>Delete?</th>
                    </tr>
                </thead>
                {/* Table body */}
                <tbody>
                    {/* function to create a row for each element in the admin array */}
                    {admin.map((feedback) => {
                        console.log('This is feedback: ', feedback);
                        return(
                            <tr key={feedback.id} className="adminTableRows">
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td>
                                <td>{formatDate(feedback.date)}</td>
                                <td className="flagCell" onClick={() => {flagFeedback(feedback.id)}}>{feedback.flagged ? `✅`: `⭕`}</td>
                                <td className="deleteCell" onClick={() => {deleteFeedback(feedback.id)}}>❌</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        

    )
}

export default AdminPage;