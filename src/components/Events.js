import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Card, CardContent, CardMedia } from '@mui/material';
import { Event as EventIcon, CloudUpload as UploadIcon } from '@mui/icons-material';
import Navbar from '../components/Navbar';

const EventListingPage = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', description: '', category: '', image: '' });
  const [filter, setFilter] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent({ ...newEvent, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', date: '', location: '', description: '', category: '', image: '' });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredEvents = events.filter(event => event.category.includes(filter));

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Event Listing
        </Typography>
        <FormControl fullWidth margin="normal" style={{ marginBottom: '20px' }}>
          <InputLabel>Filter by Category</InputLabel>
          <Select value={filter} onChange={handleFilterChange}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Religious">Religious</MenuItem>
            <MenuItem value="Social">Social</MenuItem>
            <MenuItem value="Charity">Charity</MenuItem>
          </Select>
        </FormControl>
        <div>
          {filteredEvents.map((event, index) => (
            <Card key={index} variant="outlined" style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              {event.image ? (
                <CardMedia component="img" image={event.image} alt={event.title} style={{ width: 150, height: 150, objectFit: 'cover' }} />
              ) : (
                <div style={{ width: 150, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
                  <Typography color="textSecondary">No Image</Typography>
                </div>
              )}
              <CardContent>
                <Typography variant="h5" component="div">{event.title}</Typography>
                <Typography color="textSecondary">Date: {event.date}</Typography>
                <Typography color="textSecondary">Location: {event.location}</Typography>
                <Typography variant="body2" component="p">{event.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <Typography variant="h5" gutterBottom>
          Add New Event
        </Typography>
        <form noValidate autoComplete="off">
          <TextField name="title" label="Title" fullWidth margin="normal" value={newEvent.title} onChange={handleInputChange} style={{ marginBottom: '20px' }} />
          <TextField name="date" label="Date" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={newEvent.date} onChange={handleInputChange} style={{ marginBottom: '20px' }} />
          <TextField name="location" label="Location" fullWidth margin="normal" value={newEvent.location} onChange={handleInputChange} style={{ marginBottom: '20px' }} />
          <TextField name="description" label="Description" fullWidth margin="normal" value={newEvent.description} onChange={handleInputChange} style={{ marginBottom: '20px' }} />
          <FormControl fullWidth margin="normal" style={{ marginBottom: '20px' }}>
            <InputLabel>Category</InputLabel>
            <Select name="category" value={newEvent.category} onChange={handleInputChange}>
              <MenuItem value="Religious">Religious</MenuItem>
              <MenuItem value="Social">Social</MenuItem>
              <MenuItem value="Charity">Charity</MenuItem>
            </Select>
          </FormControl>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ marginBottom: '20px', display: 'block' }} />
          <Button variant="contained" color="primary" startIcon={<UploadIcon />} onClick={handleAddEvent}>
            Add Event
          </Button>
        </form>
      </Container>
    </>
  );
};

export default EventListingPage;
