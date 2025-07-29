import React, { Component } from 'react';

class GetUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({
        user: data.results[0],
        loading: false
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false
      });
    }
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="user-container">
        <h2>User Details</h2>
        <div className="user-card">
          <img 
            src={user.picture.large} 
            alt={`${user.name.first} ${user.name.last}`}
            className="user-image"
          />
          <div className="user-info">
            <p><strong>Title:</strong> {user.name.title}</p>
            <p><strong>First Name:</strong> {user.name.first}</p>
            <p><strong>Last Name:</strong> {user.name.last}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GetUser;