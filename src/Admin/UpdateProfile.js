const UpdateProfile = () => {

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text"/>
                </label><br />

                <label>
                    Mobile:
                    <input type="tel" />
                </label><br />

                <label>
                    Address:
                    <input type="text" />
                </label><br />

                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateProfile;