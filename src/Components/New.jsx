/**
    * @description      : 
    * @author           : computer
    * @group            : 
    * @created          : 01/12/2024 - 20:20:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/12/2024
    * - Author          : computer
    * - Modification    : 
**/
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import 'react-quill/dist/quill.snow.css'; // ReactQuill styling
import ReactQuill from 'react-quill';

const New = () => {
  const [formData, setFormData] = useState({
    user: 'David Doe',
    startDate: '',
    startTime: 'Morning',
    endDate: '',
    endTime: 'Afternoon',
    approver: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Leave Request Submitted:', formData);
  };

  const styles = {
    container: {
      width:"78vw",
      height:"100vh",
      padding: '20px',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'left',
      color: '#5D5D5D',
    },
    formGroup: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
    },
    label: {
      flex: '0 0 150px',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#4A4A4A',
    },
    input: {
      flex: '1',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    icon: {
      marginRight: '10px',
      fontSize: '16px',
      color: '#6C63FF',
    },
    select: {
      flex: '1',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    descriptionContainer: {
      flex: '1',
      borderRadius: '4px',
      height:"100%",
    },
    description: {
      height:"200px",
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginTop: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginLeft: '10px',
    },
    createButton: {
      backgroundColor: '#6C63FF',
      color: '#fff',
    },
    cancelButton: {
      backgroundColor: '#F56565',
      color: '#fff',
    },
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>
        <FontAwesomeIcon icon={faCalendarAlt} style={styles.icon} />
        New Leave Request
      </h3>
      <form onSubmit={handleSubmit}>
        {/* User Section */}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            <FontAwesomeIcon icon={faUser} style={styles.icon} />
            User:
          </label>
          <input
            type="text"
            value={formData.user}
            disabled
            style={styles.input}
          />
        </div>

        {/* Start Date */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <select
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
          </select>
        </div>

        {/* End Date */}
        <div style={styles.formGroup}>
          <label style={styles.label}>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <select
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
          </select>
        </div>

        {/* Approver Section */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Will be approved by:</label>
          <input
            type="text"
            name="approver"
            value={formData.approver}
            onChange={handleChange}
            placeholder="Enter approver name"
            style={styles.input}
          />
        </div>

        {/* Description Section */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <div style={styles.descriptionContainer}>
            <ReactQuill
              value={formData.description}
              onChange={handleDescriptionChange}
              modules={quillModules}
              style={styles.description}
              placeholder="Enter description..."
            />
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          <button
            type="submit"
            style={{ ...styles.button, ...styles.createButton }}
          >
            Create Leave Request
          </button>
          <button
            type="button"
            style={{ ...styles.button, ...styles.cancelButton }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default New;
