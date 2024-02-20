import AdminNavbar from "./AdminNavbar";

const ViewDoctor = () => {

    const doctorsData = [
        { id: 1, name: 'ABC', department: 'XYZ', experience: 2 },
        { id: 2, name: 'ABC', department: 'XYZ', experience: 3 },
      ];
      
      const ActionButtons = () => (
        <>
          <button>Edit</button>
          <button>Delete</button>
          <button>View Feedback</button>
        </>
      );

    return (
        <div>
            <h2>Doctor Profile</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Doctor Name</th>
                        <th>Department</th>
                        <th>Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorsData.map((doctor, index) => (
                        <tr key={doctor.id}>
                            <td>{index + 1}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.department}</td>
                            <td>{doctor.experience}</td>
                            <td><ActionButtons /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ViewDoctor;