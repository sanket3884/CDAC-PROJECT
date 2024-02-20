const AddDoctor = () => {
    return(
        <form >
      <label>
        Enter Name:
        <input type="text"  />
      </label><br />

      <label>
        Experience:
        <input type="text" name="experience" />
      </label><br />

      <label>
        Speciality:
        <input type="text" name="speciality"  />
      </label><br />

      <label>
        Email:
        <input type="email" name="email"  />
      </label><br />

      <label>
        Charges:
        <input type="number" name="charges"  />
      </label><br />

      <label>
        Contact No.:
        <input type="tel" name="contactNo"  />
      </label><br />

      Gender:
      <input type='radio' value='Male' name='gender'  /> Male
      <input type='radio' value='Female' name='gender'  /> Female

      Department:
      <select >
        <option value='' disabled selected>Select Department</option>
        <option value='HR' >HR</option>
        <option value='Finance'>Finance</option>
        <option value='IT'>IT</option>
      </select>

      <label>
        Password:
        <input type="password" name="Password"  />
      </label>

      <button type="submit">Add</button>
      <button>Clear</button>
    </form>
    )
}

export default AddDoctor;