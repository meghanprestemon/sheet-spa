import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import Home from './Home/Home.js';
import Login from './Login.js';
import {  } from '../actions';

const Spreadsheet = () => (
  <div className="spreadsheet">
    <Table celled striped definition>
      
    </Table>
  </div>
);

export default Spreadsheet;
