const ViewAppointment = () => {

    const temp=[
        {id:"01",docName:"Amit",patName:"Sanket",date:"13/09/2002",time:"23:22",status:"Confirm"},
        {id:"01",docName:"Amit",patName:"Sanket",date:"13/09/2002",time:"23:22",status:"Confirm"}
    ]

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Doctor Name</th>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        temp.map((report,index) => (
                            <tr key={report.id}>
                                <td>{index + 1}</td>
                                <td>{report.docName}</td>
                                <td>{report.patName}</td>
                                <td>{report.date}</td>
                                <td>{report.time}</td>
                                <td>{report.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewAppointment;