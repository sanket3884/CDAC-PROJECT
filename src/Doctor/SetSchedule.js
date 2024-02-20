import React from 'react';

const SetSchedule = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2 className="text-center">Set Schedule</h2>
                
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Start time:</label>
                            <input type="time" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">End time:</label>
                            <input type="time" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Select Days:</label>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="sunday" />
                                <label className="form-check-label" htmlFor="sunday">Sunday</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="monday" />
                                <label className="form-check-label" htmlFor="monday">Monday</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="tuesday" />
                                <label className="form-check-label" htmlFor="tuesday">Tuesday</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="wednesday" />
                                <label className="form-check-label" htmlFor="wednesday">Wednesday</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="thursday" />
                                <label className="form-check-label" htmlFor="thursday">Thursday</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="friday" />
                                <label className="form-check-label" htmlFor="friday">Friday</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="saturday" />
                                <label className="form-check-label" htmlFor="saturday">Saturday</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SetSchedule;
