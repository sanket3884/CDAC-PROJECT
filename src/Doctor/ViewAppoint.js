const ViewAppoint = () => {

    let temp=[
        {id:"01",name:"Sanket",gender:"Male",date:"12/09/2032",time:"23:00",status:"confirm"}
    ]
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Patient Name</th>
                        <th>Gender</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        temp.map((data,index) => (
                            <tr key={data.id}>
                                <td>{index+1}</td>
                                <td>{data.name}</td>
                                <td>{data.gender}</td>
                                <td>{data.date}</td>
                                <td>{data.time}</td>
                                <td>{data.status}</td>
                                <td><button>View</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewAppoint;