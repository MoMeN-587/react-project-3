import React, { useState } from 'react';
import './FormStyle.css';

export default function LoanForm() {
  const [formData, setFormData] = useState({
    name: '',
    job: '',
    email: '',
    age: ''
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.job && formData.email && formData.age) {
      setData([...data, { id: data.length + 1, ...formData }]);
      setFormData({ name: '', job: '', email: '', age: '' });
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className='container'>
      <div className="form-box">
        <h2>Add User Data</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='Enter Your Name' className='input' value={formData.name} onChange={handleChange} />
          <input type="text" name="job" placeholder='Enter Your Job' className='input' value={formData.job} onChange={handleChange} />
          <input type="email" name="email" placeholder='Enter Your Email' className='input' value={formData.email} onChange={handleChange} />
          <input type="number" name="age" placeholder='Enter Your Age' className='input' value={formData.age} onChange={handleChange} />
          <button type="submit">Add Data</button>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="id-circle">{item.id}</td>
              <td>{item.name}</td>
              <td>{item.job}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
