import React from 'react';
import { Nav } from 'react-bootstrap';

export class HomeTab extends React.Component {
    render() {
      return (
        <Nav.Link href="#">Home</Nav.Link>
      );
    }
  }
  
  export class AboutTab extends React.Component {
    render() {
      return (
        <Nav.Link href="#">About</Nav.Link>
      );
    }
  }
  
  export class ResourcesTab extends React.Component {
    render() {
      return (
        <Nav.Link href="#">Resources</Nav.Link>
      );
    }
  }
  