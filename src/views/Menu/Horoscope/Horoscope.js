// import React, { useState } from 'react';
// import './Horoscope.css'; // Import CSS file for styling

// const Horoscope = () => {
//     // State variables for form fields
//     const [rashi, setRashi] = useState('');
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [formData, setFormData] = useState([]);
//     const [editIndex, setEditIndex] = useState(null);

//     // Function to handle adding a new title and description pair
//     const handleAdd = () => {
//         if (title.trim() !== '' && description.trim() !== '') {
//             if (editIndex !== null) {
//                 // Update existing entry
//                 const updatedFormData = [...formData];
//                 updatedFormData[editIndex] = { rashi, title, description };
//                 setFormData(updatedFormData);
//                 setEditIndex(null);
//             } else {
//                 // Add new entry
//                 setFormData([...formData, { rashi, title, description }]);
//             }
//             setTitle('');
//             setDescription('');
//         }
//     };

//     // Function to handle editing an entry
//     const handleEdit = (index) => {
//         const entryToEdit = formData[index];
//         setRashi(entryToEdit.rashi);
//         setTitle(entryToEdit.title);
//         setDescription(entryToEdit.description);
//         setEditIndex(index);
//     };

//     // Function to handle deleting an entry
//     const handleDelete = (index) => {
//         const newFormData = [...formData];
//         newFormData.splice(index, 1);
//         setFormData(newFormData);
//     };

//     // Function to handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Create an object to hold current form data
//         const formEntry = {
//             rashi,
//             entries: formData
//         };

//         if (formData.length === 0) {
//          alert("Please add title description after that press submit")
//         }

//         // Retrieve existing form submissions from local storage
//         const existingFormData = JSON.parse(localStorage.getItem('formSubmissions')) || [];

//         // Add current form data to the existing form submissions array
//         existingFormData.push(formEntry);

//         setFormData([])

//         // Save updated form submissions array to local storage
//         localStorage.setItem('formSubmissions', JSON.stringify(existingFormData));

//         // Clear form fields
//         setRashi('');
//         setTitle('');
//         setDescription('');
//         setEditIndex(null);
//     };

//     return (
//         <div className="form-container">
//             <h1>Horoscope Page</h1>
//             <form onSubmit={handleSubmit} className="form">
//                 <div className="form-group">
//                     <label htmlFor="rashi">Rashi:</label>
//                     <select
//                         id="rashi"
//                         value={rashi}
//                         onChange={(e) => setRashi(e.target.value)}
//                         className="form-control"
//                     >
//                         <option value="">Select Rashi</option>
//                         <option value="Aries">Aries</option>
//                         <option value="Taurus">Taurus</option>
//                         <option value="Gemini">Gemini</option>
//                         <option value="Cancer">Cancer</option>
//                         {/* Add more options as needed */}
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="title">Title:</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="description">Description:</label>
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         className="form-control"
//                     />
//                 </div>
//                 <button type="button" onClick={handleAdd} className="btn btn-primary">
//                     {editIndex !== null ? 'Update Entry' : 'Add Title and Description'}
//                 </button>
//                 <div>
//                     {formData.map((entry, index) => (
//                         <div key={index} className="form-group">
//                             <p>Rashi: {entry.rashi}</p>
//                             <p>Title: {entry.title}</p>
//                             <p>Description: {entry.description}</p>
//                             <button type="button" onClick={() => handleEdit(index)}>Edit</button>
//                             <button type="button" onClick={() => handleDelete(index)}>Delete</button>
//                         </div>
//                     ))}
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default Horoscope;



import React, { useState, useEffect } from 'react';
import './Horoscope.css'; // Import CSS file for styling

