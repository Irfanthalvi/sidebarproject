/**
    * @description      : 
    * @author           : computer
    * @group            : 
    * @created          : 03/12/2024 - 12:24:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/12/2024
    * - Author          : computer
    * - Modification    : 
**/
import "./NewCollectiveLeave.css"; // Custom CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@mui/material";
import RichTextEditor from "./RichTextEditor";

const NewCollectiveLeave = () => {

  return (
    <div className="form-container">
      {/* Header */}
      <h2 className="form-title">
        <FontAwesomeIcon icon={faUsers} /> New Collective Leave
      </h2>

      <form className="form">
        {/* Groups Field */}
        <div className="form-group">
          <label htmlFor="groups" className="form-label">
            Groups
          </label>
          <FontAwesomeIcon icon={faUser} className="form-icon" />
          <TextField
            type="text"
            id="groups"
            placeholder="Select Groups"
            className="form-input"
            variant="standard"
            size="small"
          />
        </div>
        {/* Groups Field */}
        <div className="form-group">
          <label htmlFor="groups" className="form-label">
            Users
          </label>
          <FontAwesomeIcon icon={faUser} className="form-icon" />
          <TextField
            type="text"
            id="Users"
            placeholder="Select Users"
            className="form-input"
            variant="standard"
            size="small"
          />
        </div>
        {/* {types} */}
        <div className="form-group">
          <label htmlFor="start-time" className="form-label">
            Types
          </label>
          <TextField
            select
            id="Types"
            sx={{ width: "25%" }}
            className="form-input"
            variant="standard"
            size="small"
          // Improved standard color
          >
            <option value="Morning">sick leave</option>
            <option value="Afternoon">Other leave</option>
            <option value="Afternoon">Paid vacation (Notice period: 7 days) </option>

          </TextField>
        </div>
        {/* Start Date and Time */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="start-date" className="form-label">
              Start Date
            </label>
            <FontAwesomeIcon icon={faCalendarAlt} className="form-icon" />
            <TextField
              type="date"
              id="start-date"
              sx={{ width: "25%" }}
              className="form-input"
              variant="standard"
              size="small"
            // Improved standard color
            />
          </div>
          <div className="form-group">
            <label htmlFor="start-time" className="form-label">
              Now
            </label>
            <TextField
              select
              id="start-time"
              sx={{ width: "25%" }}
              className="form-input"
              variant="standard"
              size="small"
            // Improved standard color
            >
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
            </TextField>
          </div>
        </div>

        {/* End Date and Time */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="end-date" className="form-label">
              End Date
            </label>
            <FontAwesomeIcon icon={faCalendarAlt} className="form-icon" />
            <TextField
              type="date"
              id="end-date"
              sx={{ width: "25%" }}
              className="form-input"
              variant="standard"
              size="small"
            // Improved standard color
            />
          </div>
          <div className="form-group">
            <label htmlFor="end-time" className="form-label">
              Now
            </label>
            <TextField
              select
              sx={{ width: "25%" }}
              id="end-time"
              className="form-input"
              variant="standard"
              size="small"
            // Improved standard color
            >
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
            </TextField>
          </div>
        </div>

        {/* Approver Field */}
        <div className="form-group">
          <label htmlFor="approval" className="form-label">
            Will be Approved By
          </label>
          <FontAwesomeIcon icon={faUser} className="form-icon" />
          <TextField
            type="text"
            id="approval"
            placeholder="Select Approver"
            className="form-input"
            variant="standard"
            size="small"
          // Improved standard color
          />
        </div>

        {/* Checkboxes */}
        <div className="form-checkbox">
          <label>
            <input type="checkbox" /> Automatic Validation
          </label>
          <label>
            <input type="checkbox" /> Automatic Mailing
          </label>
        </div>

        {/* Description Field */}
        <div className="form-group">
            <RichTextEditor />
        </div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            Create Collective Leave
          </button>
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewCollectiveLeave;
