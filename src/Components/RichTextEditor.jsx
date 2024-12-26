/**
    * @description      : 
    * @author           : computer
    * @group            : 
    * @created          : 03/12/2024 - 17:45:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 03/12/2024
    * - Author          : computer
    * - Modification    : 
**/
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill editor styles

const RichTextEditor = () => {
    const [description, setDescription] = useState(''); // State for managing description

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const styles = {
        formGroup: {
            margin: '20px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Space between the label and the text editor
        },
        label: {
            marginRight: '20px', // Add spacing between the label and the text editor
            fontWeight: 'bold',
            whiteSpace: 'nowrap', // Prevent label text from wrapping
        },
        descriptionContainer: {
            flex: '1', // Make the text editor container take the remaining space
            border: '1px solid #ccc',
            borderRadius: '5px',
        },
        description: {
            minHeight: '150px',
        },
    };

    const quillModules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'],
        ],
    };

    return (
        <div>
            {/* Description Section */}
            <div style={styles.formGroup}>
                <label style={styles.label}>Description:</label>
                <div style={styles.descriptionContainer}>
                    <ReactQuill
                        value={description}
                        onChange={handleDescriptionChange}
                        modules={quillModules}
                        style={styles.description}
                        placeholder="Enter description..."
                    />
                </div>
            </div>
        </div>
    );
};

export default RichTextEditor;