const Horoscope = () => {
    // State variables for form fields
    const [rashi, setRashi] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [formData, setFormData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [HoroscopeData, setHoroscopeData] = useState([]);
    let extraData = []
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            try {
                const data = localStorage.getItem('formSubmissions');
                const storedData = JSON.parse(data) || [];

                extraData = storedData
                extraData.map((item) => {
                    // console.log(item,"item--------")
                    item.entries.map((entries) => {
                        console.log(entries.rashi, entries.title, entries.description)
                    })
                })
                console.log(extraData, "extraData-----------")
                setHoroscopeData(extraData)

                console.log(HoroscopeData, "HoroscopeData-----------")

                resolve(storedData);

            } catch (error) {
                reject(error);
            }
        });
    };
    useEffect(() => {
        fetchData()
            .then((storedData) => {
                // setHoroscopeData(storedData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        textAlign: 'left'
    };

    const thStyle = {
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: '8px',
        borderBottom: '1px solid #ddd'
    };

    const tdStyle = {
        padding: '8px',
        borderBottom: '1px solid #ddd'
    };

    // Function to handle adding a new title and description pair
    const handleAdd = () => {
        if (title.trim() !== '' && description.trim() !== '') {
            if (editIndex !== null) {
                // Update existing entry
                const updatedFormData = [...formData];
                updatedFormData[editIndex] = { rashi, title, description };
                setFormData(updatedFormData);
                setEditIndex(null);
            } else {
                // Add new entry
                setFormData([...formData, { rashi, title, description }]);
            }
            setTitle('');
            setDescription('');
        }
    };

    // Function to handle editing an entry
    const handleEdit = (index) => {
        const entryToEdit = formData[index];
        setRashi(entryToEdit.rashi);
        setTitle(entryToEdit.title);
        setDescription(entryToEdit.description);
        setEditIndex(index);
    };

    // Function to handle deleting an entry
    const handleDelete = (index) => {
        const newFormData = [...formData];
        newFormData.splice(index, 1);
        setFormData(newFormData);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        handleAdd()
        e.preventDefault();

        // Create an object to hold current form data
        const formEntry = {
            // rashi,
            entries: formData
        };

        if (formData.length === 0) {
            alert("Please add title description after that press submit")
            return
        }

        // Retrieve existing form submissions from local storage
        const existingFormData = JSON.parse(localStorage.getItem('formSubmissions')) || [];

        // Add current form data to the existing form submissions array
        existingFormData.push(formData);

        setFormData([])

        // Save updated form submissions array to local storage
        localStorage.setItem('formSubmissions', JSON.stringify(existingFormData));

        // Clear form fields
        setRashi('');
        setTitle('');
        setDescription('');
        setEditIndex(null);
    };

    return (
        <div className="form-container">
            <h1>Horoscope Page</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="rashi">Rashi:</label>
                    <select
                        id="rashi"
                        value={rashi}
                        onChange={(e) => setRashi(e.target.value)}
                        className="form-control"
                    >
                        <option value="">Select Rashi</option>
                        <option value="Aries">Aries</option>
                        <option value="Taurus">Taurus</option>
                        <option value="Gemini">Gemini</option>
                        <option value="Cancer">Cancer</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="button" onClick={handleAdd} className="btn btn-primary">
                    {editIndex !== null ? 'Update Entry' : 'Add Title and Description'}
                </button>
                <div>
                    {formData.length > 0 && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Rashi</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formData.map((entry, index) => (
                                    <tr key={index}>
                                        <td>{entry.rashi}</td>
                                        <td>{entry.title}</td>
                                        <td>{entry.description}</td>
                                        <td>
                                            <button type="button" onClick={() => handleEdit(index)}>Edit</button>
                                            <button type="button" onClick={() => handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div>
                {/* <h1>Users Data</h1> */}
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Rashi</th>
                            <th style={thStyle}>Title</th>
                            <th style={thStyle}>Description</th>

                        </tr>
                    </thead>
                    <tbody>
                        {extraData.map((item, index) => (
                            item.entries.map((entries,ind) => {
                                <tr key={ind}>
                                    <td style={tdStyle}>{entries.rashi}</td>
                                    <td style={tdStyle}>{entries.title}</td>
                                    <td style={tdStyle}>{entries.description}</td>

                                </tr>
                            })
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Horoscope;
