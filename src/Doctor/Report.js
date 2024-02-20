const Report = () => {
    return (
        <div>
            <h3>Sales Report</h3>
            <form>
                <label>
                    From Date:
                    <input type="date" min={"01/01/2023"} />
                </label><br />

                <label>
                    To Date:
                    <input type="date" max={"31/31/3000"} />
                </label><br />

                <label>
                    Request Type:
                    <input type="radio" name="requestType" value="month" checked />
                    <label>Month-wise</label>
                    <input type="radio" name="requestType" value="year" />
                    <label>Year-wise</label>
                </label><br />


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Report;