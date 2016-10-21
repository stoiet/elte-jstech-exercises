import React, { Component } from 'react';
import './index.css';

export const LinkItem = ({ text, href }) => (
  <div className={ 'link-item' }>
    <div className={ 'link-item__text' }>{ text }</div>
    <div>{ href }</div>
  </div>
);
