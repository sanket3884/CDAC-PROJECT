const UpdatePro = () => {
    return(
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" placeholder="Enter Name"/>
                </label><br/>

                <label>
                    Mobile Number:
                    <input type="tel" placeholder="Enter Contact "/>
                </label><br />

                <label>
                    Email:
                    <input type="email" placeholder="Enter Email"/>
                </label><br />

                <label>
                    Speciality:
                    <input type="text" placeholder="Enter Speciality"/>
                </label><br />

                <label>
                    Experience:
                    <input type="number" placeholder="0-5" min="0" max="25"/>
                </label><br />

                <label>
                    Department:
                    <input type="text" placeholder="Enter Department" />
                </label><br />

                <label>
                    Charges:
                    <input type="number" placeholder="Enter Amount" min="100" max="25000" />
                </label><br />

                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdatePro;